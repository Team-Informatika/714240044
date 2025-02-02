import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js";
import { renderHTML, setInner } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js";

renderHTML('data', "data.html", renderDataDariJson);

function renderDataDariJson() {
    getJSON(
        "https://t.if.co.id/json/rifa.json",
        "aja",
        "apa",
        responseFunction
    );
}

function responseFunction(data) {
    console.log('Response Data', data.data);

    const data = data.data;
    const isiData = `
        <h1>${data.Name}</h1>
        <p>${data.Ug}</p>
        <p>${data.Skill}</p>
        <p>${data.Rate}</p>
    `;

    setInner("konten", isiData);

}
