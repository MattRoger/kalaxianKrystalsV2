let score= 0;
const randomNum = (lower, upper) => {
  if (isNaN(lower) || isNaN(upper)) {
    throw Error("both must be nums");
  }
  return (number = Math.floor(Math.random() * (upper - lower + 1)) + lower);
};
const startGame = () => {
  return (targetScore = randomNum(16, 120));
};
const loadCrystals = () => {
  for (var i = 0; i < 4; i++) {
    const imageCrystal = $("<img>");
    const crystalArray = [
      "assets/images/cr1_bl.png",
      "assets/images/cr1_grn.png",
      "assets/images/cr1_purple.png",
      "assets/images/cr1_red.png",
      "assets/images/cr2_bl.png",
      "assets/images/cr2_grn.png",
      "assets/images/cr2_purple.png",
      "assets/images/cr2_red.png",
    ];
    imageCrystal.addClass("crystalImage");
    imageCrystal.attr("src", crystalArray[Math.floor(Math.random()*crystalArray.length)] );
    imageCrystal.attr("alt", crystalArray[i] );
    let valueCrystal= randomNum(1,12)
    imageCrystal.attr("data-crystal-value", valueCrystal);
    $(".crystalWrapper").append(imageCrystal);
    console.log(valueCrystal)
  }
};
const onClick=()=>{
    $(".crystalWrapper").on("click", "img", function () {    
        console.log(`Crystal clicked ${$(this).attr("data-crystal-value")}`)
        crystalScore= $(this).attr("data-crystal-value");
        crystalScore = parseInt(crystalScore);
        score += crystalScore;
        $("#score").text(score);
        console.log(`the current score is ${score}`)
    })
}

$("#start").on("click", function () {
    $(".openingModal").css({ display: "none" });
    startGame();
    loadCrystals();
    console.log(`The TargetScore is ${targetScore}`);
    score=0;
    $("#score").text(score);
    $("#targetScore").text(targetScore);
});

onClick()

