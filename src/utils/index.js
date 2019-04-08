// export function updateOrderObject(object, keys, item) {
//   const newObj = {};
//   keys.forEach((id, index) => {
//     if (object[id][item] !== index) {
//       newObj[object[id].id] = { ...object[id] };
//       newObj[object[id].id][item] = index;
//     }
//   });
//   return newObj;
// }
export function updateOrderObject(object, keys, item) {
  console.log(object, keys);
  const newObj = { ...object };
  keys.forEach((id, index) => {
    if (object[id][item] !== index) {
      newObj[id][item] = index;
    }
  });
  return newObj;
}

export function uniqueId() {
  return Math.random()
    .toString(36)
    .substr(2, 16);
}
