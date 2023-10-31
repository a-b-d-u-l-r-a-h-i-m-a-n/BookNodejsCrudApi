===>>>API END POINTS:
        (1)add a new book  :                     POST:http://localhost:3000/upload
        (2)view a list of books:                 GET:http://localhost:3000
        (3)view details of a specific book  :    GET:http://localhost:3000/view/6540957736775d8a12fd8c03        (note 6540957736775d8a12fd8c03 it is a mongodb book id stored in database)
        (4)Update a book's details   :           PUT:http://localhost:3000/update/6540957736775d8a12fd8c03       (note 6540957736775d8a12fd8c03 it is a mongodb book id stored in database)
        (5)Delete a book     :                   DELETE:http://localhost:3000/delete/6540957736775d8a12fd8c03       (note 6540957736775d8a12fd8c03 it is a mongodb book id stored in database)


===>>>Instructions to set up and run the application locally:
        1)copy your mongodb string in your local server and paste the string  in  modals/index.js at place of url
        2)npm install  or npm install  body-parser express mongoose nodemon
        3)npm start

===>>>Any decisions or assumptions you made during the development process
       1) the id shOuld pass to the urls must me mongodb strorage id only
       2) you have to make sure the mogodb is install in your local computer or have a set of mongodb atlas 
       3) the data have to be uploaded while updating should pass all the three fields whichare name,author,summary
