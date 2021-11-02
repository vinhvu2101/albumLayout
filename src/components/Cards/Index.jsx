import * as React from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";

const Cards = (props) => {
  const { classes } = props;
  return (
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
          This is a media card. You can use this section to describe the content
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
