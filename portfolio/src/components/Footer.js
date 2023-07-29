import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../styles/Footer.css"
export default function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GitHubIcon />
        <LinkedInIcon />
        <EmailIcon />
        <WhatsAppIcon />
        <FacebookIcon />
      </div>

      <p>&copy; 2023 Abishek Mahenderaraja</p>
    </div>
  );
}

//&copy; <-- copy right symbol
