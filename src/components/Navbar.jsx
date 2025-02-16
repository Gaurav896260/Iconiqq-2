import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SlActionRedo } from "react-icons/sl";
import { Menu } from "lucide-react";
import { BsArrowUpRight } from "react-icons/bs";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (path) => location.pathname === path;

  const [user, setUser] = React.useState("");

  const handleDashboardClick = () => {
    navigate("/login");
  };

  return (
    <nav className="w-full fixed top-5 z-50 px-4 py-4 md:py-6 ">
      <div className="w-2/3 mx-auto ">
        <div className="md:px-7 md:py-4 bg-white rounded-[100px] justify-between items-center flex flex-col md:flex-row gap-4 md:gap-0 shadow-md">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute right-4 top-6"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex items-center gap-6 flex-col md:flex-row w-full md:w-auto bg-white md:bg-transparent rounded-lg md:rounded-none p-4 md:p-0 mt-16 md:mt-0`}
          >
            <button
              onClick={() => navigate("/")}
              className={`text-black text-xl font-vietnam leading-loose italic ${
                isActive("/") ? "font-bold" : ""
              }`}
            >
              Home
            </button>
            <button
              onClick={() => navigate("/projects")}
              className={`text-black text-xl font-vietnam  italic ${
                isActive("/projects") ? "font-bold" : ""
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => navigate("/affiliate")}
              className={`text-black text-xl font-vietnam  italic ${
                isActive("/affiliate") ? "font-bold" : ""
              }`}
            >
              Affiliate
            </button>
            <button
              onClick={() => navigate("/contact")}
              className={`text-black text-xl font-vietnam italic ${
                isActive("/contact") ? "font-bold" : ""
              }`}
            >
              Contact
            </button>

            <button
              onClick={handleDashboardClick}
              className={`text-black text-xl font-vietnam italic ${
                isActive("/dashboard") ? "font-bold" : ""
              }`}
            >
              Dashboard
            </button>
          </div>

          {/* Schedule Meet Button */}
          <button
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex schedule-button font-normal`}
            onClick={() => navigate("/schedule-meet")}
          >
            Schedule meet
            <BsArrowUpRight />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
