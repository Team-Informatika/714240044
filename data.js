import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.1/api.js";
import { renderHTML } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.1/element.js";

function renderDataDariJson() {
    renderHTML("container", "data.html", () => {
        getJSON("https://t.if.co.id/json/rifa.json", responseFunction, errorFunction);
    });
}

function errorFunction(error) {
    console.error("Error fetching data:", error);
    const dataContainer = document.getElementById("data");
    dataContainer.innerHTML = "<p style='color: red;'>Gagal mengambil data.</p>";
}

function responseFunction(isi) {
    console.log(isi);

    const dataContainer = document.getElementById("data");
    if (!dataContainer) {
        console.error("Element #data not found");
        return;
    }
    dataContainer.innerHTML = ""; // Hapus isi lama sebelum menambahkan data baru

    const cardItem = document.createElement("div");
    cardItem.classList.add("card-item");

    const avatar = document.createElement("img");
    avatar.src = isi.Foto;
    avatar.alt = "Avatar";
    avatar.classList.add("profile-pic");
    avatar.onerror = function() {
        avatar.src = "https://via.placeholder.com/100"; // Placeholder jika gagal
    };

    const name = document.createElement("h3");
    name.id = "konten";
    name.textContent = isi.Name;

    const ug = document.createElement("h3");
    ug.id = "ug";
    ug.textContent = isi.Ug;

    const skill = document.createElement("h3");
    skill.id = "skill";
    skill.textContent = isi.Skill;

    const rate = document.createElement("h3");
    rate.id = "rate";
    rate.textContent = isi.Rate;

    const socialContainer = document.createElement("div");
    socialContainer.classList.add("social-icons");
    
    isi.social_icons.forEach(social => {
        const link = document.createElement("a");
        link.href = social.url;
        link.target = "_blank";
        link.innerHTML = `<i class='${social.icon}'></i>`;
        link.style.margin = "5px";
        socialContainer.appendChild(link);
    });

    // Tambahkan elemen ke dalam card-item
    cardItem.appendChild(avatar);
    cardItem.appendChild(name);
    cardItem.appendChild(ug);
    cardItem.appendChild(skill);
    cardItem.appendChild(rate);
    cardItem.appendChild(socialContainer);
    
    // Tambahkan card-item ke dalam card utama
    dataContainer.appendChild(cardItem);
}

// Panggil fungsi untuk merender data
renderDataDariJson();
