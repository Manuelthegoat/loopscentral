import React from 'react'
import './SupportedDaws.css'
import supp1 from '../../Assets/logo/1.png'
import supp2 from '../../Assets/logo/2.png'
import supp3 from '../../Assets/logo/3.png'
import supp4 from '../../Assets/logo/4.png'
import supp5 from '../../Assets/logo/5.png'

const SupportedDaws = () => {
  return (
    <>
        <div className='suppmaindiv'>
            <div className='supptitle'>Supported Daws</div>
            <div className='suppcontent'>
                <img src={supp1} />
                <img src={supp2} />
                <img src={supp3} />
                <img src={supp4} />
                <img src={supp5} />
            </div>
        </div>
    </>
  )
}

export default SupportedDaws