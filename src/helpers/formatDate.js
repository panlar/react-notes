const formatDate = (date, locale, options) =>
  new Intl.DateTimeFormat(locale, options).format(date);

export default formatDate;
