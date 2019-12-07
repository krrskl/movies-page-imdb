import React, { useEffect, useState } from "react";
import queryString from "query-string";

import { Container, CircularProgress } from "@material-ui/core";
import { searchMovie } from "../../redux/actions/search";
import { useDispatch, useSelector } from "react-redux";

import { movieResults, isSearchLoading } from "./../../redux/selectors";

import MovieItem from "../../components/MovieItem";

export default ({ location }) => {
  const dispatch = useDispatch();

  const movies = useSelector(state => movieResults(state));
  const isLoading = useSelector(state => isSearchLoading(state));
  const [isLooked, setIsLooked] = useState(false);

  useEffect(() => {
    const { query } = queryString.parse(location.search);

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
      return movies.map((value, index) => <MovieItem key={index} {...value} />);
    } else if (isLoading)
      return <CircularProgress size={100} color="primary" />;

    return <div />;
  };

  return <Container>{renderMovies()}</Container>;
};
