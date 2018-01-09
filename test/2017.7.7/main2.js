function printHello(){
	console.log("Hello , world!");
}
//三秒后执行以上函数
var t = setTimeout(printHello, 3000);

//清除定时器
clearTimeout(t);
