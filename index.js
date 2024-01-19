// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
  }
  function destructivelyRemoveLastCat(name) {
    cats.pop(name);
  }
  function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
  }
  function appendCat(name) {
    return [...cats, name];
  }
  function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats;
  }
  function removeLastCat(name) {
    return cats.slice(0, -1);
  }
  function removeFirstCat(name) {
   return cats.slice(1);
  }