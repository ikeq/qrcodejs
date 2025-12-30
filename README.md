# QRCode.js

QRCode.js is javascript library for making QRCode. QRCode.js supports Cross-browser with HTML5 Canvas and table tag in DOM.
QRCode.js has no dependencies.

## Basic Usages

```javascript
import QRCode from 'qrcodejs-es';
new QRCode(document.getElementById('qrcode'), 'http://jindo.dev.naver.com/collie');
```

or with some options

```javascript
import QRCode from 'qrcodejs-es';
const qrcode = new QRCode(document.getElementById('qrcode'), {
  text: 'http://jindo.dev.naver.com/collie',
  width: 128,
  height: 128,
  colorDark: '#000000',
  colorLight: '#ffffff',
  correctLevel: QRCode.CorrectLevel.H,
});
```

and you can use some methods

```javascript
qrcode.clear(); // clear the code.
qrcode.makeCode('http://naver.com'); // make another code.
```

## Browser Compatibility

Chrome, Firefox, Safari, Opera, Mobile Safari, Android, Windows Mobile, ETC.

## License

MIT License

## Contact

X @davidshimjs
