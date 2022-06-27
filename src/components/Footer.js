import React from 'react';
import '../style/header.scss'
import { arcLogo, profilePic } from '../constants/requiredAssets';


const Footer = () => {
    return (
        <div className='footer p-6 flex justify-between items-center'>
           <img src={arcLogo} alt='arcgate' className='logo' />
     
      <div className='intro flex justify-between items-center'>
      <div className='w-20 h-50 mx-5'> <img src={profilePic} alt='arcgate' className='rounded-full outline outline-2 outline-white outline-offset-4' /></div>
      <div className='flex justify-between flex-col items-start'>
        <h1 className='text-2xl subpixel-antialiased font-semibold text-left'>Nitin Thada</h1>
        <p className='text-xl subpixel-antialiased font-medium text-white my-2 max-w-2xl leading-tight'><span className='font-light italic text-orange-200'>Hello, </span> 
        <span className='font-thin text-white'>i am</span> Front End Developer. <br/><span className='font-thin text-white'>Based in</span> Udaipur.</p>
        </div>
      </div>
        </div>
      );

}

export default Footer;