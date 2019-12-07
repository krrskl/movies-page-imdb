import React, { useEffect } from "react";

import { Container, CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { searchMovieByID } from "../../redux/actions/search";
import { movieResult } from "../../redux/selectors/index";

export default ({ match }) => {
  const dispatch = useDispatch();

  const movie = useSelector(state => movieResult(state));

  useEffect(() => {
    const id = match.params.id;
    
    if (!movie || movie.imdbID !== id) dispatch(searchMovieByID({ id }));
  });

  if (!movie) return <CircularProgress size={100} color="primary" />;

  return <Container>Detalles</Container>;
};
