import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  Grid,
  TextField,
  Button
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

import { WaveImage } from "./../../images";
import styles from "./styles";

export default ({ history }) => {
  const [searchText, setSearchText] = useState("");
  const classes = styles();

  const handleSearchTextChange = event => {
    setSearchText(event.target.value);
  };

  /**
   *  Function to capture of event click for the clean Button
   *
   */
  const handleCleanTextClick = () => {
    searchText("");
  };

  /**
   *  Function to capture of event click for the search Button
   * @param {*} event Value corresponding to the event dispatched from the DOM
   */
  const handleSearchTextClick = event => {
    history.push(`/results?query=${searchText}`);
  };

  return (
    <>
      <Container className={classes.section}>
        <Grid className={classes.textCenter}>
          <Typography variant="h4">Busca la película que desees</Typography>
        </Grid>

        <Grid className={classes.textCenter}>
          <Typography variant="h5">y obten detalles sobre ella.</Typography>
        </Grid>

        <Card className={classes.card}>
          <Grid>
            <TextField
              value={searchText}
              placeholder="Buscar..."
              onChange={handleSearchTextChange}
              className={classes.searchInput}
            />

            {/* <Button
              variant="contained"
              color="secondary"
              startIcon={<ClearIcon />}
              onClick={handleCleanTextClick}
            >
              Limpiar
            </Button> */}

            <Button
              color="primary"
              variant="contained"
              className={classes.searchButton}
              onClick={handleSearchTextClick}
            >
              <SearchIcon />
            </Button>
          </Grid>
        </Card>
      </Container>
      <WaveImage className={classes.wave} width="100vw" height="230" />
    </>
  );
};
