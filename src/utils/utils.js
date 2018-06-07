export function editSquare(list, square, value) {
  return list
    .slice(0, square)
    .concat({ id: square, value })
    .concat(list.slice(square + 1));
}
