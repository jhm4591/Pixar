// 서브페이지 전용 JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // 갤러리 필터 기능
    initGalleryFilters();
    
    // 뉴스 필터 기능
    initNewsFilters();
    
    // 라이트박스 기능
    initLightbox();
    
    // 페이지네이션 기능
    initPagination();
    
    // 뉴스레터 구독 기능
    initNewsletter();
    
    // 갤러리 카운터 기능
    initGalleryCounter();
    
    // 다운로드 기능
    initDownloadButtons();
    
    // 캐릭터 갤러리 필터
    initCharacterGalleryFilters();
    
    // 스크롤 애니메이션
    initScrollAnimations();
});

// 갤러리 필터 기능
function initGalleryFilters() {
    const filterBtns = document.querySelectorAll('.gallery-filters-section .filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // 활성 버튼 변경
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 아이템 필터링
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.6s ease-out';
                } else {
                    item.style.display = 'none';
                }
            });
            
            // 카운터 업데이트
            updateGalleryCounter(filter);
        });
    });
}

// 뉴스 필터 기능
function initNewsFilters() {
    const filterBtns = document.querySelectorAll('.news-filters-section .filter-btn');
    const newsItems = document.querySelectorAll('.news-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // 활성 버튼 변경
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 아이템 필터링
            newsItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.6s ease-out';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// 라이트박스 기능
function initLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDescription = document.getElementById('lightboxDescription');
    const closeBtn = document.querySelector('.close-lightbox');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    let filteredItems = [];
    
    // 갤러리 아이템 클릭 이벤트
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const title = this.querySelector('h3')?.textContent || '';
            const description = this.querySelector('p')?.textContent || '';
            
            currentIndex = index;
            filteredItems = Array.from(galleryItems).filter(item => 
                item.style.display !== 'none'
            );
            
            openLightbox(img.src, title, description);
        });
    });
    
    // 라이트박스 열기
    function openLightbox(src, title, description) {
        lightboxImage.src = src;
        lightboxTitle.textContent = title;
        lightboxDescription.textContent = description;
        lightboxModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // 페이드인 애니메이션
        setTimeout(() => {
            lightboxModal.style.opacity = '1';
        }, 10);
    }
    
    // 라이트박스 닫기
    function closeLightbox() {
        lightboxModal.style.opacity = '0';
        setTimeout(() => {
            lightboxModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }
    
    // 이전/다음 버튼
    function showPrevImage() {
        currentIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
        const item = filteredItems[currentIndex];
        const img = item.querySelector('img');
        const title = item.querySelector('h3')?.textContent || '';
        const description = item.querySelector('p')?.textContent || '';
        
        lightboxImage.src = img.src;
        lightboxTitle.textContent = title;
        lightboxDescription.textContent = description;
    }
    
    function showNextImage() {
        currentIndex = (currentIndex + 1) % filteredItems.length;
        const item = filteredItems[currentIndex];
        const img = item.querySelector('img');
        const title = item.querySelector('h3')?.textContent || '';
        const description = item.querySelector('p')?.textContent || '';
        
        lightboxImage.src = img.src;
        lightboxTitle.textContent = title;
        lightboxDescription.textContent = description;
    }
    
    // 이벤트 리스너
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);
    
    lightboxModal.addEventListener('click', function(e) {
        if (e.target === lightboxModal) {
            closeLightbox();
        }
    });
    
    // 키보드 네비게이션
    document.addEventListener('keydown', function(e) {
        if (lightboxModal.style.display === 'flex') {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            }
        }
    });
}

// 페이지네이션 기능
function initPagination() {
    const pageBtns = document.querySelectorAll('.page-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentPage = 1;
    const totalPages = 10;
    
    pageBtns.forEach(btn => {
        if (btn.classList.contains('page-numbers')) return;
        
        btn.addEventListener('click', function() {
            if (this.disabled) return;
            
            if (this.classList.contains('prev-btn')) {
                if (currentPage > 1) {
                    currentPage--;
                    updatePagination();
                }
            } else if (this.classList.contains('next-btn')) {
                if (currentPage < totalPages) {
                    currentPage++;
                    updatePagination();
                }
            } else {
                currentPage = parseInt(this.textContent);
                updatePagination();
            }
        });
    });
    
    function updatePagination() {
        // 페이지 버튼 업데이트
        pageBtns.forEach(btn => {
            if (btn.classList.contains('page-numbers')) return;
            
            if (btn.classList.contains('prev-btn')) {
                btn.disabled = currentPage === 1;
            } else if (btn.classList.contains('next-btn')) {
                btn.disabled = currentPage === totalPages;
            } else if (!btn.classList.contains('prev-btn') && !btn.classList.contains('next-btn')) {
                btn.classList.toggle('active', parseInt(btn.textContent) === currentPage);
            }
        });
        
        // 페이지 로드 시뮬레이션
        simulatePageLoad();
    }
    
    function simulatePageLoad() {
        // 로딩 효과
        const newsGrid = document.querySelector('.news-grid');
        if (newsGrid) {
            newsGrid.style.opacity = '0.5';
            setTimeout(() => {
                newsGrid.style.opacity = '1';
            }, 500);
        }
    }
}

// 뉴스레터 구독 기능
function initNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            if (validateEmail(email)) {
                // 구독 성공 메시지
                showNotification('뉴스레터 구독이 완료되었습니다!', 'success');
                this.reset();
            } else {
                showNotification('올바른 이메일 주소를 입력해주세요.', 'error');
            }
        });
    }
}

