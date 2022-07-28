const QRCode = require('qrcode');

//start

// const QrGenerate = async text =>{
// 	try{
// 		const qr =await QRCode.toString(text,{type: 'terminal'});
// 		console.log(qr)
// 	}catch(err){
// 		console.log(err)
// 	}
// }


// const QrGenerate = async text =>{
// 	try{
// 		const qr =await QRCode.toFile(`./qrcodeImages/1212}.png`,text);
// 		console.log(qr)
// 	}catch(err){
// 		console.log(err)
// 	}
// }

const QrGenerate = async text =>{
	try{
		const qr =await QRCode.toDataURL(text);
		console.log(qr)
	}catch(err){
		console.log(err)
	}
}

QrGenerate('Hola mundo');