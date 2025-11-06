const x = parseInt(process.argv[2]);
let output = "";

if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else if (x > 0) {
  for (let i = 0; i < x; i++) {
    output += "C is fun\n";
  }
  console.log(output.slice(0, -1));
}
