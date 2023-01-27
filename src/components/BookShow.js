import React from 'react'
import BookEdit from './BookEdit';
import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';
export default function BookShow({book}) {

   const {deleteBookById}  =  useBooksContext();
   const [showEdit,setShowEdit]=useState(false);
    
   let content =<h3>{book.title}</h3>;
     const onEditHandleClick=()=>{

      setShowEdit(!showEdit);
      // onEdit(book.id) 
     }
     const onDeleteHandleClick=()=>{

         deleteBookById(book.id);

     }

     if(showEdit)
     {
      content = <BookEdit book={book}/>
     }
    
  return (
    <div>
      <h1>Title</h1>
     <div>
          {content}
        
     </div>
     <div>
        <button onClick={onEditHandleClick}>Edit</button>
        <button onClick={onDeleteHandleClick}>Delete</button>
     </div>
    </div>
  )
}
