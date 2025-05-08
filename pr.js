window.onload = function() {
    checkLogin(); // Cek login saat halaman dimuat
    tampilkanPR(); // Tampilkan daftar PR
  }
  
  // Fungsi Cek Login
  function checkLogin() {
    let role = localStorage.getItem("role");
    
    if (!localStorage.getItem("isLoggedIn")) {
      window.location.href = "login.html"; // Kalau belum login, arahkan ke login
    } else if (role === "admin") {
      document.getElementById("admin-form").style.display = "block"; // Admin bisa tambah PR
    }
  }
  
  // Fungsi untuk tampilkan PR yang ada
  function tampilkanPR() {
    // Cek role, tampilkan PR yang berbeda
    let role = localStorage.getItem("role");
    let prList = document.getElementById("pr-list");
  
    // Daftar PR dummy
    let pr = [
      { mataPelajaran: "Matematika", deskripsi: "Halaman 23-24 no. 1-10 (Deadline: Jumat)" },
      { mataPelajaran: "IPA", deskripsi: "Buat laporan percobaan air (Deadline: Kamis)" },
      { mataPelajaran: "Bahasa Indonesia", deskripsi: "Menulis ringkasan cerita rakyat (Deadline: Rabu)" }
    ];
  
    pr.forEach(item => {
      let li = document.createElement("li");
      li.textContent = `${item.mataPelajaran}: ${item.deskripsi}`;
      prList.appendChild(li);
    });
  
    if (role !== "admin") {
      // Kalau bukan admin, sembunyikan form tambah PR
      document.getElementById("admin-form").style.display = "none";
    }
  }
  
  // Fungsi tambah PR (hanya untuk admin)
  function tambahPR() {
    let newPR = document.getElementById("new-pr").value;
    if (newPR) {
      let li = document.createElement("li");
      li.textContent = newPR;
      document.getElementById("pr-list").appendChild(li);
      alert("PR berhasil ditambahkan!");
  
      // Reset input
      document.getElementById("new-pr").value = "";
    } else {
      alert("Masukkan PR yang valid!");
    }
  }
  