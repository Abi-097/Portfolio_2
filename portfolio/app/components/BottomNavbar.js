"use client";
import { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { FcAbout } from "react-icons/fc";
import Image from "next/image";

const BottomNavbar = () => {
  const [value, setValue] = useState("about");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: 10,
      }}
    >
      <BottomNavigation
        sx={{
          width: { xs: "full", sm: 400, md: 450, lg: 450, xl: 450 },
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          borderRadius: { xs: 0, sm: 40, md: 40, lg: 40, xl: 40 },
          position: "fixed",
          top: { xs: 0, sm: 10, md: 10, xl: 10, lg: 10 },
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9999,
          color: "#fff",
          "& .MuiBottomNavigationAction-root": {
            color: "#fff",
          },
          "& .Mui-selected": {
            color: "#000",
          },
        }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="About"
          href="#about"
          icon={
            <Image
              src="/information-button.png"
              alt="information.png"
              width={18}
              height={18}
            />
          }
        />
        <BottomNavigationAction
          label="Skills"
          href="#skills"
          icon={
            <Image
              src="/solution.png"
              alt="solution.png"
              width={18}
              height={18}
            />
          }
        />
        <BottomNavigationAction
          label="Experience"
          href="#experience"
          icon={
            <Image
              src="/experience_11864725.png"
              alt="experience_11864725.png"
              width={18}
              height={18}
            />
          }
        />
        <BottomNavigationAction
          label="Projects"
          href="#projects"
          icon={
            <Image
              src="/project-launch_8553547.png"
              alt="project-launch_8553547.png"
              width={18}
              height={18}
            />
          }
        />
        <BottomNavigationAction
          label="Education"
          href="#education"
          icon={
            <Image
              src="/education.png"
              alt="education.png"
              width={18}
              height={18}
            />
          }
        />
      </BottomNavigation>
    </div>
  );
};

export default BottomNavbar;
