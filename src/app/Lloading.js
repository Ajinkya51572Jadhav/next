

import React from 'react'

const loading = async() => { 
    await new Promise(resolve=>setTimeout(resolve,5000));
  return (
    <div>
    Loading...            
    </div>
  )
}

export default loading
