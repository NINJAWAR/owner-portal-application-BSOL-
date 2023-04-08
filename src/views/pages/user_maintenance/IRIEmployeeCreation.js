import React, { useState, useEffect } from "react";
import { ToggleButton, ToggleButtonGroup, Grid, Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
// import DownloadIcon from "@mui/icons-material/Download";
import UserMaintencetabOne from "./CompanyFormTab";
import UserMaintencetabTwo from "./CompanyListTab";

function IRIEmployeeCreation() {
  const [value, setValue] = React.useState("1");
  const [alignment, setAlignment] = React.useState("left");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="content">
        <Grid sx={{ paddingTop: "5em" }}>
          <Box
            sx={{
              width: "100%",
              height: "100vh",
              typography: "body1",
              bgcolor: "#ffffff",
              borderRadius: "0px 25px 0px 0px",
              borderTop: "solid 1px #467199",
            }}
          >
            <TabContext value={value}>
              <Box
                sx={{ borderBottom: 1, borderColor: "divider", border: "none" }}
              >
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  sx={{
                    "& .Mui-selected": {
                      color: " #ffffff !important",
                      backgroundColor: "#467199 !important",
                      borderRadius: "0 25px 0 0",
                      boxShadow: "inset 0 0 10px #ffffff",
                    },
                    "& .css-1aquho2-MuiTabs-indicator ": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <Tab label="Create Auditor" value="1" />
                  <Tab label="Auditor List" value="2" />
                </TabList>
              </Box>
              <TabPanel
                value="1"
                sx={{
                  borderRadius: "0 15px 0 0",
                  padding: "0px",
                  borderTop: "solid 1px #467199",
                }}
              >
                <UserMaintencetabOne />
              </TabPanel>
              <TabPanel
                value="2"
                sx={{
                  borderRadius: "0 15px 0 0",
                  padding: "0px",
                  borderTop: "solid 1px #467199",
                }}
              >
                <UserMaintencetabTwo />
              </TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </div>
    </>
  );
}

export default IRIEmployeeCreation;
