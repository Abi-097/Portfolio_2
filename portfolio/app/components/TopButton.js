import React from "react";
import { FaArrowUp } from "react-icons/fa";

const TopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };
  return <div>TopButton</div>;
};

export default TopButton;
