import { validator } from "./validator.js";
import { displayAllBooks } from "./list-books.js"

export function displayForm(count){

    let books = []

    if(books.length == count){
      displayAllBooks(books);
      return;
    }

    const app = document.getElementById("app")

    const html = `
    <div id="book-form">
      <table border="2">
        <thead>
          <tr>
            <td colspan="2"><h2>Book <span id="book-index">${books.length + 1}</span> Details </h2></td>
          </tr>
        </thead>
        <tr>
          <td><span>Book Name</span></td>
          <td>
            <input type="text" id="book_name" placeholder="Book Name"/><br/>
            <span class="errors"></span>
            </td>
        </tr>
        <tr>
          <td><span>Publish Date</span></td>
          <td>
            <input type="date" id="book_date" placeholder="Publish Date"/><br/>
            <span class="errors"></span>
            </td>
        </tr>
        <tr>
          <td><span>Price</span></td>
          <td>
            <input type="text" id="book_price" placeholder="Price"/><br/>
            <span class="errors"></span>
            </td>
        </tr>
        <tr>
          <td><span>Author Name</span></td>
          <td>
            <input type="text" id="book_auth_name" placeholder="Author Name"/><br/>
            <span class="errors"></span>
            </td>
        </tr>
        <tr>
          <td><span>Author Email</span></td>
          <td>
            <input type="text" id="book_auth_email" placeholder="Author Email"/><br/>
            <span class="errors"></span>
          </td>
        </tr>

        <tr style="padding:20px">
          <td colspan="2">
            <button id="add">Save</button>
            <button id="reset">Reset</button>
          </td>
        </tr>
      </table>
    </div>`;
    app.innerHTML = html;

    app.querySelector("#book-form #add").addEventListener("click", (e) => {
      e.preventDefault();
      const bookName = app.querySelector("#book_name");
      const publishDate = app.querySelector("#book_date");
      const price = app.querySelector("#book_price");
      const authorName = app.querySelector("#book_auth_name");
      const authorEmail = app.querySelector("#book_auth_email");


      const _validator = validator()
      if(
          _validator.name(bookName) &
          _validator.date(publishDate) & 
          _validator.price(price) &
          _validator.author_name(authorName) & 
          _validator.author_email(authorEmail)
      ){
        books.push({
            name: bookName.value,
            date: publishDate.value,
            price: price.value,
            author_name:authorName.value,
            author_email: authorEmail.value
        })

          bookName.value = publishDate.value = price.value = authorName.value = authorEmail.value = ""
      }
              
      app.querySelector("#book-index").innerHTML = books.length+1
      if(books.length == count){
        displayAllBooks(books);
      }
    })



    app.querySelector("#book-form #reset").addEventListener("click", (e) => {
      e.preventDefault();
      let ids = [
        "book_name",
        "book_date",
        "book_price",
        "book_auth_name",
        "book_auth_email"
      ]

      for (let index = 0; index < ids.length; index++) {
        const element = app.querySelector(`#${ids[index]}`);
        let error = element.parentNode.querySelector(".errors")
        element.classList.remove("invalid")
        error.innerHTML = ""
        element.value = ""
      }
    })
}



