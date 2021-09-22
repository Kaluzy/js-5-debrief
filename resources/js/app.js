// Your application should meet the requirements listed below:
// 1. Selects from a pool of at least ten names of your classmates.
// 2. A 'Generate Random Names' button that initiates the selection of 4 random names.
// 3. The selected random names are displayed to the browser.
// 4. Each time the Generate Random Names button is pressed, a new set of names appears
//    (replacing the previous set of 4 random names)
// 5. A button named 'Clear' that removes the populated list from the screen
// 6. The application should be designed to be visually pleasing.
// Note: Do not spend too much time on design. Focus primarily on functionality(i.e. steps 1-5).

const names = [
  "kaleab",
  "Kathryn",
  "sara",
  "jennet",
  "Alyssa",
  "Gishlane",
  "henok",
  "Philip",
  "hector",
  "Willis",
];
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const randomName = () => {
  const numNames = prompt("Please enter how many name to generate");
  if (numNames < 20) {
    document.getElementById("list").innerHTML = "";
    let fourNames = [];

    for (i = 0; i < numNames; i++) {
      const name = names[random(0, names.length)];
      const caps = name.charAt(0).toUpperCase() + name.slice(1);
      fourNames.push(caps);
      let insertElement = document.createElement("li");
      insertElement.innerHTML = caps;
      document.getElementById("list").appendChild(insertElement);
    }
  } else alert("Please put a number btn 0 and 20");
};

document.getElementById("clearbtn").addEventListener("click", function () {
  document.getElementById("list").innerHTML = "";
});
