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

import { WaveImage, SearchingUndrawImage } from "./../../images";
import styles from "./styles";

export default ({ history }) => {
  const [searchText, setSearchText, open, setOpen] = useState("");
  const classes = styles();

  const handleSearchTextChange = event => {
    setSearchText(event.target.value);
  };

  /**
   *  Function to open modal
   */
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  /**
   *  Function to close modal
   */
  const handleClose = () => {
    setOpen(false);
  };

  const  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchTextClick();
    }
  }

  /**
   *  Function to capture of event click for the search Button
   * @param {*} event Value corresponding to the event dispatched from the DOM
   */
  const handleSearchTextClick = event => {
    history.push(`/results?query=${searchText}`);
  };

  return (
    <>
      <SearchingUndrawImage className={classes.searchingUndraw}/>
      <Container className={classes.section}>
        <Grid className={classes.textCenter}>
          <Typography variant="h3">Busca la película que desees</Typography>
        </Grid>

        <Grid className={classes.textCenter}>
          <Typography variant="h4">y obten detalles sobre ella.</Typography>
        </Grid>

        <Card className={classes.card}>
          <Grid>
            <input
              value={searchText}
              placeholder="Buscar..."
              onChange={handleSearchTextChange}
              className={classes.searchInput}
              onKeyDown={handleKeyDown}
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
