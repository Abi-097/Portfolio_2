"use client";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Cookies from "js-cookie";
const Count = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const storedCount = Cookies.get("visitCount");
    if (storedCount) {
      setVisitCount(parseInt(storedCount));
    }

    setVisitCount((prevCount) => {
      const newCount = prevCount + 1;
      Cookies.set("visitCount", newCount.toString(), {
        expires: 365,
        path: "/",
      });
      return newCount;
    });
  }, []);
  return (
    <div>
      <Button
        variant="contained"
        style={{
          backgroundColor: "#344955",
          color: "#FFFFFF",
          fontSize: "10px",
        }}
      >
        Profile views {visitCount}
      </Button>
    </div>
  );
};

export default Count;
