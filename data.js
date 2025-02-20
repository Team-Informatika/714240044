import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.1/api.js";
import { renderHTML } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.1/element.js";
import { getHash, onHashChange } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.1/url.js"

onHashChange(ada);
function ada() {
    console.log(getHash());
    const hashpath = getHash();
    if (hashpath === "data") {
        console.log("ini sudah muncul datanya");
        renderHTML("container", "data.html", renderDataDariJson);
    }
}

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

    const socialContainer = document.createElement("div");
    socialContainer.classList.add("social-icons");
    socialContainer.id = "so";

    isi.data.socialIcons.icons.forEach((icon) => {
        const linkElement = document.createElement("a");
        linkElement.href = icon.url;
        linkElement.target = "_blank";
        linkElement.rel = "noopener noreferrer";

        const iconElement = document.createElement("i");
        iconElement.id = icon.id;
        iconElement.className = icon.class;
        iconElement.title = icon.type;

        linkElement.appendChild(iconElement);
        socialContainer.appendChild(linkElement);
    });

    

    // Tambahkan elemen ke dalam card-item
    dataContainer.appendChild(avatar);
    dataContainer.appendChild(name);
    dataContainer.appendChild(ug);
    dataContainer.appendChild(skill);
    dataContainer.appendChild(rate);
    dataContainer.appendChild(socialContainer);
}

const gradients = [
    'linear-gradient(to right,rgba(2,0,36,1) 0%, rgba(85,85,181,1) 35%, rgba(0,212,255,1) 100%)',
    'linear-gradient(to right, rgba(2,0,36,1) 0%, rgba(57,57,224,1) 35%, rgba(0,212,255,1) 100%)',
    'linear-gradient(to right, rgba(2,0,36,1) 0%, rgba(12,82,177,1) 35%, rgba(0,212,255,1) 100%)',
    'linear-gradient(to right, rgba(2,0,36,1) 0%, rgba(12,121,177,1) 35%, rgba(0,212,255,1) 100%)',
    'linear-gradient(to right, rgba(2,0,36,1) 0%, rgba(12,177,128,1) 35%, rgba(0,212,255,1) 100%)'
];

let currentGradientIndex = 0;

setInterval(function() {
    document.body.style.background = gradients[currentGradientIndex];
    document.body.style.backgroundSize = "400% 400%";
    document.body.style.animation = "gradientShift 10s infinite linear";
    currentGradientIndex = (currentGradientIndex + 1) % gradients.length;
}, 5000);