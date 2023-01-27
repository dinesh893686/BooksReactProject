import { createContext, useState } from "react";
import axios from "axios";
const BooksContext=createContext();



function Provider({children})
{
    const [books,setBooks]= useState([]);

    const fetchBooks=async()=>{
             const response = await axios.get("http://127.0.0.1:3001/books");
              console.log(response.data);
           setBooks(response.data);   
 
    }
    const createBook=async(title)=>{
        const response = await axios.post('http://localhost:3001/books',{
           title
          })
 
    console.log(response.data); 
 
     const updatedBooks= [...books,response.data]
        setBooks(updatedBooks);
    }
 
    const deleteBookById=async(id)=>{
        const response = await axios.delete(`http://127.0.0.1:3001/books/${id}`);
         
       const updatedBooks=books.filter((book)=>{
          return book.id!==id
       })
       setBooks(updatedBooks);
    }
  
     const editBookById=async(newTitle,id)=>{
            const response=await  axios.put(`http://127.0.0.1:3001/books/${id}`,{
                title:newTitle
             })
 
       const updatedBooks= books.map((book)=>{
            if(book.id==id)
            {
                return {...book, title:response.data.title}
            }
            return book;
       })
       setBooks(updatedBooks);
     } 
const valueToShare={
   books,
   fetchBooks,
   createBook,
   editBookById,
   deleteBookById  
}
return (
<BooksContext.Provider value={valueToShare}>
{children}
</BooksContext.Provider>
);


}

 export {Provider};
 export default BooksContext;