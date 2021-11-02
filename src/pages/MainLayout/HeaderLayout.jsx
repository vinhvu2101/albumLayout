import React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
const HeaderLayout = (props) => {
  const { classes } = props;
  return (
    <AppBar position="static">
      <Toolbar variant="regular">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <CameraAltIcon />
        </IconButton>
        <Typography className={classes.typo} variant="h6" component="div">
          Album Layout
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderLayout;
