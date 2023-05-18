export const ArrayForDropdown = (first: number, last: number) => {
  return Array.from({ length: last - first + 1 }, (_, i) => String(i + first));
};
