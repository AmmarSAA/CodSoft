function getNum(num) {
  switch (num) {
    // clear screen
    case "AC":
      document.getElementById("result").value = "";
      break;

    // remove last number
    case "C":
      var currentResult = document.getElementById("result").value;
      document.getElementById("result").value = currentResult.slice(0, -1);
      console.log(
        document
          .getElementById("result")
          .value.slice(0, currentResult.length - 1)
      );
      break;

    // shows result
    case "=":
      var result = eval(document.getElementById("result").value);
      console.log("Trignometry calculation in Radian");
      console.log(result);
      document.getElementById("result").value = result;
      break;

    // round result
    case "roundResult":
      var result = document.getElementById("result").value;
      document.getElementById("result").value = Math.round(result);
      break;

    // shows num on screen
    default:
      document.getElementById("result").value += num;
      break;
  }
}
