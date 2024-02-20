"use client";
import { TextField, Card, Paper, Typography, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const AdminAboutView = () => {
  const [postData, setPostData] = useState({
    _id: "",
    name: "",
    roles: "",
    description: "",
    description2: "",
    github: "",
    linkedin: "",
    instagram: "",
    facebook: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/about/get");
        const existingData = response.data.aboutData[0];
        console.log(existingData);
        setPostData({
          name: existingData.name,
          roles: existingData.roles,
          description: existingData.description,
          description2: existingData.description2,
          github: existingData.github,
          linkedin: existingData.linkedin,
          instagram: existingData.instagram,
          facebook: existingData.facebook,
        });
      } catch (error) {
        console.error("Error fetching existing data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        "http://localhost:3000/api/about/update",
        { aboutData: [postData] },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("response.data", response.data);

      setPostData({});
    } catch (error) {
      console.error("Error submitting form:", error.message);
      console.error(error);
      if (error.response) {
        console.error("Server responded with status:", error.response.status);
        console.error("Server responded with data:", error.response.data);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostData((prevPostData) => ({
      ...prevPostData,
      [name]: value,
    }));
  };

  return (
    <Paper
      elevation={0}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Card
        sx={{
          height: "auto",
          width: "30rem",
          border: "1px solid black",
          padding: "1rem",
        }}
      >
        <Typography>About Details</Typography>
        <TextField
          name="name"
          id="name"
          label="Name"
          variant="outlined"
          sx={{ width: "100%", marginBottom: "1rem" }}
          value={postData.name}
          onChange={handleChange}
        />
        <TextField
          id="roles"
          name="roles"
          label="Roles"
          variant="outlined"
          sx={{ width: "100%", marginBottom: "1rem" }}
          value={postData.roles}
          onChange={handleChange}
        />
        <TextField
          id="description"
          name="description"
          label="Description"
          variant="outlined"
          sx={{ width: "100%", marginBottom: "1rem" }}
          value={postData.description}
          onChange={handleChange}
        />
        <TextField
          id="description2"
          name="description2"
          label="Description2"
          variant="outlined"
          sx={{ width: "100%", marginBottom: "1rem" }}
          value={postData.description2}
          onChange={handleChange}
        />
        <TextField
          id="github"
          name="github"
          label="Github"
          variant="outlined"
          sx={{ width: "100%", marginBottom: "1rem" }}
          value={postData.github}
          onChange={handleChange}
        />
        <TextField
          id="linkedin"
          name="linkedin"
          label="LinkedIn"
          variant="outlined"
          sx={{ width: "100%", marginBottom: "1rem" }}
          value={postData.linkedin}
          onChange={handleChange}
        />
        <TextField
          id="instagram"
          name="instagram"
          label="Instagram"
          variant="outlined"
          sx={{ width: "100%", marginBottom: "1rem" }}
          value={postData.instagram}
          onChange={handleChange}
        />
        <TextField
          id="facebook"
          name="facebook"
          label="Facebook"
          variant="outlined"
          sx={{ width: "100%", marginBottom: "1rem" }}
          value={postData.facebook}
          onChange={handleChange}
        />

        <Button
          color="warning"
          variant="contained"
          sx={{}}
          onClick={handleSubmit}
        >
          Update
        </Button>
      </Card>
    </Paper>
  );
};

export default AdminAboutView;
