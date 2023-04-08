import React, { useState, useEffect } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import CompanyCreation from "./CompanyCreation";
import IRIEmployeeCreation from "./IRIEmployeeCreation";

function UserMaintenance() {
  const [value, setValue] = React.useState("1");
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
    console.log(alignment);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="content">
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <ToggleButton
            value="left"
            aria-label="left aligned"
            sx={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)!important",
              "&.Mui-selected": {
                color: "white!important",
                background: `#467199 !important`,
              },
              "&:not(.Mui-selected)": {
                backgroundColor: "white!important",
                color: `#467199!important`,
              },
              borderRadius: "15px 0 0 15px",
              border: "solid 1px #467199",
            }}
          >
            Company
          </ToggleButton>
          <ToggleButton
            value="center"
            aria-label="centered"
            sx={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25) !important",
              "&.Mui-selected": {
                color: "white!important",
                background: `#467199 !important`,
              },
              "&:not(.Mui-selected)": {
                backgroundColor: "white!important",
                color: `#467199!important`,
              },
              borderRadius: "0 15px 15px 0",
              border: "solid 1px #467199",
            }}
          >
            IRI Employee
          </ToggleButton>
        </ToggleButtonGroup>
        {alignment === "center" ? (
          <IRIEmployeeCreation />
        ) : alignment === "left" ? (
          <CompanyCreation />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default UserMaintenance;
