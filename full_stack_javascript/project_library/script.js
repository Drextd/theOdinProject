function Book(title, author, numOfPages, read){
    this.title = title
    this.author = author
    this.numOfPages = numOfPages
    this.read = read
    this.info = function(){
        return title + ' by ' + author + ', ' + numOfPages + ' pages' + ', ' + read
    }
}

const testBook = new Book('testTitle', 'testAuthor', '300', 'not read yet')
console.log(testBook.info())