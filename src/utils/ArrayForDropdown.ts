export const ArrayForDropdown = (first: number, last: number) => {
  let array = [];
  for (let i = first; i <= last; i++) {
    array.push(String(i));
  }
  return array;
};
