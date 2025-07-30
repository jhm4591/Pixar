# 🎬 PIXAR - Elemental 홈페이지

엘리멘탈 테마로 디자인된 픽사 공식 홈페이지 리메이크 프로젝트입니다.

## ✨ 주요 기능

### 🎨 화려한 디자인
- **엘리멘탈 테마**: 불, 물, 흙, 공기의 4가지 원소를 테마로 한 디자인
- **그라데이션 효과**: 다채로운 색상 그라데이션과 애니메이션
- **반응형 디자인**: 모든 디바이스에서 완벽하게 작동

### 🌟 인터랙티브 요소
- **파티클 애니메이션**: 배경에 떠다니는 엘리멘탈 파티클
- **스크롤 효과**: 스크롤에 따른 요소들의 페이드인 애니메이션
- **호버 효과**: 마우스 오버 시 다양한 시각적 효과
- **버튼 리플 효과**: 클릭 시 물결 효과

### 📱 사용자 경험
- **스무스 스크롤**: 부드러운 페이지 내 이동
- **라이트박스 갤러리**: 이미지 클릭 시 확대 보기
- **비디오 플레이어**: 예고편 재생 기능
- **로딩 애니메이션**: 페이지 로드 시 엘리멘탈 테마 로더

## 🚀 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: 
  - Flexbox & Grid 레이아웃
  - CSS 애니메이션 & 트랜지션
  - 그라데이션 & 그림자 효과
- **JavaScript (ES6+)**:
  - DOM 조작
  - 이벤트 핸들링
  - Intersection Observer API
  - 동적 요소 생성

## 📁 파일 구조

```
pixar-elemental/
├── index.html          # 메인 HTML 파일
├── styles.css          # CSS 스타일시트
├── script.js           # JavaScript 기능
└── README.md           # 프로젝트 설명서
```

## 🎯 주요 섹션

### 1. 히어로 섹션
- 엘리멘탈 테마의 메인 타이틀
- 떠다니는 파티클 애니메이션
- CTA 버튼 (예고편 보기, 티켓 예매)

### 2. 영화 소개
- 4가지 원소별 세계 소개
- 카드 형태의 레이아웃
- 호버 시 확대 효과

### 3. 캐릭터 소개
- 주요 캐릭터 (엠버, 웨이드) 소개
- 캐릭터 이미지와 설명

### 4. 갤러리
- 영화 장면 이미지들
- 클릭 시 라이트박스로 확대 보기

### 5. 비디오 섹션
- 예고편 재생 플레이어
- 클릭 시 YouTube 임베드

## 🎨 색상 팔레트

- **불 (Fire)**: `#FF6B35`, `#FF4500`
- **물 (Water)**: `#4A90E2`, `#1E90FF`
- **흙 (Earth)**: `#8B4513`, `#A0522D`
- **공기 (Air)**: `#87CEEB`, `#B0E0E6`

## 🚀 실행 방법

1. 프로젝트 파일들을 다운로드
2. `index.html` 파일을 웹 브라우저에서 열기
3. 또는 로컬 서버에서 실행:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx serve .
   ```

## 📱 반응형 지원

- **데스크톱**: 1200px 이상
- **태블릿**: 768px - 1199px
- **모바일**: 767px 이하

## 🔧 커스터마이징

### 색상 변경
`styles.css` 파일에서 CSS 변수를 수정하여 색상을 변경할 수 있습니다:

```css
:root {
    --fire-color: #FF6B35;
    --water-color: #4A90E2;
    --earth-color: #8B4513;
    --air-color: #87CEEB;
}
```

### 애니메이션 속도 조절
JavaScript 파일에서 애니메이션 지속 시간을 조절할 수 있습니다:

```javascript
// 파티클 애니메이션 속도
const animationDuration = 6; // 초 단위
```

## 🎭 브라우저 지원

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 라이선스

이 프로젝트는 교육 목적으로 제작되었습니다. 픽사와 엘리멘탈은 각각의 소유권자가 있습니다.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 연락처

프로젝트에 대한 문의사항이 있으시면 언제든 연락주세요!

---

**엘리멘탈의 마법 같은 세계로 여러분을 초대합니다! 🔥💧🌍💨** 