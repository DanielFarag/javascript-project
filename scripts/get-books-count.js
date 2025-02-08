import { validator } from "./validator.js";
import { displayForm } from "./display-forms.js"

export function defineBooksCountForm(){
    const app = document.getElementById("app")

    const getBooksCount = `<div id="books-count">
        <p>How many books ? </p>
        <input type="text" placeholder="Books number" id="books_count"/>
        <button>Create</button><br/>
        <span class="errors"></span>
    </div>`;

    app.innerHTML = getBooksCount

    app.querySelector("#books-count button").addEventListener("click", () => {
        const input = app.querySelector("#books_count")

        const _validator = validator()

        if(_validator.count(input)){
            displayForm(input.value);
        }
    })


}