//run the function
const onLoadHandler = () => {
  console.log('DOMContentLoaded fired');
  //run my function
  writeBottleLyrics();
};

// document.readyState is enum of 'loading', 'interactive', 'complete'
if (document.readyState === 'loading') {
  // still loading, add handler we want to execute when loading is completed
  document.addEventListener('DOMContentLoaded', onLoadHandler);
} else {
  // DOM is already loaded! Just execute already!
  onLoadHandler();
}

//create overall function that will run above
function writeBottleLyrics() {

  //Have the js document create a ul, declaring it ul
  const ul = document.createElement('ul');

  //from plural to singlur bottles for later in the loop
  let bottle = "bottle";

  //for loop that I had in the first assignment
  for (bottlesLeft = 99; bottlesLeft >= 0; bottlesLeft--) {

    //create a new li everytime my loop runs
    const bottleListItem = document.createElement('li');

    let bottleLyric = '';

    if (bottlesLeft <= 99 && bottlesLeft > 1) {

      bottleLyric += bottlesLeft + " bottles of beer on the wall.";
      bottleLyric += " " + bottlesLeft + " bottles of beer. ";
      bottleLyric += "Take one down. ";
      bottleLyric += "Pass it around. ";

    } else if (bottlesLeft == 1) {

      bottleLyric += " " + bottlesLeft + " " + bottle + " of beer on the wall. ";
      bottleLyric += " " + bottlesLeft + " " + bottle + " of beer. ";
      bottleLyric += "Take one down. ";
      bottleLyric += "Pass it around. ";

    } else if (bottlesLeft === 0) {
      bottleLyric += "No more bottles of beer on the wall"
    }

    //create variable that stores the output of the loop above
    const bottleLyricTextNode = document.createTextNode(bottleLyric);

    //put the lyric into the li that I declared above
    bottleListItem.appendChild(bottleLyricTextNode);

    //put all the li's into the ul where they belong
    ul.appendChild(bottleListItem);

  }

  //outside of the loop, add all of this to the body of the page
  document.body.appendChild(ul);

}
