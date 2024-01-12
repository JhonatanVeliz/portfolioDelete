import React, { useState } from 'react';

import Image from 'next/image';
import { stateDarkMode } from '@/store';

const BtnDarkMode = () => {

  const { isDarkMode, changeDarkMode } = stateDarkMode();

  return (
    <button className='btnMode' onClick={changeDarkMode}>

      <span className={`btnMode__select ${isDarkMode ? 'bg-black' : 'bg-gray-400'}`}>

        <i className={`btnMode__select__img ${isDarkMode ? 'btnMode__select__img--active' : ''}`}>
          <Image
            src={`${isDarkMode ? '/images/moon.png' : '/images/sun.png'}`}
            alt='icono de css'
            width="300"
            height="300"
          />
        </i>

      </span>

    </button>
  )
}

export default BtnDarkMode