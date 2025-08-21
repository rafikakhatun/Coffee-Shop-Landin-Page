
import React, { useEffect, useState } from 'react';
import UpdateNewsCard from './UpdateNewsCard';

const UpdateNews = () => {
// update news card usestate
const [updateCofee, setupdateCofee] = useState([])

// coffedata.json fetch api

const feathData = async ()=>{

    const responce = await fetch("/coffeeData.json");
    const result = await responce.json()
    setupdateCofee(result)
}

useEffect(()=>{
    feathData()

},[])


    return (
        <>
            <section>
                {/*update header */}
                <div className='flex flex-col space-y-4 p-2'>
                    <h1 className='text-center text-2xl md:text-4xl font-extralight'>Update News</h1>
                    <p className='text-center text-gray-700 text-md md:text-xl'>A cup of brewed cofee represents a contribute of up to 1.8 grams of <br /> fiber of the recommended.</p>
                </div>
                {/* Cards */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-2 p-10 place-items-center">
                    {/* Card  */}
                    {updateCofee.map((cofeeItem,index)=>(

                         <UpdateNewsCard profCofeeItem={cofeeItem} key={index}></UpdateNewsCard>
                    
                    ))}
                   
                </section>

            </section>

        </>
    );
};

export default UpdateNews;