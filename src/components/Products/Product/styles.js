import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "#000 !important",
    color: "#fff !important",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardSection: {
    backgroundColor: "#000 !important",
    color: "#fff !important",
  },
  description: {
    color: "#fff !important",
  },
  cart: {
    color: "#fff !important",
  },
}));
