document.getElementById('maisCuriosidades').addEventListener('click', function() {
    const extra = document.getElementById('extraCuriosidades');
    if (extra.style.display === 'none') {
        extra.style.display = 'block';
        this.textContent = 'Esconder curiosidades';
    } else {
        extra.style.display = 'none';
        this.textContent = 'Mostrar mais curiosidades';
    }
});