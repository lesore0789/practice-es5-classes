Array.prototype.isEqual = function(array) {
  return this.every((element, index) => element === array[index])
}
