function AmesonService(mockbook){
    this.SearchService = mockbook
    this.Search = (isbn) =>{
        var isbnId = this.SearchService(isbn)
        return{
            bookname:isbnId.title,
            cover: isbnId.image,
            ISPN:isbnId.ISPN
        }
    }

}


test('booklookup',()=>{
    const Mockbook = jest.fn().mockReturnValue({
        title:'978-1117891-234',
        image: 'javaScript Good parts',
        ISPN:'/cover/wy2ji.jpg'
    })
    var app = new AmesonService(Mockbook)
    var isbn = '978-1117891-234';
    var result = app.Search(isbn)

    
    expect(result).toHaveProperty('bookname')
    expect(result).toHaveProperty('cover')
    expect(result).toHaveProperty('ISPN')
    expect(result.bookname).toBe('978-1117891-234')
    expect(result.cover).toBe('javaScript Good parts')
    expect(result.ISPN).toBe('/cover/wy2ji.jpg')
    


})
