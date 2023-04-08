import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  Box,
  TextField,
  OutlinedInput,
  InputLabel,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import CompanyDetailsRetrieveModal from "../user_maintenance/CompanyModals/CompanyDetailsRetrieveModal";

function CompanyFormTab() {
  const [openmodal, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Grid align="end">
        <Button
          sx={{
            borderRight: "solid 1px #467199 !important",
            borderLeft: "solid 1px #467199 !important",
            borderBottom: "solid 1px #467199 !important",
            borderRadius: "0 15px 0 15px",
            padding: "3px",
            fontSize: "12px",
            textTransform: "capitalize",
            border: "solid 1px #467199",
          }}
          onClick={handleOpen}
        >
          <DownloadIcon sx={{ width: "18px", height: "15px" }} />
          Retrieve Company Details
        </Button>
      </Grid>
      <Box sx={{ margin: "2rem" }}>
        <Grid container direction={"row"} spacing={2}>
          <Grid item xs={12} sm={4} md={3} lg={4}>
            <InputLabel shrink htmlFor="bootstrap-input">
              COMPANY NAME
            </InputLabel>
            <OutlinedInput defaultValue={""} fullWidth size="small" />
          </Grid>

          <Grid item xs={12} sm={4} md={3} lg={4}>
            <InputLabel shrink htmlFor="bootstrap-input">
              COMPANY ADDRESS
            </InputLabel>
            <TextField fullWidth value={""} variant={"outlined"} size="small" />
          </Grid>

          <Grid item xs={12} sm={4} md={3} lg={4}>
            <InputLabel shrink htmlFor="bootstrap-input">
              COMPANY IMO NO
            </InputLabel>
            <TextField fullWidth size="small" />
          </Grid>

          <Grid item xs={12} sm={4} md={3} lg={4}>
            <InputLabel shrink htmlFor="bootstrap-input">
              DOC EXPIRY DATE
            </InputLabel>
            <TextField
              id="date"
              type="date"
              size="small"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={4} md={3} lg={4}>
            <InputLabel shrink htmlFor="bootstrap-input">
              DOC ISSUE DATE
            </InputLabel>
            <TextField
              id="date"
              type="date"
              size="small"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>
        <Grid
          sx={{ display: "flex", justifyContent: "center", paddingTop: "8rem" }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "#467199 !important",
              width: "15%",
              borderRadius: "10px",
              fontWeight: "600",
            }}
          >
            Next
          </Button>
        </Grid>
        <CompanyDetailsRetrieveModal
          setModalOpen={setOpen}
          modalState={openmodal}
        />
      </Box>
    </>
  );
}

export default CompanyFormTab;
