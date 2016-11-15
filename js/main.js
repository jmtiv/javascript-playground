function thirteen () {
  return 6 + 7;
}

function answer () {
  return 84 / 2;
}

function greetEric () {
  return "Hello, Eric.";
}

function sevenIsEight () {
  return 7 === 8;
}

function listOf3 () {
  return [0, 1, 2];
}

function ammon() {
  obj = {first_name: "ammon"}
  return obj
};

function plus3 (x) {
  return x + 3;
}

function hello (name) {
  return "Hello, " + name + "." ;

}

function yesNo (condition) {
  if (condition) {
    return "yes";
  }
  return "no";

}

function allPlus3 (array) {
  var newarray = [];
  array.forEach (function (num) {
    newarray.push (num + 3);
  } );
  return newarray;
}
