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
    console.log(data);
    let apaja;
    apaja = data.data;
    const container = document.getElementById("data");
    apaja.forEach((item) => {
        const data = document.createElement("div");
        layananItem.classList.add("card");
        const Name = document.createElement("h1");
        Name.textContent = item.Name;

        const Ug = document.createElement("p");
        Ug.textContent = item.Ug;

        data.appendChild(Name);
        data.appendChild(Ug);
        container.appendChild(data)
    });

}
