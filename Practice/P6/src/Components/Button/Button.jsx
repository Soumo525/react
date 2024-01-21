import React from 'react'
import Data from '../Data/Data'

function Button({menu, filterItem, setItem}) {
  return (
    <div className='d-flex justify-content-center'>
        {
            menu.map(val => (
                <button className='btn-dark text-white p-1 px-2 mx-5 btn fw-bold'
                
                onClick={() => filterItem(val)}
                >
                    
                    
                    
                    {val}
                </button>
            ))
        }

        <button className='btn-dark text-white p-1 px-2 mx-5 btn fw-bold'
        onClick={() => setItem(Data)}>
                 All
                </button>
    </div>
  )
}

export default Button