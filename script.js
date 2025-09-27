// 별 생성 (세로 화면 상단 70%까지만 배치, 우측 잘림 방지)
const stars = document.querySelector('.stars');
const COUNT = 90;
for (let i = 0; i < COUNT; i++) {
  const s = document.createElement('i');
  // vw/vh 기준 위치 지정 (화면 내부에만)
  const x = Math.random() * 100; // 0~100vw
  const y = Math.random() * 70;  // 0~70vh (상단 집중)
  const size = Math.random() * 2.2 + 0.8;
  s.style.left = x + 'vw';
  s.style.top  = y + 'vh';
  s.style.width = s.style.height = size + 'px';
  s.style.animationDelay = (Math.random() * 3) + 's';
  stars.appendChild(s);
}

// iOS 주소창 변화 등으로 100vh가 출렁이는 경우를 보완
// (필수는 아니지만 모바일 안정성 향상)
const setVHUnit = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};
setVHUnit();
window.addEventListener('resize', setVHUnit);
