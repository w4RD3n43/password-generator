const UpperSet = "QWERTYUIOPASDFGHJKLZXCVBNM";
const LowerSet = "qwertyuiopasdfghjklzxcvbnm";
const NumberSet = "123456789";
const SymbolsSet = "~!@#$%^&*()_+-=";

const passbox = document.getElementById("passbox");
const totalchar = document.getElementById("total-char");
const Upperset = document.getElementById("Uppercase");
const Lowerset = document.getElementById("Lowercase");
const Numberset = document.getElementById("Numbers");
const Symbolset = document.getElementById("Symbols");

const GetRandom = (dataSet) => {
    return dataSet[Math.floor(Math.random()*dataSet.length)];
}

const generatePassword = () => {
  const password = generatePasswordHelper();
  passbox.innerText = truncateString(password, totalchar.value);
};

const generatePasswordHelper = (password = "") => {
  if (password.length >= totalchar.value) {
    return password;
  }

  if (Upperset.checked) {
    password += GetRandom(UpperSet);
  } 
  if (Lowerset.checked) {
    password += GetRandom(LowerSet);
  }
  if (Numberset.checked) {
    password += GetRandom(NumberSet);
  }
  if (Symbolset.checked) {
    password += GetRandom(SymbolsSet);
  }

  return generatePasswordHelper(password);
};

document.getElementById("mybutton").addEventListener(
  "click",
  function(){
    generatePassword();
  }
);

function truncateString(str, num) {
  if (str.length > num) {
    return str.substring(0, num);
  } else {
    return str;
  }
}

generatePassword(); // Initial generation
