/**
 * Файл для добавления игровых сборок.
 * Чтобы добавить новую сборку, добавьте объект в массив BUILD_DATA
 * со следующими полями:
 *   - poster: путь к изображению постера (строка)
 *   - name: название сборки (строка)
 *   - version: версия сборки (строка)
 *   - description: описание сборки (строка)
 *   - downloadUrl: ссылка для скачивания (строка)
 */

const BUILD_DATA = [
    // === ПРИМЕР СБОРКИ (замените на свои данные) ===
    {
        poster: "builds/poster1.jpg",
        name: "Название сборки",
        version: "v1.0.0",
        description: "Краткое описание данной сборки. Замените этот текст на свой.",
        downloadUrl: "https://example.com/download/build1"
    },
    // Добавьте новые сборки ниже, копируя объект и меняя значения
];

/**
 * Функция рендеринга сборок на странице.
 * Вызывается автоматически при загрузке builds.html.
 */
function renderBuilds() {
    const grid = document.getElementById('builds-grid');
    if (!grid) return; // Функция вызвана не на странице сборок

    grid.innerHTML = '';

    BUILD_DATA.forEach(function(build) {
        const card = document.createElement('div');
        card.className = 'build-card';

        card.innerHTML =
            '<img src="' + build.poster + '" alt="' + build.name + '" class="build-poster">' +
            '<div class="build-content">' +
                '<h2 class="build-name">' + build.name + '</h2>' +
                '<span class="build-version">' + build.version + '</span>' +
                '<p class="build-description">' + build.description + '</p>' +
                '<a href="' + build.downloadUrl + '" target="_blank" class="build-download">' +
                    'Скачать' +
                '</a>' +
            '</div>';

        grid.appendChild(card);
    });
}

// Запуск рендеринга при загрузке DOM
document.addEventListener('DOMContentLoaded', renderBuilds);
