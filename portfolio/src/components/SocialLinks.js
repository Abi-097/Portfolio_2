import React, { useState } from 'react'
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import "../styles/SocialLinks.css"

export default function SocialLinks() {
    const [open, setOpen] = useState(false);
      
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div>

     <a className="social-link5" href="https://github.com/Abi-097"> 
        <svg
        //   viewBox="0 0 16 16"
        //   className="bi bi-instagram"
        //   fill="currentColor"
          height="55px"
          width="55px"
        //   style={{ color: 'white' }}
        >
        <GitHubIcon/>
        </svg>
      </a>

      <a className="social-link5" href="https://www.linkedin.com/in/abishek-mahenderaraja-188286169/"> 
        <svg
        //   viewBox="0 0 16 16"
        //   className="bi bi-instagram"
        //   fill="currentColor"
          height="55px"
          width="55px"
        //   style={{ color: 'white' }}
        >
         <LinkedInIcon/> 
        </svg>
      </a>

      <a className="social-link5" href="mailto:abimahen0312@gmail.com"> 
        <svg
        //   viewBox="0 0 16 16"
        //   className="bi bi-instagram"
        //   fill="currentColor"
          height="55px"
          width="55px"
        //   style={{ color: 'white' }}
        >
        <EmailIcon/> 
        </svg>
      </a>

      <a className="social-link4"  onClick={handleOpen}>
        <svg
        //   viewBox="0 0 16 16"
        //   className="bi bi-whatsapp"
        //   fill="currentColor"
          height="55px"
          width="55px"
          xmlns="http://www.w3.org/2000/svg"
        //   style={{ color: 'white' }}
        >
         <WhatsAppIcon/>
        </svg>
      </a>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contact Information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Phone: +94-764004274
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>

   

    



  
    
    </div>
  )
}
