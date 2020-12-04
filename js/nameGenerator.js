function nameGenerator() {
  // Get elements from DOM
  const generateButton = document.querySelector(".button");
  const generateName = document.querySelector(".generated");

  //   create your username
  let nameList = [
    "Mother",
    "Papa",
    "Earth",
    "BearyBoyB-",
    "Have no fear",
    "Flying",
    "Master",
    "Undefined",
    "#Kränkt",
    "Förfarande",
    "Pirate",
    "Boss Ass",
    "Power",
    "Captain",
    "Flower Power",
    "Extrovert",
    "Motivational",
    "Hacker",
    "Programmer",
    "Purple lover",
  ];

  //   clears for new username
  let finalName = "";

  // Create event listener
  generateButton.addEventListener("click", randomName);

  //   finalname = usernames, | mathrandom = random name | mathfloor = still confused
  function randomName() {
    finalName = nameList[Math.floor(Math.random() * nameList.length)];
    generateName.innerText = finalName + " Björn";
  }
}

nameGenerator();
