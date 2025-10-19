yeucclings = 0;
clickmulti = 1;
clickmultiprice = 50;

//save file thingy
//function save() {
   // localStorage.setItem("yeucclings", yeucclings);
    //localStorage.setItem("clickmulti", clickmulti);
    //localStorage.setItem("clickmultiprice", clickmultiprice);
//}
//function load() {
    //yeucclings = parseInt(localStorage.getItem("yeucclings"));
    //clickmulti = parseInt(localStorage.getItem("clickmulti"));
    //clickmultiprice = parseInt(localStorage.getItem("clickmultiprice"));
//}

// how do i add a yeuccling when the yeucc button is clicked
function addyeuccling() {
    yeucclings += clickmulti;
    document.getElementById("yeuccling-bank-amount").innerText = yeucclings;
}

// add multiplier
function buyclickmultiplier() {
    if (yeucclings >= clickmultiprice) {
      yeucclings -= clickmultiprice;
      clickmulti += 1;
      clickmultiprice += 50;
      document.getElementById("yeuccling-bank-amount").innerText = yeucclings;
      document.getElementById("clickmultidisplay").innerText = "click multiplier: " + clickmulti;
      document.getElementById("clickmulticostdisplay").innerText = "cost: " + clickmultiprice + " yeucclings";
    }
}
//change the owner text on the credits when hovered on it
function changeOwnerTextOnHover() {
    let ownerText = document.querySelector("owner-text");
    ownerText.style.color = "red";
}