// 이메일 유효성 검사
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// 알림 메시지 표시
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // 스타일 적용
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: 10px;
        color: white;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    if (type === 'success') {
        notification.style.background = '#28a745';
    } else {
        notification.style.background = '#dc3545';
    }
    
    document.body.appendChild(notification);
    
    // 애니메이션
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// 갤러리 카운터 기능
function initGalleryCounter() {
    const currentCount = document.querySelector('.current-count');
    const totalCount = document.querySelector('.total-count');
    
    if (currentCount && totalCount) {
        const totalItems = document.querySelectorAll('.gallery-item').length;
        totalCount.textContent = ` / ${totalItems}`;
        
        // 필터 변경 시 카운터 업데이트
        updateGalleryCounter('all');
    }
}

function updateGalleryCounter(filter) {
    const currentCount = document.querySelector('.current-count');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (currentCount) {
        let visibleCount = 0;
        
        galleryItems.forEach(item => {
            const category = item.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                visibleCount++;
            }
        });
        
        currentCount.textContent = visibleCount;
    }
}

// 다운로드 버튼 기능
function initDownloadButtons() {
    const downloadBtns = document.querySelectorAll('.download-btn');
    
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const text = this.textContent.trim();
            
            if (text.includes('전체')) {
                showNotification('전체 이미지 다운로드가 시작됩니다.', 'success');
            } else if (text.includes('모바일')) {
                showNotification('모바일 배경화면 다운로드가 시작됩니다.', 'success');
            } else if (text.includes('데스크톱')) {
                showNotification('데스크톱 배경화면 다운로드가 시작됩니다.', 'success');
            }
            
            // 다운로드 시뮬레이션
            simulateDownload();
        });
    });
}

function simulateDownload() {
    // 다운로드 진행률 표시
    const progress = document.createElement('div');
    progress.className = 'download-progress';
    progress.innerHTML = `
        <div class="progress-bar">
            <div class="progress-fill"></div>
        </div>
        <span class="progress-text">다운로드 중... 0%</span>
    `;
    
    progress.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: white;
        padding: 1rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        min-width: 200px;
    `;
    
    const progressBar = progress.querySelector('.progress-fill');
    const progressText = progress.querySelector('.progress-text');
    
    document.body.appendChild(progress);
    
    let percent = 0;
    const interval = setInterval(() => {
        percent += 10;
        progressBar.style.width = `${percent}%`;
        progressText.textContent = `다운로드 중... ${percent}%`;
        
        if (percent >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                progress.remove();
                showNotification('다운로드가 완료되었습니다!', 'success');
            }, 500);
        }
    }, 200);
}

// 캐릭터 갤러리 필터
function initCharacterGalleryFilters() {
    const filterBtns = document.querySelectorAll('.character-gallery .filter-btn');
    const galleryItems = document.querySelectorAll('.character-gallery-grid .gallery-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // 활성 버튼 변경
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 아이템 필터링
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.6s ease-out';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// 스크롤 애니메이션
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // 애니메이션 대상 요소들
    const animateElements = document.querySelectorAll(`
        .news-item, .gallery-item, .character-detail, 
        .sub-character-card, .info-card, .review-card
    `);
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// 추가 CSS 애니메이션
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease-out;
    }
    
    .download-progress .progress-bar {
        width: 100%;
        height: 8px;
        background: #e9ecef;
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 0.5rem;
    }
    
    .download-progress .progress-fill {
        height: 100%;
        background: linear-gradient(45deg, #FF6B35, #4A90E2);
        width: 0%;
        transition: width 0.3s ease;
    }
    
    .download-progress .progress-text {
        font-size: 0.9rem;
        color: #666;
    }
    
    .notification {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
`;
document.head.appendChild(additionalStyles);

// 페이지 로드 완료 후 추가 초기화
window.addEventListener('load', function() {
    // 모든 이미지가 로드된 후 애니메이션 시작
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
}); 