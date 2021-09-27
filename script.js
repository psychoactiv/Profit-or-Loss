var initialPrice = document.querySelector("#inp-1");
var amountOfStocks = document.querySelector("#inp-2");
var currentAmount = document.querySelector("#inp-3");
var output = document.querySelector(".M-better-By-MYself");
var btn = document.querySelector(".btn");

function newFunc(initialPrice, amountOfStocks, currentAmount) {
  var initial = Number(initialPrice.value);
  var noOfStocks = Number(amountOfStocks.value);
  var current = Number(currentAmount.value);
  if (initial < current) {
    var profit = (current - initial) * noOfStocks;
    var profitPercntage = (profit / initial) * 100;
    output.innerText = `congrats you made a profit of ₹${profit} and a profit percentage of ${profitPercntage}%`;
  } else if (initial > current) {
    var loss = (initial - current) * noOfStocks;
    var lossPercntage = (loss / initial) * 100;
    output.innerText = `sorry you got a loss of ₹${loss} and a loss percentage of ${lossPercntage}%`;
  } else {
    output.innerText = `No pain no gain , No gain no pain`;
  }
}

function callingFunc() {
  newFunc(initialPrice, amountOfStocks, currentAmount);
}

btn.addEventListener("click", callingFunc);
