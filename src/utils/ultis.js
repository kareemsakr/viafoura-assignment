const timeSince = date => {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " YEARS";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " MONTHS";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " DAYS";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " HOURS";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " MINUTES";
  }
  return Math.floor(seconds) + " SECONDS";
};

export { timeSince };
