//Calculate Tip
console.log("js running");

function calculateTip() {
    var edu_score    = document.getElementById("education").value;
    var occ_score    = document.getElementById("Occ").value;
    var income       = document.getElementById("income").value;
    var people       = document.getElementById("people").value;

  
    //validate input
    if (edu_score == 0 || occ_score == 0 || income === "") {
      alert("Please enter values");
      return;
    }
    //Check to see if this input is empty or less than or equal to 1
    if (people === "" || people <= 1) {
      people = 1;
      document.getElementById("each").style.display = "none";
    } else { 
      document.getElementById("each").style.display = "block";
    }

    //calculate per capita and income score
    var per_capita_income = Math.round(income / people);
    var income_score = 0;
    if(per_capita_income > 2000)
      income_score=12;
    else if(per_capita_income > 999 && per_capita_income < 2000)
      income_score=10;
    else if(per_capita_income > 749 && per_capita_income < 1000)
      income_score=6;
    else if(per_capita_income > 499 && per_capita_income < 750)
      income_score=4;
    else if(per_capita_income > 299 && per_capita_income < 500)
      income_score=3;
    else if(per_capita_income > 100 && per_capita_income < 300)
      income_score=2;
    else if(per_capita_income < 101)
      income_score=1;

    //round to two decimal places
    total = +edu_score + +occ_score + income_score ;
    

    //category 
    var category ;
    if(total >= 26 && total<=29)
      category = "Upper Class";
    else if(total >= 16 && total<=25)
      category = "Upper Middle Class";
    if(total >= 11 && total<=15)
      category = "Lower Middle Class";
    if(total >= 5 && total<=10)
      category = "Upper Lower Class";
    if(total <5)
      category = "Lower Class";

    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    document.getElementById("cat").innerHTML = category;
  
  }
  
  //Hide the tip amount on load
  document.getElementById("totalTip").style.display = "none";
  document.getElementById("each").style.display = "none";
  
  //click to call function
  document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };