
import React from 'react'
import { useState } from 'react'

  import useBooksContext from '../hooks/use-books-context';

export default function BookEdit({book}) {
    const{editBookById }=  useBooksContext();
    const [title,setTitle]=useState(book.title)
    const onInputChange=(event)=>{
    setTitle(event.target.value)
    }
    const onFormSubmit=(event)=>{
      event.preventDefault();
       editBookById(title,book.id); 
    }
  return (
    <div>
         <form onSubmit={onFormSubmit}>
          <label>Title</label>
          <input value={title}  onChange={onInputChange}/>
         <button>Save</button>

         </form>

    </div>
  )
}
