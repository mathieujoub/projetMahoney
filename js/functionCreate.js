const Positif = "Absolutely me !"
const Negatif = "Not me at all"
let affiche = document.getElementById("test");


function addQuestion(my) {

    const article = document.createElement("article");
    article.className = "question"

    const title = document.createTextNode("h2");
    title.textContent = my + ":";


    const formQuestion = document.createElement("from");
    formQuestion.className = "questionResponses";

    const repNegatif = document.createElement("label")
    repNegatif.textContent = Negatif;


    const btnRadio = document.createElement("input");
    btnRadio.setAttribute("type", "radio");


    const repPositif = document.createElement("label")
    repPositif.textContent = Positif;


    article.appendChild(title);
    formQuestion.appendChild(repNegatif);
    formQuestion.appendChild(btnRadio);
    formQuestion.appendChild(repPositif);
    article.appendChild(formQuestion);
    affiche.appendChild(article);
}