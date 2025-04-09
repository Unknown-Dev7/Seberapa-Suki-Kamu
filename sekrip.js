function cekSuki() {
  const name = document.getElementById("nameInput").value.trim();
  const resultDiv = document.getElementById("result");
  const resultImg = document.getElementById("resultImage");

  if (name === "") {
    resultDiv.innerHTML = "Masmukkan nama dulu tomlol~";
    resultImg.style.display = "none";
    return;
  }

  const percentage = Math.floor(Math.random() * 101); // 0-100
  let message = "";
  let imagePath = "";

  if (percentage <= 10) {
    message = `${name} kamu ${percentage}%, Yey kamu bukan suki!`;
    imagePath = "1.jpg";
  } else if (percentage <= 30) {
    message = `${name} kamu ${percentage}%, Hmm... semdikit sih~`;
    imagePath = "2.jpg";
  } else if (percentage <= 50) {
    message = `${name} kamu ${percentage}%, cumriga~`;
    imagePath = "3.jpg";
  } else if (percentage <= 70) {
    message = `${name} kamu ${percentage}%, terdteksi suki lite`;
    imagePath = "4.jpg";
  } else if (percentage <= 90) {
    message = `${name} kamu ${percentage}%, suki!`;
    imagePath = "5.jpg";
  } else {
    message = `${name} kamu ${percentage}%, Alamak ada panglima Suki`;
    imagePath = "6.jpg";
  }

  resultDiv.innerHTML = message;
  resultImg.src = imagePath;
  resultImg.style.display = "block";
}