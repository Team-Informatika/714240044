import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.1/api.js";
import { renderHTML, setInner } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.1/element.js";

renderHTML('data', "data.html", renderDataDariJson);

function renderDataDariJson() {
    getJSON(
        "https://t.if.co.id/json/rifa.json",
        responseFunction
    );
}

function responseFunction(isi) {
    console.log(isi);


    setInner("konten", isi.data.Name);
    setInner("ug", isi.data.Ug);
    setInner("skill", isi.data.Skill);
    setInner("rate", isi.data.Rate);
}