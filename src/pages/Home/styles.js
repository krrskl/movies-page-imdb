import { makeStyles } from "@material-ui/styles";

const overflowHidden = {
  overflow: "hidden"
};
export default makeStyles({
  section: {
    width: "60%",
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
    marginTop: "1rem"
  },
  textCenter: {
    textAlign: "center"
  },
  searchInput: {
    width: "calc(100% - 64px)"
  },
  searchButton: {
    width: "5%"
  }
});
