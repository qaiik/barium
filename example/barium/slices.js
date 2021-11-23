exports.slice = function (slicename){
  return require(`./slices/${slicename}.slice.js`);
}
