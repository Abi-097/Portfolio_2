import React from "react";
import { FaArrowUp } from "react-icons/fa";

const TopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return <div>TopButton</div>;
};

export default TopButton;
