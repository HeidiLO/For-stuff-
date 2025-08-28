let single6th = document.getElementById("1Point6th");
let five6th = document.getElementById("5Point6th");
let ten6th = document.getElementById("10Point6th");
let zero6th = document.getElementById("0point6th");
let output = document.getElementById("total6th");
let pointsix = 0;
let customInput6th = document.getElementById("customValue6th");
let addCustom6th = document.getElementById("addCustom6th");

addCustom6th.addEventListener("click", function () {
    let value = parseInt(customInput6th.value, 10);
    if (!isNaN(value)) {
        pointsix += value;
        output.textContent = Math.round(pointsix * 1.842);
        updatetotalmiddle();
        updatetotalall();
        localStorage.setItem('pointsix', Math.round(pointsix * 1.842));
    }
});
single6th.addEventListener("click", function () {
   let totalsixth = pointsix += 1;
    output.textContent =Math.round(totalsixth * 1.842);
     updatetotalmiddle();
     updatetotalall();
       localStorage.setItem('pointsix', Math.round(pointsix * 1.842));
});

five6th.addEventListener("click", function () {
    let pointsixs = pointsix += 5;
    output.textContent = Math.round(pointsixs * 1.842);
    updatetotalmiddle();
    updatetotalall();
      localStorage.setItem('pointsix', Math.round(pointsix * 1.842));
});

ten6th.addEventListener("click", function () {
    let tens = pointsix += 10
        output.textContent = Math.round(tens * 1.842);
    updatetotalmiddle();
    updatetotalall();
      localStorage.setItem('pointsix', Math.round(pointsix * 1.842));
});

zero6th.addEventListener("click", function () {
    pointsix = 0;
    output.textContent = Math.round(pointsix * 1.842);
    updatetotalmiddle();
    updatetotalall();
      localStorage.setItem('pointsix', Math.round(pointsix * 1.842));
});


let single7th = document.getElementById("1Point7th");
let five7th = document.getElementById("5Point7th");
let ten7th = document.getElementById("10Point7th");
let zero7th = document.getElementById("0point7th");
let output7 = document.getElementById("total7th");
let totalseventh = 0;
let customInput7th = document.getElementById("customValue7th");
let addCustom7th = document.getElementById("addCustom7th");

addCustom7th.addEventListener("click", function () {
    let value = parseInt(customInput7th.value, 10);
    if (!isNaN(value)) {
        totalseventh += value;
        output7.textContent = Math.round(totalseventh * 1.23);
        updatetotalmiddle();
         updatetotalall();
         localStorage.setItem('totalseventh', Math.round(totalseventh * 1.23));
    }
});
single7th.addEventListener("click", function () {
    let point = totalseventh += 1;
    output7.textContent = Math.round(point * 1.23);
    updatetotalmiddle();
     updatetotalall();
     localStorage.setItem('totalseventh', Math.round(totalseventh * 1.23));
});

five7th.addEventListener("click", function () {
    let points = totalseventh += 5;
    output7.textContent = Math.round(points * 1.23);
    updatetotalmiddle();
     updatetotalall();
     localStorage.setItem('totalseventh', Math.round(totalseventh * 1.23));
});

ten7th.addEventListener("click", function () {
    let tens = totalseventh += 10;
    output7.textContent = Math.round(tens * 1.23);
    updatetotalmiddle();
     updatetotalall();
     localStorage.setItem('totalseventh', Math.round(totalseventh * 1.23));
});

zero7th.addEventListener("click", function () {
    totalseventh = 0;
    output7.textContent = Math.round(totalseventh);
    updatetotalmiddle();
     updatetotalall();
     localStorage.setItem('totalseventh', Math.round(totalseventh * 1.23));
});

let single8th = document.getElementById("1Point8th");
let five8th = document.getElementById("5Point8th");
let ten8th = document.getElementById("10Point8th");
let zero8th = document.getElementById("0point8th");
let output8 = document.getElementById("total8th");
let totaleighth = 0;
let customInput8th = document.getElementById("customValue8th");
let addCustom8th = document.getElementById("addCustom8th");

addCustom8th.addEventListener("click", function () {
    let value = parseInt(customInput8th.value, 10);
    if (!isNaN(value)) {
        totaleighth += value;
        output8.textContent = Math.round(totaleighth);
        updatetotalmiddle();
         updatetotalall();
         localStorage.setItem('total8th', Math.round(totaleighth));
    }
});
single8th.addEventListener("click", function () {
    totaleighth += 1;
    output8.textContent = Math.round(totaleighth);
     updatetotalmiddle();
      updatetotalall();
      localStorage.setItem('total8th', Math.round(totaleighth));
});

five8th.addEventListener("click", function () {
    totaleighth += 5;
    output8.textContent = Math.round(totaleighth);
     updatetotalmiddle();
      updatetotalall();
      localStorage.setItem('total8th', Math.round(totaleighth));
});

