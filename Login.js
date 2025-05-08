function login() {
  var user = document.getElementById('username').value;
  var pass = document.getElementById('password').value;

  // Akun Dummy
  var akunGuru = { user: "guru", pass: "guru123" };
  var akunSiswa = { user: "siswa", pass: "belajar" };

  if (user === akunGuru.user && pass === akunGuru.pass) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user", user);
    window.location.href = "guru.html";
  } 
  else if (user === akunSiswa.user && pass === akunSiswa.pass) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user", user);
    window.location.href = "index.html";
  } 
  else {
    alert("Nama pengguna atau kata sandi salah!");
  }
}
