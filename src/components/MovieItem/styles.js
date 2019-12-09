import { makeStyles } from "@material-ui/styles";

export default makeStyles({
  card: {
    maxWidth: 345,
    boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.2)",
    maxHeight: "74vh",
    position: "relative",
    cursor: "pointer"
  },
  chip: {
    position: "absolute",
    left: ".5rem",
    top: ".5rem"
  },
  media: {
    height: 0,
    paddingTop: "100%",
    backgroundPosition: "top"
  },
  title: {
    overflow: "hidden",
    "text-overflow": "ellipsis",
    "white-space": "nowrap"
  }
});
