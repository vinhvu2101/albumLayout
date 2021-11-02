import * as React from "react";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";

const FooterLayout = (props) => {
  const { classes } = props;
  return (
    <Container maxWidth="sm" sx={{ pl: "48px", pr: "48px", pb: "48px" }}>
      <Typography className={classes.topMain} variant="h6">
        Footer
      </Typography>
      <Typography className={classes.textFooter}>
        Somthing here to give the footer a purpose!
      </Typography>
      <Typography className={classes.textFooter}>
        Copyright &copy;
        <Link href="https://mui.com/" underline="always" color="inherit">
          {"Your Website"}
        </Link>
        2021
      </Typography>
    </Container>
  );
};

export default FooterLayout;
