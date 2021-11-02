import * as React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import MainLayout from "./MainLayout/MainLayout";
import HeaderLayout from "./MainLayout/HeaderLayout";
import FooterLayout from "./MainLayout/FooterLayout";

const Paper = () => {
  const useStyle = makeStyles({
    typo: {
      margin: 0,
      fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.6,
      color: "inherit",
    },
    topMain: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      marginBottom: "20px !important",
      paddingTop: "30px",
    },
    text: {
      margin: 0,
      fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.334,
      letterSpacing: 0,
      textAlign: "center",
      marginBottom: "16px",
      color: "rgba(0, 0, 0, 0.6)",
    },
    textCard: {
      margin: 0,
      fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
      color: "rgba(0, 0, 0, 0.87)",
    },
    textFooter: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: 0,
      fontFamily: "Roboto,Helvetica,Arial,sans-serif",
      fontWeight: 400,
      color: "rgba(0, 0, 0, 0.6)",
    },
  });

  const classes = useStyle();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <HeaderLayout classes={classes} />
      <MainLayout classes={classes} />
      <FooterLayout classes={classes} />
    </Box>
  );
};

export default Paper;
