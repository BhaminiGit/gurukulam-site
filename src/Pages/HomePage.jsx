import React from 'react'
import MultiBoxTitle from '../components/MultiBoxTitle'

const HomePage = () => {
  return (
    <>
      <div className='block heroPic' >
        <div className='flex flex-col'>
          <h1 className='text-6xl/23 text-cream font-belanosima justify-center flex font-semibold items-center text-center leading-26' >Welcome to<br />Austin Hindu Temple<br />Gurukulam</h1>
          <div className='flex gap-30 justify-center pt-20  '>
            <a className='heroButtons min-w-70 h-20 p-5 items-center text-2xl font-semibold text-darkpurple bg-lightpurple rounded-[100px] font-belanosima flex justify-center'> Gurukulam Resources </a>
            <a className='heroButtons min-w-70 p-5 h-20 items-center text-2xl  font-semibold text-darkpurple bg-lightpurple rounded-[100px] font-belanosima flex justify-center'>Volunteer with use!</a>
          </div>
        </div>
      </div>

      <div className='h-20'></div>

      <div className='flex justify-center'>
        <MultiBoxTitle innerText={"What we offer"} width={300} />
      </div>

      <div className='h-10'></div>


      <div className='offers'>
        <ul className='whatWeOffer'>

          <li >
            Dharama <br /> Classes
          </li>
          <li>
            Fine Arts <br />  Classes
          </li>
          <li>
            Language <br /> Classes
          </li>
        </ul>
      </div>

      <div className='h-20'></div>

      <div className="flex templePicWithPurpleBg pb-21 relative ">
        <p className=" absolute top-15 font-belanosima font-normal text-darkblue [-webkit-text-stroke:2px_#FFF1EA] text-5xl ml-15 leading-19">Proudly part of the <br /> Austin Hindu Temple.</p>
        <p className='absolute top-55 font-belanosima font-normal text-darkblue text-4xl ml-15 leading-15 '>Gathering every Sunday in a space <br /> of tradition and growth.</p>
        <img className='w-[526px] ml-15 absolute bottom-3' src='assets/homepage/ahtBanner.png' />
      </div>



      <div className='h-20'></div>



      <div className='flex justify-center'>
        <MultiBoxTitle innerText={"What parents are saying"} width={500} />
      </div>


      <div className='h-15'></div>

      <div className='testimonials'>
        <ul className='whatParentsSay'>

          <li > "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate"</li>
          <li > "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate"</li>
          <li > "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate"</li>

        </ul>
      </div>

           <div className='h-30'></div>

      <div className='gallery'>
        <ul className='galleryPics flex gap-15 justify-center'>

          <li><img src='/assets/homepage/groupPicGallery.png'/></li>
           <li><img src='/assets/homepage/violinPicGallery.png'/></li>
            <li><img src='/assets/homepage/tabalaPicGallery.png'/></li>

        </ul>
      </div>

    </>


  )
}

export default HomePage