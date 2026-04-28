// ===== ОСНОВНОЙ JAVASCRIPT =====

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== ИНТЕРАКТИВНЫЕ ДЕРЕВЬЯ =====
    const trees = document.querySelectorAll('.tree');
    const treeMessages = [
        'Древнее дерево шепчет...',
        'Заброшенное дерево молчит...',
        'Проклятое дерево тревожится...',
        'Мистическое дерево наблюдает...'
    ];
    
    trees.forEach((tree, index) => {
        tree.addEventListener('click', function() {
            // Эффект при клике
            this.style.animation = 'treeShake 0.5s ease';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
            
            // Показываем сообщение
            console.log(treeMessages[index]);
            
            // Создаём частицы
            createParticles(this);
        });
        
        tree.addEventListener('mouseenter', function() {
            // Звук шелеста (опционально)
            this.style.filter = 'drop-shadow(0 0 30px rgba(139, 0, 0, 0.8))';
        });
        
        tree.addEventListener('mouseleave', function() {
            this.style.filter = 'drop-shadow(0 0 20px rgba(0, 0, 0, 0.8))';
        });
    });
    
    // ===== ФУНКЦИЯ СОЗДАНИЯ ЧАСТИЦ =====
    function createParticles(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.left = centerX + 'px';
            particle.style.top = centerY + 'px';
            particle.style.width = '3px';
            particle.style.height = '3px';
            particle.style.background = '#1a0a0a';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            particle.style.opacity = '0.6';
            document.body.appendChild(particle);
            
            const angle = (Math.PI * 2 * i) / 20;
            const velocity = 50 + Math.random() * 50;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;
            
            particle.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
            ], {
                duration: 1000,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        }
    }
    
    // ===== ПЛАВНЫЙ СКРОЛЛ ПО ЯКОРЯМ =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // ===== АНИМАЦИЯ ПРИ СКРОЛЛЕ (Intersection Observer) =====
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Для видео-контейнера
                if (entry.target.classList.contains('video-container')) {
                    entry.target.classList.add('visible');
                }
                
                // Перестаем наблюдать после появления
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Наблюдаем за элементами для анимации
    document.querySelectorAll('.service-card, .certificate-item, .review-card').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // ===== ВИДЕО КОНТЕЙНЕР =====
    const videoContainer = document.querySelector('.video-container');
    if (videoContainer) {
        observer.observe(videoContainer);
    }
    
    // ===== ЗАМЕНА ПЛЕЙСХОЛДЕРОВ НА РЕАЛЬНЫЕ ФОТО =====
    // Функция для проверки наличия изображений
    function checkImages() {
        const images = document.querySelectorAll('.certificate-img');
        images.forEach(img => {
            img.addEventListener('load', function() {
                if (this.src && this.src !== window.location.href) {
                    this.style.display = 'block';
                    const placeholder = this.previousElementSibling;
                    if (placeholder && placeholder.classList.contains('certificate-placeholder')) {
                        placeholder.style.display = 'none';
                    }
                }
            });
            
            img.addEventListener('error', function() {
                this.style.display = 'none';
            });
        });
    }
    
    checkImages();
    
    // ===== ТЕКУЩИЙ ГОД В ПОДВАЛЕ =====
    const yearElements = document.querySelectorAll('.footer-bottom p');
    yearElements.forEach(el => {
        if (el.textContent.includes('©')) {
            el.textContent = el.textContent.replace('2024', new Date().getFullYear());
        }
    });
    
    // ===== МЕНЮ БУРГЕР (если понадобится для мобильных) =====
    // Можно добавить позже при необходимости
    
    // ===== ОТКРЫТИЕ WHATSAPP В НОВОМ ОКНЕ =====
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
    
    // ===== ДОБАВЛЕНИЕ КЛАССА ПРИ СКРОЛЛЕ ДЛЯ HEADER =====
    let lastScroll = 0;
    const header = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // ===== ЛЕНИВАЯ ЗАГРУЗКА ИЗОБРАЖЕНИЙ =====
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.src;
        });
    } else {
        // Полифилл для ленивой загрузки
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lozad.js/1.16.0/lozad.min.js';
        document.body.appendChild(script);
    }
    
});

// ===== ФУНКЦИЯ ДЛЯ ИЗМЕНЕНИЯ НОМЕРА ТЕЛЕФОНА =====
function updatePhoneNumber(newNumber) {
    // Обновляем номер в подвале
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.href = `tel:${newNumber}`;
    });
    
    // Обновляем отображаемый номер
    const phoneDisplays = document.querySelectorAll('.phone a');
    phoneDisplays.forEach(display => {
        display.textContent = formatPhoneNumber(newNumber);
    });
    
    // Обновляем WhatsApp ссылки
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        const currentHref = link.href;
        link.href = currentHref.replace(/wa\.me\/\d+/, `wa.me/${newNumber.replace(/\D/g, '')}`);
    });
    
    console.log(`Номер телефона обновлён: ${newNumber}`);
}

// ===== ФОРМАТИРОВАНИЕ НОМЕРА ТЕЛЕФОНА =====
function formatPhoneNumber(number) {
    const cleaned = number.replace(/\D/g, '');
    return `+${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 9)} ${cleaned.slice(9, 12)} ${cleaned.slice(12, 15)}`;
}

// ===== ЭКСПОРТ ФУНКЦИЙ (для использования в консоли) =====
window.updatePhoneNumber = updatePhoneNumber;
window.formatPhoneNumber = formatPhoneNumber;
