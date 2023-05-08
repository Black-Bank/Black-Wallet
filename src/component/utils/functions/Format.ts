export const numberFormatter = (value: number) => {
  const multiplier = Math.abs(value).toString();

  const hasDot = multiplier.indexOf('.') !== -1;
  const sliceFy = hasDot
    ? multiplier.slice(multiplier.indexOf('.'), multiplier.indexOf('.') + 3)
    : '.00';
  return `${Math.floor(Number(multiplier))}${sliceFy}`;
};
