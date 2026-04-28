# 📋 ROADMAP: Сайт для гадалки Фатимы

## 🎯 Общая информация

**Название проекта:** Site Fatima — Сильнейшая черная магия  
**Основной визуал:** siteshkull (тёмная мистическая тема, шрифты Inter + Cormorant Garamond)  
**Контент:** sitefatima + siteanna (тексты, услуги, контакты)  
**Цель:** Создать SEO-оптимизированный сайт для публикации на GitHub Pages

---

## 📁 Структура проекта

```
sitefatima_new/
├── index.html              # Главная страница
├── services.html           # Страница услуг
├── certificates.html       # Страница сертификатов
├── reviews.html            # Страница отзывов (или секция на главной)
├── css/
│   ├── main.css           # Основные стили
│   ├── responsive.css     # Адаптивные стили
│   └── animations.css     # Анимации
├── js/
│   ├── main.js            # Основной скрипт
│   ├── video-scroll.js    # Скрипт для YouTube при скролле
│   └── whatsapp-widget.js # Виджет WhatsApp
├── images/
│   ├── placeholder.jpg    # Заглушка для фото Фатимы
│   ├── certificate-1.jpg  # Сертификаты (будут добавлены)
│   ├── certificate-2.jpg
│   └── ...
├── fonts/
│   ├── Inter.woff2        # Шрифт из siteshkull
│   └── CormorantGaramond.woff2
├── robots.txt             # Для SEO
├── sitemap.xml            # Карта сайта
└── ROADMAP.md             # Этот файл
```

---

## 🚀 ЭТАПЫ РАЗРАБОТКИ

### ЭТАП 1: Базовая структура проекта
**Цель:** Создать каркас сайта с правильными мета-тегами

#### Шаг 1.1: Создать HTML-скелет
- [ ] `<!DOCTYPE html>` с `lang="ru"`
- [ ] `<head>` с кодировкой UTF-8
- [ ] Viewport для мобильных устройств
- [ ] Подключение CSS файлов
- [ ] Подключение JS файлов (async/defer)

#### Шаг 1.2: SEO мета-теги
```html
<title>Сильнейшая черная магия | Гадалка Фатима</title>
<meta name="description" content="Профессиональные магические услуги от Фатимы. Гадание, привороты, снятие порчи, обряды. Опыт более 20 лет.">
<meta name="keywords" content="гадалка, черная магия, Фатима, гадание, приворот, снятие порчи, маг, экстрасенс">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://yourusername.github.io/sitefatima_new/">
```

#### Шаг 1.3: Open Graph для соцсетей
```html
<meta property="og:title" content="Сильнейшая черная магия | Гадалка Фатима">
<meta property="og:description" content="Профессиональные магические услуги. Гадание, привороты, снятие порчи.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://yourusername.github.io/sitefatima_new/">
<meta property="og:image" content="images/og-image.jpg">
<meta property="og:locale" content="ru_RU">
```

#### Шаг 1.4: Twitter Card
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Сильнейшая черная магия | Гадалка Фатима">
<meta name="twitter:description" content="Профессиональные магические услуги.">
<meta name="twitter:image" content="images/og-image.jpg">
```

#### Шаг 1.5: Favicon
```html
<link rel="icon" type="image/x-icon" href="images/favicon.ico">
<link rel="apple-touch-icon" href="images/apple-touch-icon.png">
```

**✅ Результат этапа:** Пустая страница, но в исходном коде все мета-теги на месте. Можно проверить через View Source.

---

### ЭТАП 2: Главная страница — Герой-секция (Hero Section)
**Цель:** Создать впечатляющий первый экран с заголовком и местом для фото

#### Шаг 2.1: HTML структура героя
```html
<section class="hero">
    <div class="hero-content">
        <h1 class="hero-title">Сильнейшая черная магия</h1>
        <p class="hero-subtitle">Имя Фатима</p>
    </div>
    <div class="hero-image-placeholder">
        <!-- Рамка для будущего фото -->
    </div>
</section>
```

#### Шаг 2.2: CSS стили для героя
```css
.hero {
    min-height: 100vh;
    background: linear-gradient(135deg, #1a0a2e 0%, #16213e 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
}

.hero-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.5rem, 8vw, 5rem);
    color: #ffd700;
    text-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
    text-align: center;
}

.hero-subtitle {
    font-family: 'Inter', sans-serif;
    font-size: clamp(1.5rem, 4vw, 3rem);
    color: #e0e0e0;
    margin-top: 1rem;
}
```

#### Шаг 2.3: Рамка-плейсхолдер для фото
```css
.hero-image-placeholder {
    width: 300px;
    height: 400px;
    border: 3px dashed #ffd700;
    border-radius: 20px;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 215, 0, 0.1);
}

