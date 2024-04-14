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
          fontSize: "9px",
          padding: "0px",
        }}
      >
        <span
          style={{
            backgroundColor: "#1C1678",
            padding: "2px",
            borderRadius: "4px 0 0 4px",
          }}
        >
          Profile views:
        </span>
        <span
          style={{
            padding: "2px",
          }}
        >
          {visitCount}
        </span>
      </Button>
    </div>
  );
};

export default Count;
