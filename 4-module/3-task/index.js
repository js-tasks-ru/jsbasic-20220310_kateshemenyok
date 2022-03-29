function highlight(table) {
  const tableHead = [...table.tHead.rows[0].cells];
  const tableBody = [...table.tBodies[0].rows];

  const getPositionOf = (columnHeader) => {
    return tableHead.findIndex(
      (element) => element.textContent === columnHeader
    );
  };

  tableBody.forEach((row) => {
    const ageCell = row.cells[getPositionOf("Age")];
    const genderCell = row.cells[getPositionOf("Gender")];
    const statusCell = row.cells[getPositionOf("Status")];

    styleUnderage(row, ageCell);
    setGenderClass(row, genderCell);
    hideIfUnavailable(row, statusCell);
    setAvailabilityClass(row, statusCell);
  });
}

function styleUnderage(row, cell) {
  const isAdult = +cell.textContent >= 18;

  if (!isAdult) {
    row.style.textDecoration = "line-through";
  }
}

function setGenderClass(row, cell) {
  const isMale = cell.textContent === "m";
  const className = isMale ? "male" : "female";
  row.classList.add(className);
}

function hideIfUnavailable(row, cell) {
  if (!cell.dataset["available"]) {
    row.setAttribute("hidden", true);
  }
}

function setAvailabilityClass(row, cell) {
  const isAvailable = cell.dataset["available"] === "true";
  const className = isAvailable ? "available" : "unavailable";
  row.classList.add(className);
}
