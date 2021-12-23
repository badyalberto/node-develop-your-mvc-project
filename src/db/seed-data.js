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

function getSeedPurchases() {
    return [
      {
        user: "61c45e9f1c4e6e3337f7e10b",
        products: ["61c4458885a6f66f5442a51b","61c4458885a6f66f5442a51c","61c4458885a6f66f5442a51d"]
      },
      {
        user: "61c4527b3180ebfa161fe427",
        products: ["61c4458885a6f66f5442a51c","61c4458885a6f66f5442a51d"]
      },
      
    ];
  }

module.exports = {
    getSeedPurchases,
    getSeedUsers
}
