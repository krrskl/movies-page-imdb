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
import ClearIcon from "@material-ui/icons/Clear";

export default ({ history }) => {
  const [searchText, setSearchText] = useState("");

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
    <Container>
      <Card>
        <Grid container>
          <Grid>
            <Typography>Bienvenido!</Typography>
          </Grid>

          <Grid>
            <label>Icono</label>
          </Grid>
        </Grid>
        <TextField
          value={searchText}
          placeholder="Buscar..."
          onChange={handleSearchTextChange}
        />

        <Grid>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<ClearIcon />}
            onClick={handleCleanTextClick}
          >
            Limpiar
          </Button>

          <Button
            variant="contained"
            color="primary"
            startIcon={<SearchIcon />}
            onClick={handleSearchTextClick}
          >
            Buscar
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};
