export const phoneFormat = (number) => {
  if (!number || isNaN(number))
    return `input must be a number was sent ${number}`;

  if (typeof number !== "string") number = number.toString();

  if (number.length === 10) {
    return number.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
  } else if (number.length < 10) {
    return "was not supplied enough numbers please pass a 10 digit number";
  } else if (number.length > 10) {
    return "was supplied too many numbers please pass a 10 digit number";
  } else {
    return "something went wrong";
  }
};
