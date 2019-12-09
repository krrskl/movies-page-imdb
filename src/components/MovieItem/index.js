import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import styles from "./styles";

import MovieIcon from "@material-ui/icons/Movie";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";

const MovieItem = ({ Title, Year, Type, imdbID, Poster, history }) => {
  const seeMoreDetails = () => {
    history.push(`/movie/${imdbID}`);
  };

  const classes = styles();
  const noImage = "https://via.placeholder.com/290x400?text=NO+IMAGE";

  return (
    <Card className={classes.card} onClick={seeMoreDetails}>
      <CardMedia
        className={classes.media}
        image={Poster !== "N/A" ? Poster : noImage}
        title={Title}
      />

      <CardContent>
        <Typography className={classes.title}>{Title}</Typography>
      </CardContent>

      <Chip
        color="primary"
        icon={Type === "movie" ? <MovieIcon /> : <SportsEsportsIcon />}
        label={Year}
        className={classes.chip}
      />

      {/* <CardActions>
        <IconButton color="primary">
          <VisibilityIcon />
        </IconButton>
      </CardActions> */}
    </Card>
  );
};

export default withRouter(MovieItem);
