// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    
    // 네비게이션 스크롤 효과
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // 스크롤 시 네비게이션 배경 변경
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.9)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // 모바일 햄버거 메뉴
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // 스무스 스크롤
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // 엘리멘탈 파티클 애니메이션
    createElementalParticles();
    
    // 스크롤 리빌 효과
    initScrollReveal();
    
    // 버튼 클릭 이벤트
    initButtonEvents();
    
    // 갤러리 라이트박스 효과
    initGalleryLightbox();
    
    // 비디오 플레이어 이벤트
    initVideoPlayer();
    
    // 마우스 움직임 효과
    initMouseEffects();
});

// 엘리멘탈 파티클 생성
function createElementalParticles() {
    const particlesContainer = document.querySelector('.elemental-particles');
    const particleTypes = ['fire', 'water', 'earth', 'air'];
    
    // 기존 파티클 위치 설정
    const particles = particlesContainer.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        const type = particleTypes[index];
        setParticlePosition(particle, type);
    });
    
    // 추가 파티클 생성
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        const type = particleTypes[Math.floor(Math.random() * particleTypes.length)];
        particle.className = `particle ${type}`;
        setParticlePosition(particle, type);
        particlesContainer.appendChild(particle);
    }
}

// 파티클 위치 설정
function setParticlePosition(particle, type) {
    const colors = {
        fire: '#FF6B35',
        water: '#4A90E2',
        earth: '#8B4513',
        air: '#87CEEB'
    };
    
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const size = Math.random() * 20 + 10;
    const delay = Math.random() * 6;
    
    particle.style.left = `${left}%`;
    particle.style.top = `${top}%`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.background = `radial-gradient(circle, ${colors[type]}, ${colors[type]}80)`;
    particle.style.boxShadow = `0 0 ${size}px ${colors[type]}`;
}

// 스크롤 리빌 효과
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);
    
    // 관찰할 요소들
    const elements = document.querySelectorAll('.movie-card, .character-card, .gallery-item, .section-title');
    elements.forEach(el => {
        el.classList.add('scroll-reveal');
        observer.observe(el);
    });
}

// 버튼 이벤트 초기화
function initButtonEvents() {
    const primaryBtn = document.querySelector('.btn-primary');
    const secondaryBtn = document.querySelector('.btn-secondary');
    
    if (primaryBtn) {
        primaryBtn.addEventListener('click', function() {
            // 예고편 보기 버튼 클릭 시
            const videoSection = document.querySelector('.video-section');
            if (videoSection) {
                videoSection.scrollIntoView({ behavior: 'smooth' });
            }
            
            // 버튼 클릭 효과
            createButtonEffect(this);
        });
    }
    
    if (secondaryBtn) {
        secondaryBtn.addEventListener('click', function() {
            // 티켓 예매 버튼 클릭 시
            alert('티켓 예매 페이지로 이동합니다!');
            
            // 버튼 클릭 효과
            createButtonEffect(this);
        });
    }
}

// 버튼 클릭 효과
function createButtonEffect(button) {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// 갤러리 라이트박스
function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const src = img.src;
            const alt = img.alt;
            
            createLightbox(src, alt);
        });
    });
}

// 라이트박스 생성
function createLightbox(src, alt) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="close-lightbox">&times;</span>
            <img src="${src}" alt="${alt}">
        </div>
    `;
    
    // 라이트박스 스타일
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const content = lightbox.querySelector('.lightbox-content');
    content.style.cssText = `
        position: relative;
        max-width: 90%;
        max-height: 90%;
    `;
    
    const img = lightbox.querySelector('img');
    img.style.cssText = `
        width: 100%;
        height: auto;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    `;
    
    const closeBtn = lightbox.querySelector('.close-lightbox');
    closeBtn.style.cssText = `
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        background: none;
        border: none;
    `;
    
    document.body.appendChild(lightbox);
    
    // 애니메이션
    setTimeout(() => {
        lightbox.style.opacity = '1';
    }, 10);
    
    // 닫기 이벤트
    closeBtn.addEventListener('click', () => {
        lightbox.style.opacity = '0';
        setTimeout(() => {
            lightbox.remove();
        }, 300);
    });
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeBtn.click();
        }
    });
}

// 비디오 플레이어
function initVideoPlayer() {
    const videoPlaceholder = document.querySelector('.video-placeholder');
    
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function() {
            // 실제 비디오 플레이어로 교체
            this.innerHTML = `
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `;
        });
    }
}

// 마우스 움직임 효과
function initMouseEffects() {
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.addEventListener('mousemove', function(e) {
            const { clientX, clientY } = e;
            const { width, height } = this.getBoundingClientRect();
            
            const x = (clientX / width - 0.5) * 20;
            const y = (clientY / height - 0.5) * 20;
            
            const particles = this.querySelectorAll('.particle');
            particles.forEach((particle, index) => {
                const speed = (index + 1) * 0.1;
                particle.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
        });
    }
}

// 페이지 로드 완료 후 추가 효과
window.addEventListener('load', function() {
    // 로딩 애니메이션
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="elemental-loader">
                <div class="fire-loader"></div>
                <div class="water-loader"></div>
                <div class="earth-loader"></div>
                <div class="air-loader"></div>
            </div>
            <p>엘리멘탈의 세계로...</p>
        </div>
    `;
    
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #1a1a2e, #16213e);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10001;
        transition: opacity 0.5s ease;
    `;
    
    const loaderContent = loader.querySelector('.loader-content');
    loaderContent.style.cssText = `
        text-align: center;
        color: white;
    `;
    
    const elementalLoader = loader.querySelector('.elemental-loader');
    elementalLoader.style.cssText = `
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
        justify-content: center;
    `;
    
    const loaders = ['fire-loader', 'water-loader', 'earth-loader', 'air-loader'];
    const colors = ['#FF6B35', '#4A90E2', '#8B4513', '#87CEEB'];
    
    loaders.forEach((className, index) => {
        const loaderElement = loader.querySelector(`.${className}`);
        loaderElement.style.cssText = `
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: ${colors[index]};
            animation: pulse 1.5s ease-in-out infinite;
            animation-delay: ${index * 0.2}s;
        `;
    });
    
    document.body.appendChild(loader);
    
    // 2초 후 로더 제거
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 2000);
});

// CSS 애니메이션 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
            opacity: 0.7;
        }
        50% {
            transform: scale(1.2);
            opacity: 1;
        }
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .btn-primary, .btn-secondary {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style); 