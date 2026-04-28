// ===== YOUTUBE VIDEO SCROLL AUTOPLAY =====

let player;
let hasPlayed = false;
let videoId = 'VIDEO_ID'; // Заменить на реальный ID видео

// ===== ЗАГРУЗКА YOUTUBE IFRAME API =====
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// ===== ИНИЦИАЛИЗАЦИЯ ПЛЕЕРА =====
function onYouTubeIframeAPIReady() {
    // Получаем ID видео из data-атрибута
    const playerElement = document.getElementById('youtube-player');
    if (playerElement) {
        videoId = playerElement.getAttribute('data-video-id') || videoId;
        
        player = new YT.Player('youtube-player', {
            height: '100%',
            width: '100%',
            videoId: videoId,
            playerVars: {
                'autoplay': 0,          // Не автовоспроизводить сразу
                'controls': 1,          // Показать контролы
                'rel': 0,               // Не показывать похожие видео
                'modestbranding': 1,    // Минимальный брендинг YouTube
                'playsinline': 1,       // Не открывать на полный экран на мобильных
                'enablejsapi': 1,       // Включить JavaScript API
                'origin': window.location.origin
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }
}

// ===== ПЛЕЕР ГОТОВ =====
function onPlayerReady(event) {
    const videoSection = document.querySelector('.video-section');
    
    if (!videoSection) {
        console.log('Секция видео не найдена');
        return;
    }
    
    // ===== OBSERVER ДЛЯ ОТСЛЕЖИВАНИЯ ПОЯВЛЕНИЯ ВИДЕО В VIEWPORT =====
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasPlayed && player && player.playVideo) {
                // Небольшая задержка перед воспроизведением
                setTimeout(() => {
                    try {
                        player.playVideo();
                        player.unMute();
                        player.setVolume(100);
                        hasPlayed = true;
                    } catch (error) {
                        // Показываем пользователю кнопку для включения
                        showPlayButton();
                    }
                }, 500);
            }
        });
    }, {
        threshold: 0.5,  // Видео должно быть видно на 50%
        rootMargin: '0px'
    });
    
    observer.observe(videoSection);
}

// ===== ИЗМЕНЕНИЕ СОСТОЯНИЯ ПЛЕЕРА =====
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        console.log('Видео воспроизводится ▶️');
    } else if (event.data === YT.PlayerState.PAUSED) {
        console.log('Видео на паузе ⏸️');
    } else if (event.data === YT.PlayerState.ENDED) {
        console.log('Видео закончилось ⏹️');
    }
}

// ===== ПОКАЗАТЬ КНОПКУ PLAY (если автовоспроизведение заблокировано) =====
function showPlayButton() {
    const videoContainer = document.querySelector('.video-container');
    if (videoContainer) {
        const playButton = document.createElement('button');
        playButton.className = 'video-play-button';
        playButton.innerHTML = `
            <svg viewBox="0 0 24 24" fill="currentColor" width="60" height="60">
                <path d="M8 5v14l11-7z"/>
            </svg>
            <span>Включить видео</span>
        `;
        playButton.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(20, 20, 25, 0.95);
            border: 1px solid #333;
            border-radius: 50%;
            width: 100px;
            height: 100px;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #555;
            font-family: inherit;
            font-weight: 600;
            font-size: 11px;
            z-index: 10;
            transition: all 0.3s ease;
            letter-spacing: 1px;
            text-transform: uppercase;
        `;
        
        playButton.addEventListener('mouseenter', () => {
            playButton.style.transform = 'translate(-50%, -50%) scale(1.1)';
        });
        
        playButton.addEventListener('mouseleave', () => {
            playButton.style.transform = 'translate(-50%, -50%)';
        });
        
        playButton.addEventListener('click', () => {
            if (player && player.playVideo) {
                player.playVideo();
                player.unMute();
                player.setVolume(100);
                playButton.remove();
            }
        });
        
        videoContainer.style.position = 'relative';
        videoContainer.appendChild(playButton);
    }
}

// ===== ФУНКЦИЯ ДЛЯ ИЗМЕНЕНИЯ VIDEO ID =====
function updateVideoId(newId) {
    videoId = newId;
    const playerElement = document.getElementById('youtube-player');
    if (playerElement) {
        playerElement.setAttribute('data-video-id', newId);
    }
    
    // Если плеер уже создан, загружаем новое видео
    if (player && player.loadVideoById) {
        player.loadVideoById(newId);
        hasPlayed = false;  // Сбрасываем флаг, чтобы можно было запустить снова
    }
    
    console.log(`Video ID обновлён: ${newId}`);
}

// ===== ЭКСПОРТ ФУНКЦИЙ =====
window.updateVideoId = updateVideoId;

// ===== ДОБАВЛЕНИЕ СТИЛЕЙ ДЛЯ КНОПКИ PLAY =====
const styles = document.createElement('style');
styles.textContent = `
    .video-play-button svg {
        width: 40px;
        height: 40px;
        margin-bottom: 5px;
    }
    
    @media (max-width: 768px) {
        .video-play-button {
            width: 80px !important;
            height: 80px !important;
        }
        
        .video-play-button svg {
            width: 30px !important;
            height: 30px !important;
        }
        
        .video-play-button span {
            font-size: 10px !important;
        }
    }
`;
document.head.appendChild(styles);


