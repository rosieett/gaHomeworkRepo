let bottle = "bottle";

for (bottlesLeft = 99; bottlesLeft >= 0; bottlesLeft --){

    if (bottlesLeft < 99 && bottlesLeft > 1) {
        console.log(bottlesLeft + " bottles of beer on the wall.");
        console.log(bottlesLeft + " bottles of beer.");
        console.log("Take one down.");
        console.log("Pass it around.");
    } else if (bottlesLeft == 1) {
        console.log(bottlesLeft + " " + bottle + " of beer on the wall.");
        console.log(bottlesLeft + " " + bottle + " of beer.");
        console.log("Take one down.");
        console.log("Pass it around.");
    } else if (bottlesLeft === 0) {
        console.log("No more bottles of beer on the wall");
    }

}
