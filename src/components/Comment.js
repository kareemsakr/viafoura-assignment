import React, { useState } from "react";
import { Paper, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import { timeSince } from "../utils/ultis";
import CommentFooter from "./CommentFooter";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    display: "flex",
    minWidth: 700,
    marginTop: theme.spacing(1)
  },
  avatar: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    margin: "0 20px 0 0"
  },
  authorChip: {
    fontWeight: 700
  },
  commentTitle: {
    display: "flex",
    alignItems: "center"
  },
  commentDetails: {
    flexBasis: "100%"
  },
  comment: {
    flexBasis: "100%"
  },
  marginRight10: {
    marginRight: theme.spacing(1)
  }
}));

const Comment = ({
  name,
  avatarUrl,
  isAuthor,
  postedAt,
  comment,
  actions,
  likes,
  dislikes,
  replies
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const classes = useStyles();
  return (
    <Paper
      className={classes.root}
      elevation={3}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Avatar alt={name} src={avatarUrl} className={classes.avatar} />
      <div className={classes.commentDetails}>
        <div className={classes.commentTitle}>
          <Typography
            variant="h6"
            component="h6"
            className={classes.marginRight10}
          >
            {name}
          </Typography>
          {isAuthor && (
            <Chip
              size="small"
              label="Author"
              className={(classes.authorChip, classes.marginRight10)}
            />
          )}
          <Typography
            variant="caption"
            color="textSecondary"
            className={classes.marginRight10}
          >
            {timeSince(postedAt) + " AGO"}
          </Typography>
        </div>
        <Typography className={classes.comment}>{comment}</Typography>
        <CommentFooter {...{ replies, actions, likes, dislikes, isHovered }} />
      </div>
    </Paper>
  );
};

export default Comment;
