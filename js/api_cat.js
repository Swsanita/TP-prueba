document.getElementById('cargaOtroGato').addEventListener('click', () => {
const url = 'https://api.thecatapi.com/v1/images/search';
fetch(url)
    .then(response => response.json())
    .then(data => {
        const imageUrl = data[0].url;
        const catImage = document.getElementById('catImage');
        catImage.src = imageUrl;
    })
    .catch(err => console.log('Solicitud fallida', err));
});