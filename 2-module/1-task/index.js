function sumSalary(salaries) {
  return Object.values(salaries).reduce((acc, cur) => {
    return isFinite(cur) ? (acc += cur) : acc;
  }, 0);
}
