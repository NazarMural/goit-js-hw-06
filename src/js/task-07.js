const fontSizeControlRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');
textRef.style.fontSize = `${fontSizeControlRef.value}px`;

fontSizeControlRef.addEventListener('input', () => {
    textRef.style.fontSize = `${fontSizeControlRef.value}px`;
});