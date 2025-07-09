document.getElementById('textUrl').addEventListener('keyup', (e) => {
	if(e.key === "Enter"){
			qrCodeGenerate();
	}
})

function qrCodeGenerate() {
	const textUrl = document.getElementById('textUrl').value;
	new QRious({
		element: document.getElementById('qr-canvas'),
		value: textUrl,
		size: 600
	});
}