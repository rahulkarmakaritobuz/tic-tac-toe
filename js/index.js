let flag = 0;
let drawFlag = 0;
let inputFlag = false;
let player1=0;
let player2=0;
let totalMatch=0;
let showResult = (id) => {
  let para = document.createElement("h2");
  para.innerHTML = `<html><body><p class="textStyle text-success">${id.textContent}</p></body></html>`;
  id.textContent = "";
  id.appendChild(para);
};

let check = (pos1, pos2, pos3) => {
  if (
    (pos1.textContent === "X" &&
      pos2.textContent === "X" &&
      pos3.textContent === "X") ||
    (pos1.textContent === "0" &&
      pos2.textContent === "0" &&
      pos3.textContent === "0")
  ) {
    // console.log(pos1, pos2, pos3);
    document.getElementById("result").style.display="block";
    if (pos1.textContent === "X") {
        ++player1;
      document.getElementById("result").innerText = "'Player1' Win!!!";
      document.getElementById("player1").innerText = player1;
      console.log(player1);
    } else {
        ++player2;
      document.getElementById("result").innerText = "'Player2' Win!!!";
      document.getElementById("player2").innerText = player2;
    //   console.log(player2);
    }
    gsap.from("#result",{duration:3,x:"400",ease:"bounce"});
    gsap.fromTo("table", {opacity:0,scale:0},{ duration: 2, ease: "power3", opacity:1, scale:1.1});
    ++totalMatch;
    document.getElementById("total").innerText = totalMatch;
    showResult(pos1);
    showResult(pos2);
    showResult(pos3);
    return true;
  } else {
    return false;
  }
};

const b1 = document.getElementById("b1");
  const b2 = document.getElementById("b2");
  const b3 = document.getElementById("b3");
  const b4 = document.getElementById("b4");
  const b5 = document.getElementById("b5");
  const b6 = document.getElementById("b6");
  const b7 = document.getElementById("b7");
  const b8 = document.getElementById("b8");
  const b9 = document.getElementById("b9");

let validation = () => {
//   console.log(b1.textContent, b2.textContent, b3.textContent);

  if (
    !check(b1, b2, b3) &&
    !check(b4, b5, b6) &&
    !check(b7, b8, b9) &&
    !check(b1, b5, b9) &&
    !check(b3, b5, b7) &&
    !check(b1, b4, b7) &&
    !check(b2, b5, b8) &&
    !check(b3, b6, b9)
  ) {
    drawFlag++;
    if (drawFlag > 8) {
        document.getElementById("result").style.display="block";
        ++totalMatch;
    document.getElementById("total").innerText = totalMatch;
      document.getElementById("result").innerText = "Draw!!!";
      gsap.from("#result",{duration:3,x:"-400",ease:"bounce"});
    }
    return false;
  } else {
    return true;
  }
};
let insertFun = (id) => {
//   console.log(id);
  const cell = document.getElementById(id);
    // console.log(inputFlag);
  if (!inputFlag && cell.textContent === "") {
    if (flag === 0) {
      cell.textContent = "X";
      flag = 1;
    } else {
      cell.textContent = "0";
      flag = 0;
    }
    inputFlag = !validation() ? false : true;
  }
};

let clearBoard = () => {
    // ++totalMatch;
    // document.getElementById("total").innerText = totalMatch;
    document.getElementById("result").innerText ="";
    console.log(totalMatch);
    b1.textContent="";
    b2.textContent="";
    b3.textContent="";
    b4.textContent="";
    b5.textContent="";
    b6.textContent="";
    b7.textContent="";
    b8.textContent="";
    b9.textContent="";
    inputFlag=false;
    flag=0;
    drawFlag=0
};


let reset = () => {
  location.reload();
};


// Draggable.create(".board,.title,.result", {type:"x,y", edgeResistance:0.65, bounds:"#container", inertia:true});

gsap.from("#b1", { duration: 2, x: "-400%",y:"-400%", ease: "power3" });
gsap.from("#b2", { duration: 2, y: "-400%", ease: "power3" });
gsap.from("#b3", { duration: 2, x: "400%",y:"-400%", ease: "power3" });
gsap.from("#b4", { duration: 2, x: "-400%", ease: "power3" });
gsap.fromTo("#b5", {opacity:0,scale:0},{ duration: 2, rotation:"720", ease: "power3", opacity:1, scale:1});
gsap.from("#b6", { duration: 2, x: "400%", ease: "power3" });
gsap.from("#b7", { duration: 2, x: "-400%",y:"400%", ease: "power3" });
gsap.from("#b8", { duration: 2, y: "400%", ease: "power3" });
gsap.from("#b9", { duration: 2, x: "400%",y:"400%", ease: "power3" });

gsap.from(".title",{duration:3, delay:1, x:"-100%", ease:"bounce"});

gsap.fromTo(".reset", {opacity:0,scale:0},{ duration: 6,delay:2, ease: "power3", opacity:1, scale:1});


