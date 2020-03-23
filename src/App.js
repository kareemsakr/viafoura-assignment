import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CommentList from "./components/CommentList";
import "./App.css";

const comments = [
  {
    id: 123,
    name: "Brad",
    isAuthor: true,
    postedAt: new Date("March 23, 2020 11:13:00"),
    avatarUrl:
      "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    likes: 128,
    dislikes: 0,
    comment:
      "So what the german automater is likely to focus on today is the bigger picture. This will be the first time we see the Taycan free from any prototype body work",
    replies: [{}, {}, {}]
  },
  {
    id: 121,
    name: "Tucker",
    isAuthor: false,
    postedAt: new Date("March 22, 2020 11:13:00"),
    avatarUrl:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    likes: 11,
    dislikes: 2,
    comment:
      "This is another comment to showcase how this would look with multiple comments in a list of comments",
    replies: [{}, {}, {}]
  }
];

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        alignItems="center"
        justify="center"
        spacing={3}
        className={classes.mainGrid}
      >
        <CommentList list={comments} />
      </Grid>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 10,
    justifyContent: "center"
  },
  mainGrid: {
    maxWidth: 700,
    margin: "auto"
  }
}));

export default App;
