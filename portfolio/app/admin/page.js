"use client";
import React, { useState } from "react";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import AdminAboutView from "../components/admin-view/about";
import AdminSkillsView from "../components/admin-view/skills";
import AdminExperienceView from "../components/admin-view/experience";
import AdminProjectsView from "../components/admin-view/projects";
import AdminEducationView from "../components/admin-view/education";

const StyledButton = styled(Button)(({ theme }) => ({
  padding: 4,
  fontWeight: "bold",
  fontSize: 14,
}));

const AdminView = () => {
  const [currentSelectedTab, SetCurrentSelectedTab] = useState("About");
  const menuItems = [
    {
      id: "about",
      label: "About",
      component: <AdminAboutView />,
    },
    {
      id: "skills",
      label: "Skills",
      component: <AdminSkillsView />,
    },
    {
      id: "experience",
      label: "Experience",
      component: <AdminExperienceView />,
    },
    {
      id: "projects",
      label: "Projects",
      component: <AdminProjectsView />,
    },
    {
      id: "education",
      label: "Education",
      component: <AdminEducationView />,
    },
  ];
  return (
    <div>
      <nav
        style={{
          justifyContent: "center",
          display: "flex",
        }}
        role="tablist"
      >
        {menuItems.map((item) => (
          <StyledButton
            key={item.id}
            variant="text"
            sx={{ mb: "-0.5rem", mr: 2 }}
            onClick={() => {
              SetCurrentSelectedTab(item.id);
            }}
          >
            {item.label}
          </StyledButton>
        ))}
      </nav>
      <div style={{ marginTop: 10, padding: 10 }}>
        {menuItems.map(
          (item) => item.id === currentSelectedTab && item.component
        )}
      </div>
    </div>
  );
};

export default AdminView;
