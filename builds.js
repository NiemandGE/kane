const BUILD_DATA = [
    {
        poster: "builds/0001.jpg",
        name: "Don’t Look Behind ",
        version: "1.20.1 - Forge",
        description: "Это не просто хоррор-сборка. Это медленное, давящее погружение в паранойю, где страх рождается не от скримеров… а от ощущения, что за вами наблюдают. Вы будете слышать то, чего нет, видеть то, что исчезает, сомневаться в каждом звуке и никогда не чувствовать себя в безопасности.",
        downloadUrl: "https://minecraft-inside.ru/out/aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xRkhsQ2o4MnJLdVFlRG9pZDZJdE5pRmFOZ19RTTA0NVQvdmlldz91c3A9c2hhcmluZw,,"
    }
];

function renderBuilds() {
    const grid = document.getElementById('builds-grid');
    if (!grid) return;

    grid.innerHTML = '';

    BUILD_DATA.forEach(function(build, index) {
        const card = document.createElement('div');
        card.className = 'build-card';
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML =
            '<img src="' + build.poster + '" alt="' + build.name + '" class="build-poster" loading="lazy">' +
            '<div class="build-content">' +
                '<h2 class="build-name">' + build.name + '</h2>' +
                '<span class="build-version">' + build.version + '</span>' +
                '<p class="build-description">' + build.description + '</p>' +
                '<a href="' + build.downloadUrl + '" target="_blank" rel="noopener noreferrer" class="build-download">Скачать</a>' +
            '</div>';

        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderBuilds);
