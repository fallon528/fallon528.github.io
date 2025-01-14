var infoDiv = document.getElementById('info');

const map = L.map('map').setView([34.65127663010445, 135.50843439999946], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker = L.marker([34.65127663010445, 135.50843439999946]).addTo(map)
    .bindPopup('可樂餅長眠於此');

map.on('click', () => {
    const description = document.getElementById('description');
    description.style.display = 'block';
    description.scrollIntoView({ behavior: 'smooth' });
});

function goPage() {
    window.location.href = "https://mira-ar.n010.app/show/l2baMZ";
}
