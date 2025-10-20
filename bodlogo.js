const getRandomNumber = () => Math.floor(Math.random() * 3) + 1;

const userValue = Number(window.prompt("Ямар дүрс гаргах? Хайч бол 1, Чулуу бол 2, Даавуу бол 3"));

const computerValue = getRandomNumber();

const checkWinner = (user, computer) => {
if (user === computer) return "Тэнцэв!";
if ((user === 1 && computer === 3) || (user === 2 && computer === 1) || (user === 3 && computer === 2)) return "Чи хожлоо! 🎉";
return "Компьютер хожлоо! 💻";};
window.alert(`Компьютер: ${computerValue}\nЧи: ${userValue}\n${checkWinner(userValue, computerValue)}`);
