const BUILD_DATA = [
    {
        poster: "builds/0001.jpg",
        name: "Don’t Look Behind",
        version: "1.20.1",
        platform: "Forge",
        description: "Это не просто хоррор-сборка. Это медленное, давящее погружение в паранойю, где страх рождается не от скримеров… а от ощущения, что за вами наблюдают. Вы будете слышать то, чего нет, видеть то, что исчезает, сомневаться в каждом звуке и никогда не чувствовать себя в безопасности.",
        downloadUrl: "https://drive.google.com/file/d/1FHlCj82rKuQeDoid6ItNiFaNg_QM045T/view?pli=1"
    },
    {
        poster: "builds/poster2.jpg",
        name: "Графический мод B",
        version: "v1.0.4",
        platform: "PC / Windows 10+",
        description: "Полный лог изменений: заменён шейдер воды, добавлена поддержка трассировки лучей в реальном времени, оптимизирован рендеринг теней. Требуется видеокарта от RTX 3060.",
        downloadUrl: "https://example.com/download/build2"
    }
];

function renderBuilds() {
    const grid = document.getElementById('builds-grid');
    if (!grid) return;

    grid.innerHTML = '';

    BUILD_DATA.forEach((build, index) => {
        const card = document.createElement('div');
        card.className = 'build-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.dataset.index = index; // Хранение индекса для быстрого доступа

        card.innerHTML = `
            <img src="${build.poster}" alt="${build.name}" class="build-poster" loading="lazy">
            <div class="build-content">
                <h2 class="build-name">${build.name}</h2>
                <div class="build-tags">
                    <span class="build-tag">${build.version}</span>
                    <span class="build-tag">${build.platform}</span>
                </div>
                <p class="build-description">${build.description}</p>
                <a href="${build.downloadUrl}" target="_blank" rel="noopener noreferrer" class="build-download" data-download>Скачать</a>
            </div>
        `;

        grid.appendChild(card);
    });
}

function openBuildModal(index) {
    const build = BUILD_DATA[index];
    if (!build) return;

    document.getElementById('modal-poster').src = build.poster;
    document.getElementById('modal-poster').alt = build.name;
    document.getElementById('modal-title').textContent = build.name;
    document.getElementById('modal-version').textContent = build.version;
    document.getElementById('modal-platform').textContent = build.platform;
    document.getElementById('modal-description').textContent = build.description;
    document.getElementById('modal-download').href = build.downloadUrl;

    const modal = document.getElementById('build-modal');
    modal.style.display = 'flex';
    requestAnimationFrame(() => modal.classList.add('active'));
}

function closeBuildModal() {
    const modal = document.getElementById('build-modal');
    modal.classList.remove('active');
    setTimeout(() => modal.style.display = 'none', 300);
}

document.addEventListener('DOMContentLoaded', () => {
    renderBuilds();

    const grid = document.getElementById('builds-grid');
    grid.addEventListener('click', (e) => {
        const card = e.target.closest('.build-card');
        if (!card) return;

        // Если клик по кнопке "Скачать", модальное окно не открывается
        if (e.target.closest('.build-download')) return;

        const index = parseInt(card.dataset.index, 10);
        openBuildModal(index);
    });

    // Закрытие модального окна
    const modal = document.getElementById('build-modal');
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('modal-close')) {
            closeBuildModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeBuildModal();
    });
});
