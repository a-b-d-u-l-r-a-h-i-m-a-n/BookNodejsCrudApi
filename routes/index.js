const express = require('express');
const router = express.Router();
const books = require('../modals/books');

router.get('/', async (req, res) => {
    try{
        const bookDetails = await books.find({});
        res.send(bookDetails);
        return;
    }catch(e){
        console.log(e);
        res.send({status:505,message:"error occured while getting the data"})
    }
});

router.post("/upload", async (req, res) => {
    const data = req.body;
    try{
        if(!data.name){
            res.send({
                status:400,
                message:"Name is required"
            });
            return;
        }
        if(!data.author){
            res.send({
                status:400,
                message:"author is required"
            });
            return;
        }
        if(!data.summary){
            res.send({
                status:400,
                message:"summary is required"
            });
            return;
        }
        const oldBook=await books.find({name:data.name});
        console.log(oldBook);
        if(oldBook.length!==0){
            res.send({
                status:400,
                message:"book name is already exist"
            });
            return;
        }
         await books.create(data);
         res.send({ status: 200, message: "Data sent successfully" });
    }catch(e){
        console.log(e);
        res.send(
            { status: 505, message: "Error occured while Uploading the Book" }
        );
    }
});

router.get("/view/:id", async (req, res) => {
    const bookId = req.params.id;
    try {
        if(!bookId){
            res.send(
                { status: 404, message: "Error occured while getting the Book." }
            );
            return;
        }
        const oldBook=await books.find({_id:bookId});
        if(oldBook.length===0){
            res.send(
                { status: 505, message: "Book is not here which you are looking for." }
            );
            return;
        }
        res.send(oldBook[0]);
    } catch (error) {
        res.status(500).send({ error: 'Failed to update the book.' });
    }
});

router.put("/update/:id", async (req, res) => {
    const bookid = req.params.id;
    const newData = req.body;
    try {
        if (!newData.name || !newData.author || !newData.summary) {
            res.status(400).send({
                status: 400,
                message: "Name, author, and summary are required"
            });
            return;
        }
        const updatedBook = await books.findByIdAndUpdate( bookid , newData, { new: true });
        if (updatedBook) {
            res.send({updatedBook,message:"book updated sucessfully"});
        } else {
            res.status(404).send({
                status: 404,
                message: "Book not found"
            });
        }
    } catch (error) {
        res.status(500).send({ error: 'Failed to update the book.' });
    }
});


router.delete("/delete/:id", async (req, res) => {
    const bookid = req.params.id;
    try {
        if (!bookid) {
            return res.status(400).send({ error: 'Book id is required.' });
        }
        console.log(bookid);
        const bookToDelete = await books.findOne({ _id: bookid });
        console.log(bookToDelete);
        if (bookToDelete===null) {
            return res.status(404).send({ message: 'Book not found.' });
        }
        await books.findOneAndDelete({ _id: bookid });
        return res.send({ message: 'Book deleted successfully' });
    } catch (error) {
        return res.status(500).send({ error: 'Failed to delete the book.' });
    }
});
router.use((req, res) => {
    res.status(404).send({ message: 'Route not found' });
  });


module.exports = router;
