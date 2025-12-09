document.addEventListener('DOMContentLoaded', function () {
  const startButton = document.getElementById('startBtn');
  const intro = document.getElementById('intro');
  const mainContent = document.getElementById('mainContent');
  const lineElement = document.getElementById('line');
  const finalBlock = document.getElementById('final');
  const msgYes = document.getElementById('msgYes');
  const bgMusic = document.getElementById('bgMusic');
  const btnNo = document.getElementById('btnNo');

  const lines = [
    "Hehe. Hôm nay 20/12—ngày mà 19 năm trước một thiên thần nhỏ xuất hiện trên đời này 😇✨",
    "Chúc bé Bảo Như sinh nhật thật vui vẻ nha!!! 🎉🎂.",
    "Thêm 1 tuổi mới rồi, chúc bé luôn thật vui vẻ, hạnh phúc và sống đúng với phiên bản tuyệt nhất của chính mình nhaaa 🌟💖",
    "Phảiii luôn là đóa hoa tươi tắn, xinh đẹp, toả sáng và tràn đầy sức sống 🌸💐✨",
    "Chúc người đẹp lúc nào cũng giữ nụ cười rạng rỡ trên môi nha😄💛",
    "Nhớ chăm sóc yêu thương bản thân nha và mọi ngày luôn thật ý nghĩa trọn vẹn và hạnh phúc nha. Quý bé Bảo Như lắm ✨"
  ];

  let currentLine = 0;

  startButton.addEventListener('click', () => {
    intro.classList.remove('active');
    mainContent.classList.add('active');
    playBackgroundMusic();
    showLine(lines[currentLine]);
  });

  function playBackgroundMusic() {
    bgMusic.play().catch((error) => {
      console.error('Lỗi phát nhạc:', error);
    });
  }

  function showLine(text) {
    lineElement.innerHTML = '';
    let charIndex = 0;
    const p = document.createElement('p');
    p.style.margin = '12px 0';
    lineElement.appendChild(p);

    const typingInterval = setInterval(() => {
      if (charIndex < text.length) {
        p.innerHTML += text.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => fadeOutCurrentLine(() => {
          currentLine++;
          if (currentLine < lines.length) {
            showLine(lines[currentLine]);
          } else {
            lineElement.style.display = 'none';
            finalBlock.classList.add('active');
          }
        }), 850);
      }
    }, 70);
  }

  function fadeOutCurrentLine(callback) {
    lineElement.classList.add('fade-out');
    setTimeout(() => {
      lineElement.classList.remove('fade-out');
      lineElement.innerHTML = '';
      callback();
    }, 1000);
  }

  document.getElementById('btnYes').addEventListener('click', () => {
    finalBlock.classList.remove('active');
    msgYes.classList.add('active');
    bgMusic.pause();
    bgMusic.currentTime = 0;
  });

  btnNo.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - btnNo.offsetWidth;
    const maxY = window.innerHeight - btnNo.offsetHeight;
    btnNo.style.position = 'fixed';
    btnNo.style.left = `${Math.random() * maxX}px`;
    btnNo.style.top = `${Math.random() * maxY}px`;
  });

  btnNo.addEventListener('click', () => {
    alert('Thôi mà, bấm lại nút "Đồng ý" nhaaa~');
  });
});
