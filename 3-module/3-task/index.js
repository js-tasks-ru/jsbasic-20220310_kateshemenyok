function camelize(str) {
  const ucFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  
  return str
    .split("-")
    .map((item, index) => (index > 0 ? ucFirst(item) : item))
    .join("");
}
