yeucclings = 0;
clickmulti = 1;
clickmultiprice = 50;
clickmultiowned = 0;

/*save file thingy
function save() {
    localStorage.setItem("yeucclings", yeucclings);
    localStorage.setItem("clickmulti", clickmulti);
    localStorage.setItem("clickmultiprice", clickmultiprice);
}
function load() {
    yeucclings = parseInt(localStorage.getItem("yeucclings"));
    clickmulti = parseInt(localStorage.getItem("clickmulti"));
    clickmultiprice = parseInt(localStorage.getItem("clickmultiprice"));
*/


function yeuccclick() {
    //make the yeucc image change to happy for when its hold down by a click
    document.getElementById("yeuccimage").src="stuff/images/yeucc/yeucchappy.png";
    setTimeout(function() {
        document.getElementById("yeuccimage").src="stuff/images/yeucc/yeuccschmile.png";
    }, 100);
    // how do i add a yeuccling when the yeucc button is clicked
    yeucclings += clickmulti;
    document.getElementById("yeuccling-bank-amount").innerText = yeucclings;
}

// add multiplier
function buyclickmultiplier() {
    if (yeucclings >= clickmultiprice) {
      yeucclings -= clickmultiprice;
      clickmultiowned += 1;
      clickmulti += 1;
      clickmultiprice += 50;
      document.getElementById("yeuccling-bank-amount").innerText = yeucclings;
      document.getElementById("clickmultidisplay").innerText = "click multiplier: " + clickmulti;
      document.getElementById("clickmulticostdisplay").innerText = "cost: " + clickmultiprice + " yeucclings";
      document.getElementById("clickmultiowned").innerText = "click multipliers owned: " + clickmultiowned;
    }
}
//change the owner text on the credits when hovered on it
function changeOwnerTextOnHover() {
    let ownerText = document.querySelector("owner-text");
    ownerText.innerHTML = "alexcroissant";
}
