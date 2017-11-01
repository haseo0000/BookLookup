 function AmazonService(isbn){
  this.isbn = isbn

  this.lookup = (title, image) => {
    var obj = this.isbn(title, image)
    return {
          name: obj.bookname,
          cover: obj.covername,
          token: obj.isbn
          }
  }
}

////////////////////////////////////////////////////////////////////////////////


test('Booklookup', () => {
  const isbn = jest.fn()
    .mockReturnValue({
          bookname: 'PlayerUnknow',
          isbn: '9876543210',
          covername: 'Nantapob007@hotmail.com'
    })


  var auth = new AmazonService(isbn)
  var title = 'PlayerUnknow'
  var image = 'pubg.png'
  var Booklookupinfo = auth.lookup(title,image)


  expect(isbn).toHaveBeenCalled()
  expect(isbn).toHaveBeenCalledWith(title, image)
  expect(Booklookupinfo.name).toBe('PlayerUnknow')
  expect(Booklookupinfo.cover).toBe('Nantapob007@hotmail.com')
  expect(Booklookupinfo).toHaveProperty('token')
  expect(Booklookupinfo.token).toHaveLength(10)
  expect(Booklookupinfo.token).toBe('9876543210')
})
