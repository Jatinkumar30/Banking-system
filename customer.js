let myAccountBalanceE1 = parseInt(document.getElementById("myAccBalance").innerText);

function sendMoney() {
  var enterName = document.getElementById("enterName").value;
  var enterAmount = parseInt(document.getElementById("enterAmount").value);

  if (enterAmount > 100000) {
    alert("Insufficient Balance...");
  } else {
    var findUserBankAccount = enterName;

    var finalAmount =  parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;

    var myAccountBalanceE1 = parseInt(document.getElementById("myAccBalance").innerText) - enterAmount;

    document.getElementById("myAccBalance").innerText = myAccountBalanceE1;
    document.getElementById(findUserBankAccount).innerHTML = finalAmount;
    
    alert(`Successful Transaction !!  ${enterAmount} is successfully sent to ${enterName}`);

    // transaction history
    var createTag = document.createElement("li");
    var textNode = document.createTextNode(
      `${enterAmount} is sent to ${enterName} on ${Date()}.`
    );
    createTag.appendChild(textNode);
    var element = document.getElementById("transaction_body");
    element.insertBefore(createTag, element.firstChild);
  }
}
