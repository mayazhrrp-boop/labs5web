
function helloWorld() {
    document.getElementById("pesan").textContent = "Hello World";
    document.getElementById("hasilHello").textContent = "Hello World";
    console.log("Hello World");
}

function sapaPengguna() {
    const nama = prompt("Masukkan nama Anda:");
    if (nama && nama.trim() !== "") {
        alert("Halo, " + nama + "!");
        document.getElementById("pesan").textContent =
            "Selamat datang, " + nama;
    } else {
        alert("Nama belum diisi.");
    }
}

function operasiDasar() {
    const a = Number(document.getElementById("angkaA").value);
    const b = Number(document.getElementById("angkaB").value);

    document.getElementById("hasilOperasi").textContent =
        "Penjumlahan: " + (a + b) +
        " | Pengurangan: " + (a - b) +
        " | Perkalian: " + (a * b) +
        " | Pembagian: " + (b !== 0 ? a / b : "Tidak bisa dibagi nol") +
        " | Modulus: " + (b !== 0 ? a % b : "Tidak bisa dibagi nol");
}

function cekNilai() {
    const input = document.getElementById("nilai").value;
    const nilai = Number(input);
    const hasil = document.getElementById("hasilNilai");

    if (input === "" || nilai < 0 || nilai > 100) {
        hasil.textContent = "Masukkan nilai 0 sampai 100.";
    } else if (nilai >= 60) {
        hasil.textContent = "Lulus";
    } else {
        hasil.textContent = "Belum lulus";
    }
}

function cekPilihan() {
    const pilihan = document.getElementById("pilihan").value;
    let hasil = "";

    switch (pilihan) {
        case "1": hasil = "Bilangan satu"; break;
        case "2": hasil = "Bilangan dua"; break;
        case "3": hasil = "Bilangan tiga"; break;
        case "4": hasil = "Bilangan empat"; break;
        case "5": hasil = "Bilangan lima"; break;
        default: hasil = "Pilihan tidak tersedia";
    }

    document.getElementById("hasilPilihan").textContent = hasil;
}

function cekBilangan() {
    const input = document.getElementById("bilangan").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasilBilangan");

    if (input === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat.";
    } else if (angka % 2 === 0) {
        hasil.textContent = "Bilangan genap";
    } else {
        hasil.textContent = "Bilangan ganjil";
    }
}

function ubahWarnaLatar(warna) {
    document.body.style.backgroundColor = warna;
}

const daftarMenu = document.querySelectorAll(".menu");

daftarMenu.forEach(function(menu) {
    menu.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;

    daftarMenu.forEach(function(menu) {
        if (menu.checked) {
            total += Number(menu.value);
        }
    });

    document.getElementById("total").textContent =
        "Rp" + total.toLocaleString("id-ID");
}

function hitungNilaiAkhirForm() {
    const tugasInput = document.getElementById("tugas").value;
    const utsInput = document.getElementById("uts").value;
    const uasInput = document.getElementById("uas").value;
    const hasil = document.getElementById("hasilAkhir");

    const tugas = Number(tugasInput);
    const uts = Number(utsInput);
    const uas = Number(uasInput);

    if (
        tugasInput === "" || utsInput === "" || uasInput === "" ||
        tugas < 0 || tugas > 100 ||
        uts < 0 || uts > 100 ||
        uas < 0 || uas > 100
    ) {
        hasil.textContent = "Isi semua nilai dengan angka 0 sampai 100.";
        return;
    }

    const akhir = tugas * 0.30 + uts * 0.30 + uas * 0.40;
    let predikat;

    if (akhir >= 85) predikat = "A";
    else if (akhir >= 75) predikat = "B";
    else if (akhir >= 60) predikat = "C";
    else if (akhir >= 50) predikat = "D";
    else predikat = "E";

    hasil.textContent =
        "Nilai akhir: " + akhir.toFixed(2) +
        " | Predikat: " + predikat +
        " | Status: " + (akhir >= 60 ? "Lulus" : "Belum lulus");
}

function tabelPerkalian7() {
    let hasil = "";

    for (let i = 1; i <= 10; i++) {
        hasil += "7 x " + i + " = " + (7 * i) + "\n";
    }

    document.getElementById("hasilPerkalian").textContent = hasil;
}

function cekGenap(angka) {
    return angka % 2 === 0;
}

function cekGenapEksperimen() {
    const input = document.getElementById("angkaEksperimen").value;
    const angka = Number(input);

    if (input === "" || !Number.isInteger(angka)) {
        document.getElementById("hasilEksperimen").textContent =
            "Masukkan bilangan bulat.";
    } else {
        document.getElementById("hasilEksperimen").textContent =
            cekGenap(angka)
                ? "true - Bilangan genap"
                : "false - Bilangan ganjil";
    }
}

function toggleTeks() {
    const teks = document.getElementById("teksToggle");
    teks.hidden = !teks.hidden;
}
