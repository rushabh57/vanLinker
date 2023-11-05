const actionInicator = document.querySelector(".actions h2");
const actionInicator_1 = document.querySelector(".actions p");
const unionSymbol = "∪";
const intersactionSymbol = "∩";

// entites
const personA = document.querySelector(".personA");
const personB = document.querySelector(".personB");
const personC = document.querySelector(".personC");

//
const personA_set_value_Box = document.querySelectorAll(".set_value");
const personA_set_values = document.querySelectorAll(".set_values .values");
let set_A = [1, 2, 3];
let set_B = [1, 4, 5];
let set_C = [1, 2, 5, 7];

// person A's
const a_un_b = document.querySelector('[data-target="AUB"]');
const a_un_c = document.querySelector('[data-target="AUC"]');
const a_in_b = document.querySelector('[data-target="A∩B"]');
const a_in_c = document.querySelector('[data-target="A∩C"]');

const a_clr = `rgba(121, 172, 120, 0.665)`;
// person B's
const b_un_a = document.querySelector('[data-target="BUA"]');
const b_un_c = document.querySelector('[data-target="BUC"]');
const b_in_a = document.querySelector('[data-target="B∩A"]');
const b_in_c = document.querySelector('[data-target="B∩C"]');
const b_clr = `rgba(255, 128, 128, 0.665)`;
// person C's
const c_un_a = document.querySelector('[data-target="CUA"]');
const c_un_b = document.querySelector('[data-target="CUB"]');
const c_in_a = document.querySelector('[data-target="C∩A"]');
const c_in_b = document.querySelector('[data-target="C∩B"]');
const c_clr = `rgba(71, 65, 240 , 0.665)`;

// a' actions
a_un_b.addEventListener("click", () => {
  resetStyles();
  actionInicator.innerText = `X = {1,2,3,4,5}`;
  actionInicator_1.innerText = `A ${unionSymbol} B`;
  personA.style.transform = " translate(75% , -0%)";
  personB.style.transform = " translate(45% , -0%)";
  personC.style.transform = " translate(400% , -0%)";
  personA.style.background = a_clr;
  personB.style.background = b_clr;
});
a_un_c.addEventListener("click", () => {
  resetStyles();
  actionInicator.innerText = `X = {1,2,3,5,7}`;
  actionInicator_1.innerText = `A ${unionSymbol} C`;
  personA.style.transform = " translate(75% , -0%)";
  personC.style.transform = " translate(-65% , -0%)";
  personB.style.transform = " translate(400% , -0%)";
  personA.style.background = a_clr;
  personC.style.background = c_clr;
});
a_in_b.addEventListener("click", () => {
  resetStyles();
  actionInicator.innerText = `X = {1}`;
  actionInicator_1.innerText = `A ${intersactionSymbol} B`;
  personA.style.transform = " translate(75% , -0%)";
  personB.style.transform = " translate(45% , -0%)";
  personC.style.transform = " translate(400% , -0%)";
  personB.style.background = b_clr;
  personB.style.zIndex = "1";
});
a_in_c.addEventListener("click", () => {
  resetStyles();
  actionInicator.innerText = `X = {1,2}`;
  actionInicator_1.innerText = `A ${intersactionSymbol} C`;
  personA.style.transform = " translate(75% , -0%)";
  personC.style.transform = " translate(-65% , -0%)";
  personB.style.transform = " translate(400% , -0%)";
  personC.style.background = c_clr;
  personC.style.zIndex = "1";
});

// b's actions
b_un_a.addEventListener("click", () => {
  resetStyles();
  actionInicator.innerText = `X = {1,2,3,4,5}`;
  actionInicator_1.innerText = `B ${unionSymbol} A`;
  personA.style.transform = " translate(75% , -0%)";
  personB.style.transform = " translate(45% , -0%)";
  personC.style.transform = " translate(400% , -0%)";
  personA.style.background = a_clr;
  personB.style.background = b_clr;
});
b_un_c.addEventListener("click", () => {
  resetStyles();
  actionInicator.innerText = `X = {1,2,5,7}`;
  actionInicator_1.innerText = `B ${unionSymbol} C`;
  personB.style.transform = " translate(-35% , -0%)";
  personC.style.transform = " translate(-65% , -0%)";
  personA.style.transform = " translate(-400% , -0%)";
  personB.style.background = b_clr;
  personC.style.background = c_clr;
});
b_in_a.addEventListener("click", () => {
  resetStyles();
  actionInicator.innerText = `X = {1}`;
  actionInicator_1.innerText = `B ${intersactionSymbol} A`;
  personA.style.transform = " translate(75% , -0%)";
  personB.style.transform = " translate(45% , -0%)";
  personC.style.transform = " translate(400% , -0%)";
  personA.style.background = a_clr;
  personA.style.zIndex = "1";
});
b_in_c.addEventListener("click", () => {
  resetStyles();
  actionInicator.innerText = `X = {1,5}`;
  actionInicator_1.innerText = `B ${intersactionSymbol} C`;
  personB.style.transform = " translate(-35% , -0%)";
  personC.style.transform = " translate(-65% , -0%)";
  personA.style.transform = " translate(-400% , -0%)";
  personC.style.background = c_clr;
  personC.style.zIndex = "1";
});
// c's actions
c_un_a.addEventListener("click", () => {
  resetStyles();
  actionInicator.innerText = `X = {1,2,5,7}`;
  actionInicator_1.innerText = `C ${unionSymbol} A`;
  personA.style.transform = " translate(75% , -0%)";
  personC.style.transform = " translate(-70% , -0%)";
  personB.style.transform = " translate(400% , -0%)";
  personC.style.background = c_clr;
  personA.style.background = a_clr;
});
c_un_b.addEventListener("click", () => {
  resetStyles();
  actionInicator.innerText = `X = {1,2,4,5,7}`;
  actionInicator_1.innerText = `C ${unionSymbol} B`;
  personB.style.transform = " translate(-30% , -0%)";
  personC.style.transform = " translate(-70% , -0%)";
  personA.style.transform = " translate(-400% , -0%)";
  personC.style.background = c_clr;
  personB.style.background = b_clr;
});
c_in_a.addEventListener("click", () => {
  resetStyles();
  actionInicator.innerText = `X = {1,2}`;
  actionInicator_1.innerText = `C ${intersactionSymbol} A`;
  personB.style.transform = " translate(-30% , -0%)";
  personA.style.transform = " translate(75% , -0%)";
  personC.style.transform = " translate(-70% , -0%)";
  personB.style.transform = " translate(400% , -0%)";
  personA.style.background = a_clr;
  personA.style.zIndex = "1";
});
c_in_b.addEventListener("click", () => {
  resetStyles();
  actionInicator.innerText = `X = {1,5}`;
  actionInicator_1.innerText = `C ${intersactionSymbol} B`;
  personB.style.transform = " translate(-30% , -0%)";
  personC.style.transform = " translate(-70% , -0%)";
  personA.style.transform = " translate(-400% , -0%)";
  personB.style.background = b_clr;
  personB.style.zIndex = "1";
});

// Function to reset the style of all persons
function resetStyles() {
  personA.style.background = "";
  personB.style.background = "";
  personC.style.background = "";
  personA.style.transform = "translate(-50%, -50%)";
  personB.style.transform = "translate(-200%, -50%)";
  personC.style.transform = "translate(100%, -50%)";
  personA.style.zIndex = "unset";
  personB.style.zIndex = "unset";
  personC.style.zIndex = "unset";
}
