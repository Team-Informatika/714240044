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
    if (dataContainer) {
        dataContainer.innerHTML = "<p style='color: red;'>Gagal mengambil data.</p>";
    }
}

function responseFunction(isi) {
    console.log("Data JSON yang diterima:", isi); // Debugging

    const data = isi.data; // Pastikan mengakses `data` dalam JSON
    if (!data) {
        console.error("Data tidak ditemukan dalam JSON");
        return;
    }

    const dataContainer = document.getElementById("data");
    if (!dataContainer) {
        console.error("Element #data not found");
        return;
    }
    dataContainer.innerHTML = ""; // Hapus isi lama sebelum menambahkan data baru

    const cardItem = document.createElement("div");
    cardItem.classList.add("card-item");

    const avatar = document.createElement("img");
    avatar.src = data.Foto || "https://via.placeholder.com/100";
    avatar.alt = "Avatar";
    avatar.classList.add("profile-pic");
    avatar.onerror = function () {
        avatar.src = "https://via.placeholder.com/100";
    };

    const name = document.createElement("h3");
    name.textContent = data.Name || "Nama Tidak Tersedia";

    const ug = document.createElement("p");
    ug.textContent = data.Ug || "Username Tidak Tersedia";

    const skill = document.createElement("p");
    skill.textContent = data.Skill || "Skill Tidak Tersedia";

    const rate = document.createElement("p");
    rate.textContent = data.Rate || "Rate Tidak Tersedia";

    const socialContainer = document.createElement("div");
    socialContainer.classList.add("social-icons");

    if (Array.isArray(data.social_icons)) {
        data.social_icons.forEach(social => {
            const link = document.createElement("a");
            link.href = social.url;
            link.target = "_blank";
            link.innerHTML = `<i class='${social.icon}'></i>`;
            link.style.margin = "5px";
            socialContainer.appendChild(link);
        });
    } else {
        socialContainer.innerHTML = "<p>Tidak ada media sosial.</p>";
    }

    cardItem.appendChild(avatar);
    cardItem.appendChild(name);
    cardItem.appendChild(ug);
    cardItem.appendChild(skill);
    cardItem.appendChild(rate);
    cardItem.appendChild(socialContainer);

    dataContainer.appendChild(cardItem);
}

renderDataDariJson();