.hero-image-placeholder::after {
    content: "📷 Фото Фатимы";
    color: #ffd700;
    font-family: 'Inter', sans-serif;
}
```

#### Шаг 2.4: Фоновое изображение (будет заменено)
```css
.hero {
    background-image: url('../images/hero-bg.jpg');
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
}
```

**✅ Результат этапа:** Видна заголовочная секция с золотым заголовком, подзаголовком "Имя Фатима" и пунктирной рамкой для фото.

---

### ЭТАП 3: WhatsApp кнопки
**Цель:** Добавить кнопку WhatsApp на главную и плавающую кнопку в углу

#### Шаг 3.1: Кнопка в главной секции
```html
<a href="https://wa.me/999999999999999" class="whatsapp-btn hero-whatsapp" target="_blank">
    <span class="whatsapp-icon">📱</span>
    <span>Написать в WhatsApp</span>
</a>
```

#### Шаг 3.2: Плавающая кнопка (фиксированная)
```html
<a href="https://wa.me/999999999999999" class="whatsapp-float" target="_blank" aria-label="Связаться в WhatsApp">
    <svg><!-- WhatsApp icon --></svg>
</a>
```

#### Шаг 3.3: CSS для кнопок
```css
.whatsapp-btn {
    background: #25D366;
    color: white;
    padding: 1rem 2rem;
    border-radius: 50px;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: transform 0.3s, box-shadow 0.3s;
}

.whatsapp-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(37, 211, 102, 0.4);
}

.whatsapp-float {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background: #25D366;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
    z-index: 1000;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}
```

#### Шаг 3.4: Адаптив для мобильных
```css
@media (max-width: 768px) {
    .whatsapp-float {
        bottom: 15px;
        right: 15px;
        width: 55px;
        height: 55px;
    }
    
    .hero-whatsapp {
        padding: 0.8rem 1.5rem;
        font-size: 0.9rem;
    }
}
```

**✅ Результат этапа:** Кнопка WhatsApp на главной и плавающая иконка справа-снизу с анимацией пульсации.

---

### ЭТАП 4: Страница услуг
**Цель:** Создать страницу/секцию с перечнем услуг Фатимы

#### Шаг 4.1: HTML структура
```html
<section class="services" id="services">
    <h2 class="section-title">Мои услуги</h2>
    <div class="services-grid">
        <article class="service-card">
            <div class="service-icon">🔮</div>
            <h3>Гадание на Таро</h3>
            <p>Расклады на любовь, деньги, будущее. Точные ответы на ваши вопросы.</p>
            <span class="service-price">от 5000 ₽</span>
        </article>
        <!-- Повторить для других услуг -->
    </div>
</section>
```

#### Шаг 4.2: Список услуг (из siteanna)
1. Гадание на Таро
2. Привороты
3. Отвороты
4. Снятие порчи и сглаза
5. Открытие денежного канала
6. Обряды на любовь
7. Чистка энергетики
8. Гадание на будущее

#### Шаг 4.3: CSS для карточек
```css
.services {
    padding: 5rem 2rem;
    background: #0f0f1a;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 3rem auto 0;
}

.service-card {
    background: linear-gradient(145deg, #1a1a2e, #16213e);
    border: 1px solid rgba(255, 215, 0, 0.2);
    border-radius: 15px;
    padding: 2rem;
    text-align: center;
    transition: transform 0.3s, border-color 0.3s;
}

.service-card:hover {
    transform: translateY(-10px);
    border-color: #ffd700;
}

.service-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}
```

**✅ Результат этапа:** Сетка карточек с услугами, иконками, описанием и ценами.

---

### ЭТАП 5: Страница сертификатов
**Цель:** Создать галерею для сертификатов с плейсхолдерами

#### Шаг 5.1: HTML структура
```html
<section class="certificates" id="certificates">
    <h2 class="section-title">Мои сертификаты</h2>
    <div class="certificates-grid">
        <div class="certificate-item">
            <div class="certificate-placeholder">
                <span>Сертификат 1</span>
            </div>
            <img src="images/certificate-1.jpg" alt="Сертификат Фатимы" class="certificate-img" loading="lazy">
        </div>
        <!-- Повторить для других -->
    </div>
</section>
```

#### Шаг 5.2: CSS для галереи
```css
.certificates {
    padding: 5rem 2rem;
    background: #1a0a2e;
}

.certificates-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1000px;
    margin: 3rem auto 0;
}

.certificate-placeholder {
    width: 100%;
    aspect-ratio: 4/3;
    background: #2a2a3e;
    border: 2px dashed #ffd700;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffd700;
    font-family: 'Inter', sans-serif;
}

