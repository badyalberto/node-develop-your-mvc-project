function getSeedUsers() {
  return [
    {
      name: "Gonzalo",
      surname: "Garcia",
      email: "gonzalo@gmail.com",
      password: "123456",
      roles: ["Admin"],
    },
    {
      name: "Marc",
      surname: "Parellada",
      email: "marc@gmail.com",
      password: "654321",
      roles: ["Employee"],
    },
    {
      name: "Alberto",
      surname: "chica",
      email: "alberto@gmail.com",
      password: "111111",
      roles: ["Customer"],
    },
  ];
}

module.exports = {
  getSeedUsers,
};