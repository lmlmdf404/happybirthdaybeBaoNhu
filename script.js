let password = "";
const correctPassword = "201206";
const passwordInput = document.getElementById("password");

function addNumber(number) {
  if (password.length < 6) {
    password += number;
    passwordInput.value = password;
    passwordInput.classList.add("active");
  }
}

function clearPassword() {
  password = "";
  passwordInput.value = password;
  passwordInput.classList.remove("active");
}

function checkPassword() {
  if (password === correctPassword) {
    alert("Mật khẩu đúng! Chẩn bị đón bất ngờ nè!!");
    window.location.href = "chu/index.html";
  } else {
    passwordInput.classList.add("shake");
    setTimeout(() => {
      passwordInput.classList.remove("shake");
      alert("Mật khẩu sai! Vui lòng thử lại.");
      clearPassword();
    }, 500);
  }
} 
window.addEventListener("load", () => {
  createHeartEffects();
});