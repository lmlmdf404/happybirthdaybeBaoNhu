document.addEventListener("DOMContentLoaded", function () {
  const cake = document.querySelector(".cake");
  const candleCountDisplay = document.getElementById("candleCount");
  let candles = [];
  let audio = new Audio('hbd.mp3');

  function updateCandleCount() {
    const activeCandles = candles.filter(
      (candle) => !candle.classList.contains("out")
    ).length;
    candleCountDisplay.textContent = activeCandles;
    
    // Thêm kiểm tra: Nếu tất cả nến đã tắt, bật confetti và nhạc (Cách thổi tắt không còn hoạt động)
    if (activeCandles === 0 && candles.length > 0) {
        setTimeout(function() {
          triggerConfetti();
          endlessConfetti(); // Start the endless confetti
        }, 200);
        audio.play();
    }
  }

  function addCandle(left, top) {
    const candle = document.createElement("div");
    candle.className = "candle";
    candle.style.left = left + "px";
    candle.style.top = top + "px";

    const flame = document.createElement("div");
    flame.className = "flame";
    candle.appendChild(flame);
    
    // Thêm event lắng nghe sự kiện click để tắt nến bằng tay
    candle.addEventListener("click", function() {
        if (!candle.classList.contains("out")) {
            candle.classList.add("out");
            updateCandleCount();
        }
    });

    cake.appendChild(candle);
    candles.push(candle);
    updateCandleCount();
  }

  cake.addEventListener("click", function (event) {
    const rect = cake.getBoundingClientRect();
    const left = event.clientX - rect.left;
    const top = event.clientY - rect.top;
    addCandle(left, top);
  });
  
  // Xóa toàn bộ khối code liên quan đến microphone
  // (Phần code này đã được loại bỏ)
});

function triggerConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

function endlessConfetti() {
  setInterval(function() {
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0 }
    });
  }, 1000);
}