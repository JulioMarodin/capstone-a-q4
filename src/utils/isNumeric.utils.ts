function isNumeric(str: string) {
  if (typeof str !== 'string') return false;
  return !Number.isNaN(str) && !Number.isNaN(parseFloat(str));
}

export default isNumeric;
