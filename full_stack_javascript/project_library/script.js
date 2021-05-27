//let myLibrary = []

function Book(title, author, numOfPages, read){
    this.title = title
    this.author = author
    this.numOfPages = numOfPages
    this.read = read
    this.info = function(){
        return title + ' by ' + author + ', ' + numOfPages + ' pages' + ', ' + read
    }
}

function addBookToLibrary(){



}

