import React, { useEffect, useState } from 'react'
import Cards from "./cards";
import axios from "axios";

function CoursesList() {
    const [book, setBook] = useState([])
    useEffect(()=>{
        const getBook = async()=>{
            try{
              const res =  await axios.get("http://localhost:4001/book");
              console.log(res.data)
              setBook(res.data);
            }catch{
                console.log(error);
            }
        };
        getBook();
    }, [])
  return (
    <>
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>

                We are delighted to have you{" "}
                <span className='text-pink-500'>Here...!</span>
            </h1>
            <p className='text-center mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum fugit sed est quasi impedit dolorum obcaecati aliquam. Eaque provident quod quidem sunt incidunt, perspiciatis delectus ullam, molestiae dolore, quas quasi!</p>

        </div>

        <div className ='mt-5 grid grid-cols-1 md:grid-cols-4'>
            
            {book.map((item)=>(
                <Cards key = {item.id} item={item}/>
            ))}
            
        </div>

     </div>
    </>
  )
}

export default CoursesList
