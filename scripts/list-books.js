import { validator } from "./validator.js";

export function displayAllBooks(_books){
  const app = document.getElementById("app")

  const books = _books.map((book, index) => `
      <tr id="book-${index}">
          <td>
              <p>${book.name}</p>
              <input type="text" id="book_name" placeholder="Book Name" class="field-hidden"  value="${book.name}"/><br/>
              <span class="errors"></span>
          </td>
          <td>
              <p>${book.date}</p>
              <input type="date" id="book_date" placeholder="Publish Date" class="field-hidden"  value="${book.date}"/><br/>
              <span class="errors"></span>
          </td>
          <td>
              <p>${book.price}</p>
              <input type="text" id="book_price" placeholder="Price" class="field-hidden"  value="${book.price}"/><br/>
              <span class="errors"></span>
          </td>
          <td>
              <p>${book.author_name}</p>

              <input type="text" id="author_name" placeholder="Author Name" class="field-hidden"  value="${book.author_name}"/><br/>
              <span class="errors"></span>
          </td>
          <td>
              <p>${book.author_email}</p>

              <input type="text" id="author_email" placeholder="Author Email" class="field-hidden"  value="${book.author_email}"/><br/>
              <span class="errors"></span>
          </td>
          <td>
              <button class="edit action-save btn-hidden">Save</button>
              <button class="edit action-edit">Edit</button>
              <button class="delete action-delete">Delete</button>
              <button class="cancel action-cancel btn-hidden">Cancel</button>
          </td>
      </tr>
  `)



  const html = `
  <div id="books-list">
      <table border="2">
        <thead>
          <tr>
            <td colspan="6"><h2>Books Details </h2> </td>
          </tr>
          <tr>
            <td>Name</td>
            <td>Publish Date</td>
            <td>Price</td>
            <td>Author Name</td>
            <td>Author Email</td>
            <td>Actions</td>
          </tr>
        </thead>

        <tbody>${ books.join("") } </tbody>
    </table>
  </div>`;

  app.innerHTML = html;

  

  app.querySelectorAll(".action-save").forEach(btn=>{
    btn.addEventListener("click", (e) => {

      const bookTr = e.target.closest("tr")
      const bookIndex = bookTr.id.split("-")[1]


      const bookName = bookTr.querySelector("#book_name")
      const publishDate = bookTr.querySelector("#book_date")
      const price = bookTr.querySelector("#book_price")
      const authorName = bookTr.querySelector("#author_name")
      const authorEmail = bookTr.querySelector("#author_email")


      const _validator = validator()
    
      if(
          _validator.name(bookName) &
          _validator.date(publishDate) & 
          _validator.price(price) &
          _validator.author_name(authorName) & 
          _validator.author_email(authorEmail)
      ){
          const book = _books[bookIndex]

          book.name = bookName.value 
          book.date = publishDate.value 
          book.price = price.value 
          book.author_name = authorName.value 
          book.author_email = authorEmail.value 

          _books[bookIndex] = book
          displayAllBooks(_books)
      }
              
    })
  })


  app.querySelectorAll(".action-delete").forEach(btn=>{
    btn.addEventListener("click", (e) => {
      
      const bookIndex = e.target.closest("tr").id.split("-")[1]
      
      _books.splice(bookIndex, 1)
      if(_books.length != 0){
        displayAllBooks(_books)
      }else{
        window.location.reload()
      }
    })
  })

  app.querySelectorAll(".action-cancel").forEach(btn=>{
    btn.addEventListener("click", (e) => {
      displayAllBooks(_books)
    });
  })



  app.querySelectorAll(".action-edit").forEach(btn=>{
    btn.addEventListener("click", (e) => {
      e.target.classList.add("btn-hidden")
      e.target.closest("td").querySelector(".action-delete").classList.add("btn-hidden")


      // Show  [ Save, Cancel]
      e.target.closest("td").querySelector(".action-save").classList.remove("btn-hidden")
      e.target.closest("td").querySelector(".action-cancel").classList.remove("btn-hidden")



      e.target.closest("tr").querySelectorAll(".field-hidden").forEach((element) => {
        element.classList.remove("field-hidden");
      });
      
      e.target.closest("tr").querySelectorAll("p").forEach((element) => {
        element.classList.add("field-hidden");
      });
    });
  })
}