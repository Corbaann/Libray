
const myLibrary = [
    {id: crypto.randomUUID(),author :"Peter thiel",title:"zero to one " ,pages: 198,interest:10 },
    {id: crypto.randomUUID(),author :"saichiro honda",title:"Honda " ,pages: 200,interest:7 },
    {id: crypto.randomUUID(),author :"Barack obama",title:"Yes we can" ,pages: 300,interest:5 }
];


function displayBooks() {
  const container = document.getElementById("book-container");
  const tableHeader = `
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Pages</th>
          <th scope="col">Rate interest</th>
        </tr>
      </thead>
      <tbody>`;
  const tableRows = myLibrary.map((book, index) => `
    <tr>
      <th scope="row">${index + 1}</th>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${book.interest}</td>
    </tr>
  `).join('');
  const tableFooter = `</tbody></table>`;
  container.innerHTML = tableHeader + tableRows + tableFooter;
}
function addBook(author,title,pages, interest){
    const newbook = {
        id: crypto.randomUUID(),
        title:title,
        author:author,
        pages:pages,
        interest: interest
    }
    myLibrary.push(newbook);
    displayBooks();
}
const bookForm = document.getElementById("bookForm");
bookForm.addEventListener('submit',(e)=>{
   e.preventDefault(); // Stops the page from refreshing
    const title=document.getElementById("book-title").value;
     const author=document.getElementById("Book-author").value;
     const pages=document.getElementById("book-pages").value;
     const interest=document.getElementById("level-interest").value;
    addBook(author,title,pages,interest);
    bookForm.reset();
})


