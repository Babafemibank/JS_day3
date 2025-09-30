let arrays = [1, 3, 4, 5, 6, 7, 8, 6, 4, 3, 5, 2, 4, 2, 4, 2, 5, 2, 1, 4];

let unique = arrays.reduce((prev, next) => {
  if (prev.indexOf(next) === -1) {
    prev.push(next);
  }
  return prev;
}, []);
console.log(unique);
