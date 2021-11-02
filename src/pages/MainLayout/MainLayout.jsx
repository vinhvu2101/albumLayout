import * as React from "react";
import Container from "@mui/material/Container";
import { Typography, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";

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
              <Card sx={{ maxWidth: 345, paddingTop: "150px" }}>
                <CardMedia
                  component="img"
                  alt="random"
                  height="400"
                  image="https://source.unsplash.com/random"
                />
                <CardContent>
                  <Typography gutterBottom variant="h2" component="div">
                    Heading
                  </Typography>
                  <Typography className={classes.textCard}>
                    This is a media card. You can use this section to describe
                    the content
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                  <Button size="small">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default MainLayout;