ten8th.addEventListener("click", function () {
    totaleighth += 10;
    output8.textContent = Math.round(totaleighth);
     updatetotalmiddle();
      updatetotalall();
      localStorage.setItem('total8th', Math.round(totaleighth));
});

zero8th.addEventListener("click", function () {
    totaleighth = 0;
    output8.textContent = Math.round(totaleighth);
     updatetotalmiddle();
      updatetotalall();
      localStorage.setItem('total8th', Math.round(totaleighth));
 })


let single9th = document.getElementById("1Point9th");
let five9th = document.getElementById("5Point9th");
let ten9th = document.getElementById("10Point9th");
let zero9th = document.getElementById("0point9th");
let output9th = document.getElementById("total9th");
let total9th = 0;
let customInput9th = document.getElementById("customValue9th");
let addCustom9th = document.getElementById("addCustom9th");

addCustom9th.addEventListener("click", function () {
    let value = parseInt(customInput9th.value, 10);
    if (!isNaN(value)) {
        total9th += value;
        output9th.textContent = Math.round(total9th * 1.94);
        updatetotalhigh();
         updatetotalall();
              localStorage.setItem('total9th', Math.round(total9th * 1.94));
    }
});

single9th.addEventListener("click", function () {
   let point = total9th += 1;
    output9th.textContent = Math.round(point * 1.94);
     updatetotalhigh();
      updatetotalall();
           localStorage.setItem('total9th', Math.round(total9th * 1.94));
});

five9th.addEventListener("click", function () {
   let points = total9th += 5;
    output9th.textContent = Math.round(points * 1.94);
     updatetotalhigh();
      updatetotalall();
           localStorage.setItem('total9th', Math.round(total9th * 1.94));
});

ten9th.addEventListener("click", function () {
   let points = total9th += 10;
    output9th.textContent = Math.round(points * 1.94);
    updatetotalhigh();
     updatetotalall();
          localStorage.setItem('total9th', Math.round(total9th * 1.94));
});

zero9th.addEventListener("click", function () {
    total9th = 0;
    output9th.textContent = Math.round(total9th);
    updatetotalhigh();
     updatetotalall();
     localStorage.setItem('total9th', Math.round(total9th * 1.94));
});

let single10th = document.getElementById("1Point10th");
let five10th = document.getElementById("5Point10th");
let ten10th = document.getElementById("10Point10th");
let zero10th = document.getElementById("0point10th");
let output10th = document.getElementById("total10th");
let total10th = 0;
let customInput10th = document.getElementById("customValue10th");
let addCustom10th = document.getElementById("addCustom10th");

addCustom10th.addEventListener("click", function () {
    let value = parseInt(customInput10th.value, 10);
    if (!isNaN(value)) {
        total10th += value;
        output10th.textContent = Math.round(total10th * 2.386);
        updatetotalhigh();
         updatetotalall();
         localStorage.setItem('total10th', Math.round(total10th * 2.386));
    }
});
single10th.addEventListener("click", function () {
let point = total10th += 1;
    output10th.textContent = Math.round(point * 2.386);
     updatetotalhigh();
      updatetotalall();
      localStorage.setItem('total10th', Math.round(total10th * 2.386));
});

five10th.addEventListener("click", function () {
   let points = total10th += 5;
   output10th.textContent = Math.round(points * 2.386);
   updatetotalhigh();
   updatetotalall();
   localStorage.setItem('total10th', Math.round(total10th * 2.386));
});

ten10th.addEventListener("click", function () {
   let points = total10th += 10;
   output10th.textContent = Math.round(points * 2.386);
   updatetotalhigh();
   updatetotalall();
   localStorage.setItem('total10th', Math.round(total10th * 2.386));
});


zero10th.addEventListener("click", function () {
    total10th = 0;
    output10th.textContent = Math.round(total10th * 2.386);
    updatetotalhigh();
     updatetotalall();
     localStorage.setItem('total10th', Math.round(total10th * 2.386));
});


let single11th = document.getElementById("1Point11th");
let five11th = document.getElementById("5Point11th");
let ten11th = document.getElementById("10Point11th");
let zero11th = document.getElementById("0point11th");
let output11th = document.getElementById("total11th");
let total11th = 0;
let customInput11th = document.getElementById("customValue11th");
let addCustom11th = document.getElementById("addCustom11th");

addCustom11th.addEventListener("click", function () {
    let value = parseInt(customInput11th.value, 10);
    if (!isNaN(value)) {
        total11th += value;
        output11th.textContent = Math.round(total11th * 3.886);
        updatetotalhigh();
         updatetotalall();
         localStorage.setItem('total11th', Math.round(total11th * 3.886));
    }
});
single11th.addEventListener("click", function () {
    total11th += 1;
    let point = total11th;
    output11th.textContent = Math.round(point * 3.886);
    updatetotalhigh();
    updatetotalall();
    localStorage.setItem('total11th', Math.round(total11th * 3.886));
});

