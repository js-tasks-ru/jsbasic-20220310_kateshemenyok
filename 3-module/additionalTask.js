const users = [
  {
    firstName: "Филипп",
    lastName: "Киркоров",
    gender: "m",
  },
  {
    firstName: "Алла",
    lastName: "Пугачёва",
    gender: "f",
  },
  {
    firstName: "Ольга",
    lastName: "Бузова",
    gender: "f",
  },
  {
    firstName: "Максим",
    lastName: "Галкин",
    gender: "m",
  },
];

const femaleNames = users.reduce((acc, user) => {
  if (user.gender === "f") {
    acc.push(`${user.firstName} ${user.lastName}`);
  }

  return acc;
}, []);
