import React, { useEffect, useState } from "react";
import queryString from "query-string";

import {
  Container,
  CircularProgress,
  Grid,
  Typography
} from "@material-ui/core";
import { searchMovie } from "../../redux/actions/search";
import { useDispatch, useSelector } from "react-redux";

import { movieResults, isSearchLoading } from "./../../redux/selectors";

import MovieItem from "../../components/MovieItem";
import styles from "./styles";

export default ({ location }) => {
  const dispatch = useDispatch();
  const [querySearch, setQuerySearch] = useState("");
  const movies = useSelector(state => movieResults(state));
  const isLoading = useSelector(state => isSearchLoading(state));
  const [isLooked, setIsLooked] = useState(false);

  const classes = styles();

  useEffect(() => {
    const { query } = queryString.parse(location.search);
    setQuerySearch(query);

    if (query && !isLooked) {
      setIsLooked(true);
      dispatch(searchMovie({ query }));
    }
  }, [location, isLooked, dispatch]);

  /**
   * Function to render the components of movies
   */
  const renderMovies = () => {
    if (movies) {
      return movies.map((value, index) => (
        <Grid key={value} item xs={3}>
          <MovieItem {...value} />
        </Grid>
      ));
    } else if (isLoading)
      return <CircularProgress size={100} color="primary" />;

    return <div />;
  };

  return (
    <Container className={classes.section}>
      <Grid container>
        <Typography variant="h4">
          Resultados para:
          <span className={classes.query}>
            {querySearch}
          </span>
        </Typography>
      </Grid>

      <Grid container className={classes.root} spacing={2}>
        <Grid container spacing={2}>
          {renderMovies()}
        </Grid>
      </Grid>
    </Container>
  );
};
