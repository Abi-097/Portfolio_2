import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

const Count = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    setVisitCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <div>
      <Button
        variant="contained"
        style={{ backgroundColor: "#344955", color: "#FFFFFF" }}
      >
        Profile views {visitCount}
      </Button>
    </div>
  );
};

export default Count;
