/**
 * Файл управления игровыми сборками.
 * Для добавления новой сборки внесите объект в массив BUILD_DATA.
 * Обязательные поля: poster, name, version, description, downloadUrl
 */

const BUILD_DATA = [
    {
        poster: "builds/poster1.jpg",
        name: "Пример сборки",
        version: "v1.0.0",
        description: "Краткое описание конфигурации. Замените текст на актуальный.",
        downloadUrl: "https://example.com/download"
    }
];

function renderBuilds() {
    const grid = document.getElementById('builds-grid');
    if (!grid) return;

    grid.innerHTML = '';

    BUILD_DATA.forEach(function(build, index) {
        const card = document.createElement('div');
        card.className = 'build-card';
        // Задержка анимации для последовательного появления
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
