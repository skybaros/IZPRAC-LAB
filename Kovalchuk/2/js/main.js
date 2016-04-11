$(document).ready(function() {
	$('.btn').click(function (){
		var res = [];
		res = ($('#usr').val());
		res = (res.split(" ").map(Number));
		var max,
			min,
			sum = 0;
		max = Math.max.apply(Math,res);
		min = Math.min.apply(Math,res);
		console.log(max + " " + min);
		var indexMax = res.indexOf(max);
		var indexMin = res.indexOf(min);
		var i = indexMin;
		if (indexMin<indexMax) {
			for (i=indexMin; i<=indexMax; i++)
			{
				sum+=res[i];
				
			}
		}else {
			for (i=indexMax; i<=indexMin; i++)
			{
				sum+=res[i];
				
			}
		}
		$('#result').text(sum);
	});
 	$('#task').click( function () {
 		ch1=prompt("Введіть перше число", 15);
	if (ch1.replace (/\d/g, '').length) {
		alert ('Неправильний ввід');
	}
	ch2=prompt("Введіть друге число", 30);
	if (ch2.replace (/\d/g, '').length) {
		alert ('Неправильний ввід');
	}
		overloaded = function (ch1, ch2) {
			var k = 0;
			var mini
				if(ch1>ch2){
					mini=ch2;
				} else {
					mini=ch1;
				}

				for (var i = mini; i <= mini; i--) {
					if (ch2 % i == 0 && ch1 % i == 0) {
						alert("Найбільший спільний дільник = " + i);
						k++;
						break;
					}	
				}
				// if(k==0){
				// 	alert("Існує єдиний найменший спільний дільник - " + 1)
				// }
		};
	overloaded(ch1,ch2);
	overloaded(ch1 * ch2);

 	})
});

