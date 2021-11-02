import * as React from "react";
import Container from "@mui/material/Container";
import { Typography, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Cards from "../../components/Cards/Index";
const MainLayout = (props) => {
  const { classes } = props;

  const dataCard = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

  return (
    <Container disableGutters="true" maxWidth="xl" sx={{ p: "40px" }}>
      <Container maxWidth="sm">
        <Typography className={classes.topMain} variant="h2">
          Album layout
        </Typography>
        <div className={classes.text}>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely.
        </div>

        <Stack spacing={2} direction="row" className={classes.topMain}>
          <Button variant="contained">MAIN CALL TO ACTION</Button>
          <Button variant="outlined">SECONDARY ACTION</Button>
        </Stack>
      </Container>

      <Container maxWidth="md" sx={{ p: "64px" }}>
        <Grid container spacing={3}>
          {dataCard.map(() => (
            <Grid item xs={12} md={6} lg={4}>
              <Cards classes={classes} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default MainLayout;
