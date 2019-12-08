import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/core/styles";

import Home from "./pages/Home";
import Results from "./pages/Results";
import MovieDetails from "./pages/MovieDetails";
import { theme } from "./theme";

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <ThemeProvider theme={theme}>
          <Route exact path="/" component={Home} />
          <Route path="/results" component={Results} />
          <Route path="/movie/:id" component={MovieDetails} />
        </ThemeProvider>
      </div>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
