var os = require('os');

//cpu的字节序
console.log('endlanness:'+os.endianness());
//操作系统名
console.log('type:'+os.type());

//操作系统名
console.log('platform:'+os.platform());

//系统内存总量
//console.log('total memory : ' + os.totalmem() + " bytes.");
console.log('total memory : ' + os.totalmem() + " bytes.");

//操作系统空间内存量
//console.log('free memory : ' + os.freemem() + " bytes.");
console.log('free memory : ' + os.freemem() + " bytes.");