five11th.addEventListener("click", function () {
    total11th += 5;
    let points = total11th;
    output11th.textContent = Math.round(points * 3.886);
    updatetotalhigh();
    updatetotalall();
    localStorage.setItem('total11th', Math.round(total11th * 3.886));
});



ten11th.addEventListener("click", function () {
    total11th += 10;
    let points = total11th;
    output11th.textContent = Math.round(points * 3.886);
    updatetotalhigh();
    updatetotalall();
    localStorage.setItem('total11th', Math.round(total11th * 3.886));
});

zero11th.addEventListener("click", function () {
    total11th = 0;
    output11th.textContent = Math.round(total11th);
    updatetotalhigh();
    updatetotalall();
    localStorage.setItem('total11th', Math.round(total11th * 3.886));
});

let single12th = document.getElementById("1Point12th");
let five12th = document.getElementById("5Point12th");
let ten12th = document.getElementById("10Point12th");
let zero12th = document.getElementById("0point12th");
let output12th = document.getElementById("total12th");
let total12th = 0;
let customInput12th = document.getElementById("customValue12th");
let addCustom12th = document.getElementById("addCustom12th");

addCustom12th.addEventListener("click", function () {
    let value = parseInt(customInput12th.value, 10);
    if (!isNaN(value)) {
        total12th += value;
        output12th.textContent = Math.round(total12th * 2.1875);
        updatetotalhigh();
        updatetotalall();
        localStorage.setItem('total12th', Math.round(total12th * 2.1875));
    }
});

single12th.addEventListener("click", function () {
let points = total12th += 1;
    output12th.textContent = Math.round(points * 2.1875);
    updatetotalhigh();
    updatetotalall();
    localStorage.setItem('total12th', Math.round(total12th * 2.1875));
});

five12th.addEventListener("click", function () {
    let points = total12th += 5;
    output12th.textContent = Math.round(points * 2.1875);
    updatetotalhigh();
    updatetotalall();
    localStorage.setItem('total12th', Math.round(total12th * 2.1875));
});

     

ten12th.addEventListener("click", function () {
    let points = total12th += 10;
    output12th.textContent = Math.round(points * 2.1875);
    updatetotalhigh();
    updatetotalall();
    localStorage.setItem('total12th', Math.round(total12th * 2.1875));
});

zero12th.addEventListener("click", function () {
    total12th = 0;
    output12th.textContent = Math.round(total12th);
    updatetotalhigh();
    updatetotalall();
    localStorage.setItem('total12th', Math.round(total12th * 2.1875));
});

let outputmiddle = document.getElementById("totalmiddle");
let totalmiddle = 0;

function updatetotalmiddle() {
    let sum =
             pointsix * 1.842 +
        totalseventh * 1.23 +
        totaleighth;

    outputmiddle.textContent = Math.round(sum);
    localStorage.setItem('pointsix', Math.round(pointsix * 1.842));
    localStorage.setItem('totalseventh', Math.round(totalseventh * 1.23));
    localStorage.setItem('totaleighth', Math.round(totaleighth));

}



let outputhigh = document.getElementById("totalhigh");
let totalhigh = 0;

function updatetotalhigh() {
    let sum =
        total9th * 1.94 +
        total10th * 2.386 +
        total11th * 3.886 +
        total12th * 2.1875;

    outputhigh.textContent = Math.round(sum);
    localStorage.setItem('total9th', Math.round(total9th * 1.94));
    localStorage.setItem('total10th', Math.round(total10th * 2.386));
    localStorage.setItem('total11th', Math.round(total11th * 3.886));
    localStorage.setItem('total12th', Math.round(total12th * 2.1875));
}
let outputAll = document.getElementById("totalall");
let totalall = 0;

function updatetotalall() {
    let sum =
        pointsix * 1.842 +
        totalseventh * 1.23 +
        totaleighth +
        total9th * 1.94 +
        total10th * 2.386 +
        total11th * 3.886 +
        total12th * 2.1875;
    outputAll.textContent = Math.round(sum);


    outputAll.textContent = Math.round(sum);
    localStorage.setItem('pointsix', Math.round(pointsix * 1.842));
    localStorage.setItem('totalseventh', Math.round(totalseventh * 1.23));
    localStorage.setItem('totaleighth', Math.round(totaleighth));
    localStorage.setItem('total9th', Math.round(total9th * 1.94));
    localStorage.setItem('total10th', Math.round(total10th * 2.386));
    localStorage.setItem('total11th', Math.round(total11th * 3.886));
    localStorage.setItem('total12th', Math.round(total12th * 2.1875));
}