.certificate-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    display: none; /* Скрыто пока нет фото */
}
```

**✅ Результат этапа:** Галерея с рамками для сертификатов. После добавления фото в папку images — заменить display.

---

### ЭТАП 6: Отзывы клиентов
**Цель:** Добавить секцию с текстовыми отзывами

#### Шаг 6.1: HTML структура
```html
<section class="reviews" id="reviews">
    <h2 class="section-title">Отзывы клиентов</h2>
    <div class="reviews-grid">
        <article class="review-card">
            <div class="review-stars">⭐⭐⭐⭐⭐</div>
            <p class="review-text">"Фатима помогла мне вернуть любимого! Уже 3 года вместе, спасибо огромное!"</p>
            <p class="review-author">— Елена, Москва</p>
        </article>
        <!-- Повторить для других отзывов -->
    </div>
</section>
```

#### Шаг 6.2: Примеры отзывов
1. **Елена, Москва** — Приворот на любовь
2. **Ольга, Санкт-Петербург** — Снятие порчи
3. **Наталья, Киев** — Гадание на будущее
4. **Марина, Минск** — Открытие денежного канала
5. **Светлана, Алматы** — Чистка энергетики

#### Шаг 6.3: CSS для отзывов
```css
.reviews {
    padding: 5rem 2rem;
    background: #0f0f1a;
}

.reviews-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 3rem auto 0;
}

.review-card {
    background: #1a1a2e;
    border-radius: 15px;
    padding: 2rem;
    border-left: 4px solid #ffd700;
}

.review-stars {
    color: #ffd700;
    margin-bottom: 1rem;
}

.review-text {
    font-style: italic;
    color: #e0e0e0;
    margin-bottom: 1rem;
    line-height: 1.6;
}

.review-author {
    color: #ffd700;
    font-weight: 600;
    text-align: right;
}
```

**✅ Результат этапа:** Секция с красивыми карточками отзывов, звёздами и именами.

---

### ЭТАП 7: YouTube видео с автовоспроизведением при скролле
**Цель:** Видео начинает играть со звуком, когда пользователь доскроллил до него

#### Шаг 7.1: HTML структура
```html
<section class="video-section" id="video">
    <div class="video-intro">
        <h2 class="section-title">Приветствие от Фатимы</h2>
        <p class="video-text">
            Здравствуйте! Я Фатима, потомственная гадалка. 
            В этом видео я расскажу о своих услугах и о том, как я могу вам помочь...
        </p>
    </div>
    <div class="video-container">
        <div id="youtube-player" data-video-id="VIDEO_ID"></div>
    </div>
</section>
```

#### Шаг 7.2: JavaScript для воспроизведения при скролле
```javascript
// js/video-scroll.js
let player;
let hasPlayed = false;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '390',
        width: '640',
        videoId: 'VIDEO_ID',
        playerVars: {
            'autoplay': 0,
            'controls': 1,
            'rel': 0,
            'modestbranding': 1
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    const videoSection = document.querySelector('.video-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasPlayed) {
                player.playVideo();
                player.unMute();
                player.setVolume(100);
                hasPlayed = true;
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(videoSection);
}
```

#### Шаг 7.3: CSS для видео
```css
.video-section {
    padding: 5rem 2rem;
    background: linear-gradient(180deg, #1a0a2e 0%, #0f0f1a 100%);
    text-align: center;
}

.video-container {
    max-width: 800px;
    margin: 2rem auto 0;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(255, 215, 0, 0.2);
}

#youtube-player {
    width: 100%;
    aspect-ratio: 16/9;
}
```

#### Шаг 7.4: Подключение YouTube API
```html
<script src="https://www.youtube.com/iframe_api"></script>
<script src="js/video-scroll.js" defer></script>
```

**✅ Результат этапа:** При доскролле до видео оно автоматически начинает воспроизводиться со звуком.

---

### ЭТАП 8: Подвал (Footer)
**Цель:** Создать информативный подвал с контактами

#### Шаг 8.1: HTML структура
```html
<footer class="footer">
    <div class="footer-content">
        <div class="footer-section">
            <h3>Фатима</h3>
            <p>Сильнейшая черная магия</p>
        </div>
        <div class="footer-section">
            <h4>Контакты</h4>
            <p class="phone">
                <a href="tel:+999999999999999">+999 999 999 999 999</a>
            </p>
            <p class="whatsapp">
                <a href="https://wa.me/999999999999999" target="_blank">WhatsApp</a>
            </p>
        </div>
        <div class="footer-section">
            <h4>Услуги</h4>
            <ul>
                <li><a href="services.html#tarot">Гадание на Таро</a></li>
                <li><a href="services.html#privorot">Привороты</a></li>
                <li><a href="services.html#porcha">Снятие порчи</a></li>
            </ul>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2024 Фатима. Все права защищены.</p>
    </div>
</footer>
```

#### Шаг 8.2: CSS для подвала
```css
.footer {
    background: #0a0a12;
    padding: 3rem 2rem 1rem;
    border-top: 1px solid rgba(255, 215, 0, 0.2);
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto 2rem;
}

.footer-section h3,
.footer-section h4 {
    color: #ffd700;
    margin-bottom: 1rem;
    font-family: 'Cormorant Garamond', serif;
}

.footer-section a {
    color: #e0e0e0;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-section a:hover {
    color: #ffd700;
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: #888;
}
```

**✅ Результат этапа:** Подвал с контактами, номером телефона (тег для замены), ссылками на услуги.

---

### ЭТАП 9: Финальная SEO-оптимизация
**Цель:** Полная подготовка к индексации в Google

#### Шаг 9.1: Schema.org разметка
```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Гадалка Фатима",
    "description": "Сильнейшая черная магия, гадание на Таро, привороты, снятие порчи",
    "image": "https://yourusername.github.io/sitefatima_new/images/og-image.jpg",
    "telephone": "+999999999999999",
    "priceRange": "$$",
    "areaServed": ["RU", "KZ", "BY", "UA"],
    "sameAs": [
        "https://wa.me/999999999999999"
    ]
}
</script>
```

#### Шаг 9.2: robots.txt
```txt
User-agent: *
Allow: /

