module.exports = {
    format_date: (date) => {
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October','November','December'];
      return `${monthNames[new Date(date).getMonth()]} ${new Date(date).getDate()}, ${new Date(date).getFullYear()}`;
    },
  };
  