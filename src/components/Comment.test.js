import React from "react";
import { render } from "@testing-library/react";
import Comment from "./Comment";

const mockComment = {
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
};

test("renders learn react link", () => {
  const { getByText } = render(<Comment {...mockComment} />);
  const commentBodyElement = getByText(/So what the german automate/i);
  expect(commentBodyElement).toBeInTheDocument();
  expect(commentBodyElement.textContent).toBe(mockComment.comment);

  const authorName = getByText(/Brad/i);
  expect(authorName).toBeInTheDocument();
});
