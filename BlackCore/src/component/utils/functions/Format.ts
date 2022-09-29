export const numberFormatter = (value: number) => {
  const multiplier = String(value * 100);
  const sliceFy = multiplier.slice(multiplier.length - 2, multiplier.length);

  return `${Math.floor(value)}.${sliceFy}`;
};
