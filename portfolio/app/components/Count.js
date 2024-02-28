import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

const Count = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCount = localStorage.getItem("visitCount");

      if (storedCount) {
        setVisitCount(parseInt(storedCount));
      }

      setVisitCount((prevCount) => {
        const newCount = prevCount + 1;
        localStorage.setItem("visitCount", newCount.toString());
        return newCount;
      });
    }
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
