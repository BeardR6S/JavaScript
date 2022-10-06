function battingAverage() {
  var hits = 100;
  var atBats = 300;

  return {
    getCurrentAverage: function () {
      return (hits/atBats);
    },
    updateHitsAndAtBats: function (hit, atBat) {
      hits += hit;
      atBats += atBat;
    }
  }
}

var altuve = battingAverage();
console.log(altuve.getCurrentAverage());
//* Gives Batting average of .33333333333333333

altuve.updateHitsAndAtBats(0, 20); //!This updates the hits and at bats so the average changes.
console.log(altuve.getCurrentAverage());
//* This returns .3125 

