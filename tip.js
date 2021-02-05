function calculateTip() {
    var billAmount = document.getElementById("billamt").value;
    var serviceQuality = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;
    if (billAmount === "" || serviceQuality == 0) {
      alert("Please enter all the required fields!");
      return;
    }
    if (numOfPeople === "" || numOfPeople <= 1) {
      numOfPeople = 1;
      document.getElementById("each").style.display = "none";
    } else {
      document.getElementById("each").style.display = "block";
    }
    var total = (billAmount * serviceQuality) / numOfPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
  
  }
  document.getElementById("totalTip").style.display = "none";
  document.getElementById("each").style.display = "none";
  document.getElementById("calculate").onclick = function() {
    calculateTip();
  };