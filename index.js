// Code your solution here
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string) {
  return drivers.filter((match)=> match.toLowerCase()===string.toLowerCase());
  
}
findMatching()

function fuzzyMatch(drivers, string) {
  return drivers.filter(
    (match) =>match.toLowerCase().indexOf(string.toLowerCase()) === 0);
}
fuzzyMatch()

function matchName(drivers, string){
    return drivers.filter((match)=>match.name===string);
}
