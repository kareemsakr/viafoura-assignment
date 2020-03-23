import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const useStyles = makeStyles(theme => ({
  button: {}
}));

const CommentFooter = ({ replies, actions, likes, dislikes, isHovered }) => {
  const classes = useStyles();
  const textColor = !isHovered ? "textSecondary" : "";
  return (
    <div>
      <Button className={classes.button}>
        <Typography variant="caption" color={textColor}>
          Reply
        </Typography>
      </Button>
      <Button className={classes.button}>
        <Typography variant="caption" color={textColor}>
          {replies.length} Replies
        </Typography>
      </Button>
      <Button className={classes.button}>
        <KeyboardArrowUpIcon />

        <Typography variant="caption" color={textColor}>
          {likes}
        </Typography>
      </Button>
      <Button className={classes.button}>
        <KeyboardArrowDownIcon />
        <Typography variant="caption" color={textColor}>
          {dislikes}
        </Typography>
      </Button>
    </div>
  );
};

export default CommentFooter;
