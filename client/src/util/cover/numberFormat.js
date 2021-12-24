export const numberFormat = (number) => {
  if (!number || isNaN(number))
    return `input must be a number was sent ${number}`;

  if (typeof number !== "string") number = number.toString();

  return number.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1.");
};
