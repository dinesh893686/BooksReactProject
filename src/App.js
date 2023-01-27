import React, { useState } from 'react'
import BookList from './components/BookList';
import BookCreate from './components/BookCreate'

import { useEffect } from 'react';

import useBooksContext from './hooks/use-books-context';
export default function App() {

   const {fetchBooks}  =  useBooksContext();   
   
   useEffect(()=>{
    fetchBooks();
   },[])
  return (
    <div>
        <h1>Create Book</h1>
       <BookCreate />
       <BookList />
    </div>
  )
}