Sitemap: https://yourusername.github.io/sitefatima_new/sitemap.xml
```

#### Шаг 9.3: sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://yourusername.github.io/sitefatima_new/</loc>
        <lastmod>2024-01-01</lastmod>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://yourusername.github.io/sitefatima_new/services.html</loc>
        <lastmod>2024-01-01</lastmod>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://yourusername.github.io/sitefatima_new/certificates.html</loc>
        <lastmod>2024-01-01</lastmod>
        <priority>0.7</priority>
    </url>
</urlset>
```

#### Шаг 9.4: Проверка скорости
- [ ] Сжать все изображения (WebP формат)
- [ ] Минифицировать CSS и JS
- [ ] Включить lazy loading для изображений
- [ ] Проверить через Google PageSpeed Insights

**✅ Результат этапа:** Сайт полностью готов к индексации в Google и Яндекс.

---

### ЭТАП 10: Подготовка к GitHub Pages
**Цель:** Развернуть сайт на GitHub Pages

#### Шаг 10.1: .gitignore
```gitignore
.DS_Store
Thumbs.db
*.log
.vscode/
.idea/
node_modules/
```

#### Шаг 10.2: Команды для загрузки
```bash
git init
git add .
git commit -m "Initial commit: сайт Фатимы"
git branch -M main
git remote add origin https://github.com/USERNAME/sitefatima_new.git
git push -u origin main
```

#### Шаг 10.3: Настройка GitHub Pages
1. Зайти в Settings → Pages
2. Source: Deploy from branch
3. Branch: main, folder: / (root)
4. Сохранить

**✅ Результат этапа:** Сайт доступен по ссылке `https://username.github.io/sitefatima_new/`

---

## 📝 ЧЕК-ЛИСТ ПЕРЕД ЗАПУСКОМ

- [ ] Все мета-теги заполнены
- [ ] Кнопки WhatsApp работают
- [ ] Видео воспроизводится при скролле
- [ ] Все ссылки ведут на правильные страницы
- [ ] Адаптив проверен на мобильных
- [ ] Изображения оптимизированы
- [ ] Schema.org разметка добавлена
- [ ] robots.txt и sitemap.xml созданы
- [ ] Номер телефона заменён на реальный
- [ ] Фото Фатимы добавлено
- [ ] Сертификаты загружены
- [ ] YouTube видео заменено на нужное

---

## 🔄 ЗАМЕТКИ ДЛЯ ЗАМЕНЫ ДАННЫХ

| Элемент | Текущее значение | Где заменить |
|---------|------------------|--------------|
| Номер телефона | `+999999999999999` | Все файлы HTML, WhatsApp ссылки |
| Фото Фатимы | Плейсхолдер | `images/hero-photo.jpg` |
| YouTube видео ID | `VIDEO_ID` | HTML и `js/video-scroll.js` |
| Сертификаты | Плейсхолдеры | `images/certificate-*.jpg` |
| Ссылка на GitHub | `USERNAME` | sitemap.xml, canonical URL |

---

## 📞 КОНТАКТЫ ДЛЯ СВЯЗИ

**WhatsApp:** `https://wa.me/999999999999999` (заменить на реальный)  
**Телефон:** `+999999999999999` (заменить на реальный)

---

*Документ создан для поэтапной разработки сайта гадалки Фатимы*  
*Версия: 1.0 | Дата: 2024*
