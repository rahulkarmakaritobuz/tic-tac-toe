let flag = 0;
let drawFlag = 0;
let inputFlag = false;
let showResult = (id) => {
    let para = document.createElement('h2');
    para.innerHTML = `<html><body><p class="textStyle text-success">${id.textContent}</p></body></html>`;
    id.textContent = "";
    id.appendChild(para);
}

let check = (pos1, pos2, pos3) => {
    if ((pos1.textContent === 'X' && pos2.textContent === 'X' && pos3.textContent === 'X') || (pos1.textContent === '0' && pos2.textContent === '0' && pos3.textContent === '0')) {
        console.log(pos1, pos2, pos3);
        if (pos1.textContent === 'X') {
            document.getElementById('result').innerText = "'X' Win!!!";
        }
        else {
            document.getElementById('result').innerText = "'0' Win!!!";
        }
        showResult(pos1); showResult(pos2); showResult(pos3);
        return true;
    }
    else {
        return false;
    }
}

let validation = () => {
    const b1 = document.getElementById('b1');
    const b2 = document.getElementById('b2');
    const b3 = document.getElementById('b3');
    const b4 = document.getElementById('b4');
    const b5 = document.getElementById('b5');
    const b6 = document.getElementById('b6');
    const b7 = document.getElementById('b7');
    const b8 = document.getElementById('b8');
    const b9 = document.getElementById('b9');
    console.log(b1.textContent, b2.textContent, b3.textContent);

    if (!check(b1, b2, b3) && !check(b4, b5, b6) && !check(b7, b8, b9) && !check(b1, b5, b9) && !check(b3, b5, b7) && !check(b1, b4, b7) && !check(b2, b5, b8) && !check(b3, b6, b9)) {
        drawFlag++;
        if (drawFlag > 8) {
            document.getElementById('result').innerText = "Draw!!!";
        }
        return false;
    }
    else {
        return true;
    }
}
let insertFun = (id) => {
    console.log(id);
    const cell = document.getElementById(id);

    if (!inputFlag && cell.textContent === '') {
        if (flag === 0) {
            cell.textContent = "X";
            flag = 1;
        }
        else {
            cell.textContent = "0";
            flag = 0;
        }
        inputFlag = (!validation()) ? false : true;
    }
}

let reset = () =>{
    location.reload();
}
    // if((b1.textContent==='X'&& b2.textContent==='X' && b3.textContent==='X')||(b1.textContent==='0'&& b2.textContent==='0' && b3.textContent==='0')){
    //     if(b1.textContent==='X'){
    //         document.getElementById('result').innerText="'X' Win!!!";
    //     }
    //     else{
    //         document.getElementById('result').innerText="'0' Win!!!";
    //     }
    // }
    // if((b4.textContent==='X'&& b5.textContent==='X' && b6.textContent==='X')||(b4.textContent==='0'&& b5.textContent==='0' && b6.textContent==='0')){
    //     if(b4.textContent==='X'){
    //         document.getElementById('result').innerText="'X' Win!!!";
    //     }
    //     else{
    //         document.getElementById('result').innerText="'0' Win!!!";
    //     }
    // }
    // if((b7.textContent==='X'&& b8.textContent==='X' && b9.textContent==='X')||(b7.textContent==='0'&& b8.textContent==='0' && b9.textContent==='0')){
    //     if(b7.textContent==='X'){
    //         document.getElementById('result').innerText="'X' Win!!!";
    //     }
    //     else{
    //         document.getElementById('result').innerText="'0' Win!!!";
    //     }
    // }
    // if((b1.textContent==='X'&& b5.textContent==='X' && b9.textContent==='X')||(b1.textContent==='0'&& b5.textContent==='0' && b9.textContent==='0')){
    //     if(b1.textContent==='X'){
    //         document.getElementById('result').innerText="'X' Win!!!";
    //     }
    //     else{
    //         document.getElementById('result').innerText="'0' Win!!!";
    //     }
    // }
    // if((b3.textContent==='X'&& b5.textContent==='X' && b7.textContent==='X')||(b3.textContent==='0'&& b5.textContent==='0' && b7.textContent==='0')){
    //     if(b3.textContent==='X'){
    //         document.getElementById('result').innerText="'X' Win!!!";
    //     }
    //     else{
    //         document.getElementById('result').innerText="'0' Win!!!";
    //     }
    // }
    // if((b1.textContent==='X'&& b4.textContent==='X' && b7.textContent==='X')||(b1.textContent==='0'&& b4.textContent==='0' && b7.textContent==='0')){
    //     if(b1.textContent==='X'){
    //         document.getElementById('result').innerText="'X' Win!!!";
    //     }
    //     else{
    //         document.getElementById('result').innerText="'0' Win!!!";
    //     }
    // }
    // if((b2.textContent==='X'&& b5.textContent==='X' && b8.textContent==='X')||(b2.textContent==='0'&& b5.textContent==='0' && b8.textContent==='0')){
    //     if(b2.textContent==='X'){
    //         document.getElementById('result').innerText="'X' Win!!!";
    //     }
    //     else{
    //         document.getElementById('result').innerText="'0' Win!!!";
    //     }
    // }
    // if((b3.textContent==='X'&& b6.textContent==='X' && b9.textContent==='X')||(b3.textContent==='0'&& b6.textContent==='0' && b9.textContent==='0')){
    //     if(b3.textContent==='X'){
    //         document.getElementById('result').innerText="'X' Win!!!";
    //     }
    //     else{
    //         document.getElementById('result').innerText="'0' Win!!!";
    //     }
    // }
//}



// if(check(b1,b2,b3)===0 || !check(b1,b5,b9)===0 || check(b3,b5,b7)===0 || check(b1,b4,b7)===0 || check(b2,b5,b8)===0 || check(b3,b6,b9)===0)
//     {
//         document.getElementById('result').innerText="'0' Win!!!";
//         return true;
//     }
//     else{ 
//         if(check(b1,b2,b3)===1 || !check(b1,b5,b9)===1 || check(b3,b5,b7)===1 || check(b1,b4,b7)===1 || check(b2,b5,b8)===1 || check(b3,b6,b9)===1){
//             document.getElementById('result').innerText="'X' Win!!!";
//             return true;
//         }
//         else{
//             document.getElementById('result').innerText="draw!!!";
//             return false;
//         }
//     }