### Kern
#### Framework-less kerning support for browsers

### Installation
```html
<script src="/path/to/kern.js"></script>
```

```bash
npm install kern
```

### Basic Use
```html
<h1 id="kernMe">Keyboard Cat</h1>
```

```js
var element = document.getElementById('kernMe');
kern(element, [
    1, -2, 5, 10, -12, 2, 1, 2, 3, 4, -5, -1
]);
```

### To Test
```bash
npm test
```

### To Build
```bash
make build
```