import React from 'react'
import { useState } from 'react';

import useBooksContext from '../hooks/use-books-context';
export default function BookCreate() {

         const {createBook}=useBooksContext();
    const [title,setTitle]=useState('');
    const onFormSubmit=(event)=>{

        event.preventDefault();
        createBook(title);  
    }

    const onInputChange =(event)=>{
    // console.log(event.target.value);
     setTitle(event.target.value)
    }
    // console.log(title);

  return (
    <div>
       
        <form onSubmit={onFormSubmit}>
            <label>Enter book Title</label>
        <input onChange={onInputChange}/>
        <div>
        <button>Create</button>
        </div>
  
        </form>
    

    </div>
  )
}
