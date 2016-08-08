var names = [];

for (var i = 0; i < 5; i++) {
names[i] = prompt ('Введите имя');
}

console.log (names);
var a = prompt ('Найти имя');

a == names[0] ? alert(a+', Вы успешно вошли') :
a == names[1] ? alert(a+', Вы успешно вошли') :
a == names[2] ? alert(a+', Вы успешно вошли') :
a == names[3] ? alert(a+', Вы успешно вошли') :
a == names[4] ? alert(a+', Вы успешно вошли') :
alert('Произошла ошибка');
