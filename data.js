import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.1/api.js";
import { renderHTML } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.1/element.js";

renderHTML("container", "data.html", renderDataDariJson);

function renderDataDariJson() {
    getJSON("https://t.if.co.id/json/rifa.json", responseFunction);
}

function responseFunction(isi) {
    console.log(isi);

    const dataContainer = document.getElementById("data");
    dataContainer.innerHTML = ""; // Hapus isi lama sebelum menambahkan data baru

    const avatar = document.createElement("img");
    avatar.src = isi.data.Foto;
    avatar.alt = "Avatar";
    avatar.id = "avatar";

    const name = document.createElement("h3");
    name.id = "konten";
    name.textContent = isi.data.Name;

    const ug = document.createElement("p");
    ug.id = "ug";
    ug.textContent = isi.data.Ug;

    const skill = document.createElement("p");
    skill.id = "skill";
    skill.textContent = isi.data.Skill;

    const rate = document.createElement("p");
    rate.id = "rate";
    rate.textContent = isi.data.Rate;

    // Tambahkan elemen ke dalam card-item
    dataContainer.appendChild(avatar);
    dataContainer.appendChild(name);
    dataContainer.appendChild(ug);
    dataContainer.appendChild(skill);
    dataContainer.appendChild(rate);
}
