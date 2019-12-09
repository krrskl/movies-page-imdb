import { makeStyles } from "@material-ui/styles";

const overflowHidden = {
  overflow: "hidden"
};
export default makeStyles({
  section: {
    width: "50%",
    position: "absolute",
    left: "50%",
    top: "40%",
    transform: "translate(-50%, -50%)",
    ...overflowHidden,
    padding: ".5rem"
  },
  wave: {
    position: "absolute",
    left: 0,
    bottom: 0
  },
  card: {
    padding: ".5rem",
    boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.2)",
    marginTop: "2rem"
  },
  textCenter: {
    textAlign: "center"
  },
  searchInput: {
    width: "calc(100% - 70px - 1rem)",
    cursor: "text",
    border: 0,
    padding: ".5rem",
    outline: "none",
    height: "100%",
    fontSize: "1em"
  },
  searchButton: {
    width: "5%"
  },
  searchingUndraw: {
    width: "300px",
    position: "absolute",
    left: "1rem",
    top: "1rem"
  }
});
