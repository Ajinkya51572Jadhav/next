     "use client";

import { useParams } from 'next/navigation.js';
import data from '../productApi/page.js';
import { useState } from 'react';

const page = () => {

  const id =useParams();
  console.log("id",id);

  const [state,setState]=useState();   


 
      for (const key in data){
          const element = data[id];
               console.log(element);
                     setState(element);
              }
 
 
    return (
    <div>
          {state}
    </div>
  )
}

export default page
