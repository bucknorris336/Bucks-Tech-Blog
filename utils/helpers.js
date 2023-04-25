module.exports = {
  format_date: (date) => {
    console.log(new Date(date), date);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  },
};
