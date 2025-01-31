import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.1/api.js";

// Fungsi untuk mengambil dan menampilkan data JSON
function renderDataDariJson() {
    getJSON("https://t.if.co.id/json/rifa.json", responseFunction);
}

// Fungsi untuk menangani respons data JSON
function responseFunction(data) {
    console.log("Data yang diterima:", data); // Debugging

    // Menangkap elemen kontainer tempat data akan ditampilkan
    const container = document.getElementById("data");
    container.innerHTML = ""; // Kosongkan kontainer sebelum menambahkan data baru

    // Ambil data dari JSON
    const { Name, Foto, Ug, Skill, Rate } = data;

    // Buat elemen kartu untuk menampilkan data
    const card = document.createElement("div");
    card.classList.add("card-item");

    // Tambahkan foto
    const img = document.createElement("img");
    img.src = Foto;
    img.alt = Name;
    img.classList.add("profile-pic");

    // Tambahkan nama
    const name = document.createElement("h1");
    name.textContent = Name;

    // Tambahkan Username/UG
    const ug = document.createElement("p");
    ug.textContent = `UG: ${Ug}`;

    // Tambahkan Skill
    const skill = document.createElement("p");
    skill.textContent = `Skill: ${Skill}`;

    // Tambahkan Rate
    const rate = document.createElement("p");
    rate.textContent = Rate;

    // Masukkan elemen-elemen ke dalam kartu
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(ug);
    card.appendChild(skill);
    card.appendChild(rate);

    // Tambahkan kartu ke dalam container utama
    container.appendChild(card);
}

// Jalankan fungsi untuk mengambil dan menampilkan data
renderDataDariJson();
