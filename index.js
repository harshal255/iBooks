console.log("Harshal");


//Constructor

// Book = (name, author, type) => {
//     this.name = name;
//     this.author = author;
//     this.type = type;


// }
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

//Display Constructor

class Display {

}

//Add methods to display prototype
Display.prototype.add = function (book) {
    // console.log('adding to ui');
    let tablebody = document.getElementById("tablebody");
    let uistring = ` <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                     </tr>`;
    tablebody.innerHTML += uistring;
}


Display.prototype.clear = function () {
    let form = document.getElementById("form");
    form.reset();


}

Display.prototype.validate = function (book) {
    if (book.name.lengh < 2 || book.author.lengh < 2) {
        return false;

    }
    else {
        return true;
    }


}
Display.prototype.show = function (type) {
    let msg = document.getElementById("msg");

    setTimeout(function () {
        msg.innerHTML = ` <div class="alert alert-success alert-dismissible fade show" role="alert">
        Thank you for submitting form
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
       </div>`
       
    }, 1000);
   
}




//Add submit event listener to form
//Use asynchronise function


let form = document.getElementById("form");
form.addEventListener("submit", function Formsubmit(e) {
    console.log("You Have submit form");

    let name = document.getElementById("bookname").value;
    let author = document.getElementById("author").value;
    let type;

    let Technical = document.getElementById("Technical");
    let Programming = document.getElementById("Programming");
    let Historical = document.getElementById("Historical");


    if (Technical.checked) {
        type = Technical.value;
    }
    else if (Programming.checked) {
        type = Programming.value;

    }
    else if (Historical.checked) {
        type = Historical.value;
    }


    let book = new Book(name, author, type);
    // console.log(book);


    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show("success");


    }
    else {
        display.show("error")

    }


    e.preventDefault();         // don't Automatically reload while submit page



});
