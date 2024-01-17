import React, { useEffect, useState } from 'react'

function Card() {

    const [image, setImage] = useState("https://random.imagecdn.app/500/400")
    async function changeImage() {
        try {
            const img = await fetch("https://random.imagecdn.app/500/400");

            console.log(img.url);
            setImage(img.url);
        } catch (error) {
            console.error("Error fetching image:", error);
            // Handle error (e.g., display a message to the user)
        }
    }

const [advice,setAdvice] = useState('https://api.adviceslip.com/advice')

    async function getadvice(){
        const res = await fetch('https://api.adviceslip.com/advice');
       const data = await res.json();
       console.log(data.slip.advice);
       setAdvice(data.slip.advice)
    }

    // useEffect(() => {
    //   changeImage();
    //   getadvice();
    // }, [])
    
    
  return (
    <div className="w-[300px] rounded-md border">
  <img
    src={image}
    alt="Laptop"
    className="h-[200px] w-full rounded-md object-cover"
  />
  <div className="p-4">
  <p className="mt-3 text-sm text-gray-600">
             Advice
    </p>
    <h1 className="text-lg font-semibold">{advice}</h1>
    
    <button onClick={() => {
        changeImage();
        getadvice();
    }}
      type="button"
      className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Read
    </button>
  </div>
</div>


  )
}

export default Card