import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js";
import { renderHTML, setInner } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js";

renderHTML('data', "data.html", renderDataDariJson);

function renderDataDariJson() {
    getJSON(
        "https://t.if.co.id/json/rifa.json",
        responseFunction
    );
}

function responseFunction(data) {
    console.log('Response Data', data);

    const isiData = `
            <img src="${data.Foto}" alt="Profile Picture" class="profile-pic">
            <h1>${data.Name}</h1>
            <p><strong></strong> ${data.Ug}</p>
            <p><strong></strong> ${data.Skill}</p>
            <p><strong></strong> ${data.Rate}</p>
    `;

    setInner("konten", isiData);
}