let month = +prompt("Введите число от 1-12 чтобы узнать какой сезон")
if (month == 1 || month == 2 || month == 12) {
    alert("Это Зима")
} else if (month >=3 && month<= 5) {
    alert("Это Весна")
} else if (month >=6 && month<= 8) {
    alert("Это Лето")
} else if (month >=9 && month<= 11) {
    alert("Это Осень")
} else {
    alert ("Такого месяца не существует" )
}