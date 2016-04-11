(function () {
"use strict"
var str,
	str2 = [],
	j = 0;
str = prompt("Input your string here");
var long,
	i = 0;
long = prompt("How long you substring should be?");
var index = prompt("From what position you would like to show your substring ?");
// if (long < index) {
	for (index; i <long; index++, i++)
	{
		str2[j] = str[index-1];
		j++;
	}
// }else {
// 	for (index; i<long; index++, i++)
// 	{
// 		str2[j] = str[index-1];
// 		j++;
// 	}
// }
var str2 = str2.join("");
alert (str2);
}) ();