// ============ MENU BURGER
const upperLine = document.getElementById("upperLine");
const lowerLine = document.getElementById("lowerLine");
const menuBox = document.getElementById("menuBox");
const menuOptions = document.querySelector(".menu-options");
let menuOpen = false;
menuBox.addEventListener("click", () => {
  if (!menuOpen) {
    menuOpen = true;
    upperLine.style.transform = "translate(0% , 6px) rotate(45deg)";
    lowerLine.style.transform = "translate(0% , -6px) rotate(-45deg)";
    document.body.classList.add("sRemove");
    menuOptions.style.top = "80px";
    menuOptions.style.opacity = "1";
    menuOptions.style.display = "block";
  } else {
    menuOpen = false;
    document.body.classList.remove("sRemove");
    upperLine.style.transform = "translate(0% , 0px) rotate(0deg)";
    lowerLine.style.transform = "translate(0% , -0px) rotate(-0deg)";
    menuOptions.style.top = "100px";
    menuOptions.style.opacity = "0";
    menuOptions.style.display = "none";
  }
});

const tabLink = document.querySelectorAll(".tab-link");
const ActivetabLink = document.querySelector(".active-tab");
tabLink.forEach((tabs) => {
  tabs.addEventListener("click", (e) => {
    tabs.appendChild(ActivetabLink);
  });
});

// ============ TABS
var currentTab = "tab1";

function openTab(tabName) {
  var tabContents = document.getElementsByClassName("tabs-contents");
  const rel_tabs = document.querySelector(".rel-tabs-content");
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
    rel_tabs.style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
  rel_tabs.style.display = "block";
  currentTab = tabName;
}

// ============ ACTIVE LINK

const tabUlLI = document.querySelectorAll(".tabs-contents ul li");
const activep = document.querySelector(".active-p");
const activeTabLink = `activeTabLink`;
const activeTabLink_Dot = document.querySelector(".activeTabLink-dot");
let isactive = false;
tabUlLI.forEach((li) => {
  li.addEventListener("click", () => {
    // Remove the 'activeTabLink' class from all tabs
    tabUlLI.forEach((tab) => {
      tab.classList.remove(activeTabLink);
    });

    // Add the 'activeTabLink' class to the clicked tab
    li.classList.add(activeTabLink);

    // Add the 'activeTabLink-dot' to the clicked tab
    li.appendChild(activeTabLink_Dot);
    activeTabLink_Dot.style.display = "block";
  });
});
