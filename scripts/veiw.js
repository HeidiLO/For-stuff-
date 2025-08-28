    document.getElementById("totalmiddle").textContent = middle;
    document.getElementById("totalhigh").textContent = high;
    document.getElementById("totalall").textContent = all;
    document.getElementById("total9th").textContent = total9th;
    document.getElementById("total10th").textContent = total10th;
    document.getElementById("total11th").textContent = total11th;
    document.getElementById("total12th").textContent = total12th;
    document.getElementById("totaleighth").textContent = totaleighth;
    document.getElementById("totalseventh").textContent = totalseventh;
    document.getElementById("pointsix").textContent = pointsix;

function savePoints() {
    localStorage.setItem('pointsix', pointsix );
    localStorage.setItem('totalseventh', totalseventh);
    localStorage.setItem('totaleighth', totaleighth); 
    localStorage.setItem('total9th', total9th );
    localStorage.setItem('total10th', total10th);
    localStorage.setItem('total11th', total11th);
    localStorage.setItem('total12th', total12th );
}
function updateAll() {
   updatetotalmiddle();
    updatetotalhigh();
    updatetotalall();
    savePoints();
}