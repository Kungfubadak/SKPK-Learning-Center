// Fungsi Logout
function logout() {
  if (confirm("Yakin ingin logout?")) {
    localStorage.clear();
    window.location.href = "login.html";
  }
}

// Fungsi untuk menampilkan PR
function tampilkanPR() {
  let daftar = JSON.parse(localStorage.getItem("dataPR")) || [];
  let listEl = document.getElementById("daftarPR");
  listEl.innerHTML = ""; // Bersihkan dulu

  daftar.forEach((pr, index) => {
    let li = document.createElement("li");
    li.innerHTML = `<strong>${pr.judul}</strong><br>${pr.deskripsi}`;

    // Kalau role = guru, bisa hapus PR
    if (localStorage.getItem("role") === "guru") {
      let btnHapus = document.createElement("button");
      btnHapus.textContent = "Hapus";
      btnHapus.onclick = () => hapusPR(index);
      li.appendChild(document.createElement("br"));
      li.appendChild(btnHapus);
    }

    listEl.appendChild(li);
  });
}

// Fungsi untuk tambah PR (khusus Guru)
function tambahPR() {
  let judul = document.getElementById("judulPR").value;
  let deskripsi = document.getElementById("deskripsiPR").value;

  if (judul === "" || deskripsi === "") {
    alert("Isi semua kolom!");
    return;
  }

  let daftar = JSON.parse(localStorage.getItem("dataPR")) || [];
  daftar.push({ judul: judul, deskripsi: deskripsi });
  localStorage.setItem("dataPR", JSON.stringify(daftar));

  alert("PR berhasil ditambahkan!");
  document.getElementById("judulPR").value = "";
  document.getElementById("deskripsiPR").value = "";
  tampilkanPR();
}

// Fungsi untuk hapus PR (khusus Guru)
function hapusPR(index) {
  let daftar = JSON.parse(localStorage.getItem("dataPR")) || [];
  daftar.splice(index, 1);
  localStorage.setItem("dataPR", JSON.stringify(daftar));
  tampilkanPR();
}

// Jalankan saat halaman dibuka
window.onload = function() {
  let role = localStorage.getItem("role");

  // Kalau role guru, tampilkan form tambah PR
  if (role === "guru") {
    document.getElementById("formPR").style.display = "block";
  }

  // Tampilkan daftar PR
  tampilkanPR();
}
