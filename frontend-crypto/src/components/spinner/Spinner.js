import React from 'react'
import './spinner.css'
function Spinner() {
    return (
        <div className='container' >
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Spinner