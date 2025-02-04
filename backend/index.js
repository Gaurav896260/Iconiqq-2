const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const mjml = require("mjml"); // Import MJML
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter for nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log("Transporter verification error:", error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

// Function to generate a sexy MJML template
const generateEmailTemplate = (name, email, phone, source, services) => {
  const mjmlTemplate = mjml(`
    <mjml>
      <mj-head>
        <mj-preview>🔥 New Contact Form Submission</mj-preview>
        <mj-style inline="inline">
          .button { background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; }
        </mj-style>
      </mj-head>
      <mj-body background-color="#f4f4f4">
        <mj-section background-color="#ffffff" padding="20px">
          <mj-column>
            <mj-text font-size="24px" font-weight="bold" color="#333">
              🚀 New Contact Form Submission
            </mj-text>
            <mj-divider border-color="#ddd" />
            <mj-text font-size="18px" color="#555">
              <strong>Name:</strong> ${name} <br/>
              <strong>Email:</strong> ${email} <br/>
              <strong>Phone:</strong> ${phone} <br/>
              <strong>Source:</strong> ${source || "Not specified"} <br/>
              <strong>Services Requested:</strong> ${
                services || "Not specified"
              }
            </mj-text>
            <mj-button background-color="#007bff" color="white" href="mailto:${email}">
              Reply to ${name}
            </mj-button>
          </mj-column>
        </mj-section>
        <mj-section background-color="#222" padding="20px">
          <mj-column>
            <mj-text font-size="14px" color="#fff">
              © ${new Date().getFullYear()} Your Company. All rights reserved.
            </mj-text>
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
  `);

  return mjmlTemplate.html;
};

// Email sending endpoint
app.post("/api/send-email", async (req, res) => {
  const { name, email, phone, source, services } = req.body;

  try {
    // Generate HTML email from MJML
    const emailHTML = generateEmailTemplate(
      name,
      email,
      phone,
      source,
      services
    );

    // Email content
    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Change if needed
      subject: "New Contact Form Submission",
      html: emailHTML, // Use compiled MJML HTML
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ message: "Failed to send email", error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
