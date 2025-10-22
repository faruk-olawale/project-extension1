const main = document.getElementById("main");
const contentContainer = document.getElementById("article");
const sunBackgrund = document.getElementById("sunBackgrund");
const header = document.getElementById("header");
const logo = document.getElementById("logo");
const Topiclist = document.getElementById("Topiclist");
const inactive = document.getElementById("inactive");
const Allsection = document.getElementById("All");
const Activesection = document.getElementById("Active");
const inactivesection = document.getElementById("inactive");

let allAsides = [];

async function Allcontent() {
    const response = await fetch("data.json");
    const data = await response.json(); 
    console.log(data);

for (let i = 0; i < data.length; i++) {  

 const aside = document.createElement("aside");

 const summarysection = document.createElement("summary");
 const firstsection = document.createElement("section");
 const secondSection = document.createElement("section");
 const imgsection = document.createElement("img");
 imgsection.src = data[i].logo;
 const divsection = document.createElement("div");
 const h4name = document.createElement("h4");
 h4name.innerHTML = data[i].name;
 const pnames = document.createElement("p");
 pnames.innerHTML = data[i].description
 const premove = document.createElement("p");
 premove.innerHTML = "Remove"

 premove.onclick = function(){
  aside.style.display ="none";
 }

const mother = document.createElement("div");
   let isActive = data[i].isActive;
     isActive = !isActive;
     if (isActive) {
      mother.style.justifyContent = "flex-end";
      mother.style.backgroundColor = "hsl(3, 86%, 64%)";
    } else {
      mother.style.justifyContent = "flex-start";
      mother.style.backgroundColor = "hsl(226, 11%, 37%)";
    }
    
  mother.onclick = function() {
    if (mother.style.justifyContent === "flex-start") {
      mother.style.justifyContent = "flex-end";
      mother.style.backgroundColor ="hsl(3, 77%, 44%)";
    } else {
     mother.style.justifyContent = "flex-start";
     mother.style.backgroundColor ="hsla(240, 2%, 64%, 1.00)"
    }
};
 const daughter = document.createElement("span");

 contentContainer.appendChild(aside);
 allAsides.push({aside, h4name, pnames, premove, mother });
 aside.appendChild(summarysection);
 summarysection.append(firstsection,secondSection);
 firstsection.append(imgsection,divsection);
 divsection.append(h4name, pnames);
 secondSection.append(premove, mother);
 mother.appendChild(daughter);

}


 sunBackgrund.onclick = function(){
 if (sunBackgrund.src.includes("assets/images/icon-sun.svg")) {
   main.style.background = "linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)";
   sunBackgrund.src = "assets/images/icon-moon.svg";
   sunBackgrund.style.backgroundColor ="hsl(0, 0%, 93%)";
   header.style.backgroundColor = "hsl(200, 60%, 99%)";
   logo.src ="assets/images/logo.svg";
   Topiclist.style.color = "hsl(227, 75%, 14%)"
   const container = document.querySelector("aside");
   allAsides.forEach(({aside, h4name, pnames, premove, mother }) => {
   aside.style.backgroundColor = "hsl(200, 60%, 99%)";
   h4name.style.color ="hsl(227, 75%, 14%)"
   pnames.style.color ="hsl(226, 11%, 37%)"
   premove.style.color ="hsl(227, 75%, 14%)"
    });

 } else {
   sunBackgrund.src = "assets/images/icon-sun.svg";
   main.style.background = "linear-gradient(180deg, #040918 0%, #091540 100%)";
   header.style.backgroundColor = "hsl(226, 25%, 17%)";
   logo.src ="assets/images/logonew.svg";
   sunBackgrund.style.backgroundColor ="hsl(225, 23%, 24%)";
   Topiclist.style.color = "hsl(200, 60%, 99%)"
   inactive.style.backgroundColor ="hsl(225, 23%, 24%)";
   inactive.style.color ="hsl(200, 60%, 99%)";
   
   allAsides.forEach(({aside, h4name, pnames, premove, mother }) => {
   aside.style.backgroundColor = "hsl(225, 23%, 24%)";
   h4name.style.color ="hsl(200, 60%, 99%)"
   pnames.style.color ="hsl(0, 0%, 78%)"
   premove.style.color ="hsl(200, 60%, 99%)"
   premove.style.border ="1px solid hsl(225, 23%, 24%)"

  });
 }   

 }

  Allsection.onclick = function (){
    allAsides.forEach(({aside, h4name, pnames, premove, mother }) => {
      if (mother.style.justifyContent ==='flex-end' || mother.style.justifyContent ==='flex-start') {
        aside.style.display = 'flex';
      } else {
        aside.style.display = 'none';
      }
    })
  };
  Activesection.onclick = function (){
    allAsides.forEach(({aside, mother }) => {
      if (mother.style.justifyContent ==='flex-end') {
        aside.style.display = 'flex';
      } else {
        aside.style.display = 'none';
      }
    })
  };

 inactivesection.onclick = function () {
  allAsides.forEach(({ aside, h4name, pnames, premove, mother}) => {
    if (mother.style.justifyContent !== "flex-end") {
      aside.style.display = "flex";
    } else {
      aside.style.display = "none";
    }
  });
};
 
 }

Allcontent();
