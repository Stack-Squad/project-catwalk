const formatDate = (date) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return `${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`;
};

module.exports = formatDate;
