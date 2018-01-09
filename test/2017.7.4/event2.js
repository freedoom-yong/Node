//event2.js文件
var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent',function(a1,b2){
	console.log('listener1',a1,b2);
});
emitter.on('someEvent',function(a1,b2){
	console.log('listener2',a1,b2);
});
emitter.emit('someEvent','1 参数','2 参数');