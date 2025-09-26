// 별 생성 (세로 화면 상단 70%까지만 배치)
const stars = document.querySelector('.stars');
const COUNT = 90; // 약간 더 촘촘히
for (let i = 0; i < COUNT; i++) {
  const s = document.createElement('i');
  const x = Math.random() * 100;
  const y = Math.random() * 70;       // 상단 집중
  const size = Math.random() * 2.2 + 0.8;
  s.style.left = x + 'vw';
  s.style.top  = y + 'vh';
  s.style.width = s.style.height = size + 'px';
  s.style.animationDelay = (Math.random() * 3) + 's';
  stars.appendChild(s);
}
