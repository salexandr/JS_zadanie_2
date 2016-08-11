var names = [];
var b = false;

for (var i = 0; i < 5; i++) {
names[i] = prompt ('Введите имя');
}

var a = prompt ('Найти имя');

for (var i = 0; i < 5; i++) {
if (a == names[i]) {
	b = true;
	};
}

b == true ? alert(a+', Вы успешно вошли') : alert('Произошла ошибка');
