export const numberFormatter = (value: number) => {
  const multiplier = String(value);
  const hasDot = multiplier.indexOf('.') !== -1;
  const sliceFy = hasDot
    ? multiplier.slice(multiplier.indexOf('.'), multiplier.indexOf('.') + 3)
    : '.00';
  return `${Math.floor(value)}${sliceFy}`;
};
