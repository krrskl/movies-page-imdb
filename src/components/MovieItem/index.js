import React from "react";
import { Card, Grid, Typography, Button } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { withRouter } from "react-router-dom";

const MovieItem = ({ Title, Year, Type, imdbID, Poster, history }) => {
  const seeMoreDetails = () => {
    history.push(`/movie/${imdbID}`);
  };

  return (
    <Card>
      <Grid container>
        <Grid item>
          <img src={Poster} alt={Title} />
        </Grid>
        <Grid item>
          <Typography>{Title}</Typography>
          <Typography>{Year}</Typography>
          <Typography>{Type}</Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<VisibilityIcon />}
            onClick={seeMoreDetails}
          >
            Ver más
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default withRouter(MovieItem);
