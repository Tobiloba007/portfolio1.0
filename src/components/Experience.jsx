import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'
import logo from '../assets/companyLogo.png'

const Experience = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const items = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet Amet',
      logo: logo,
      location: 'Lekki, Lagos',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veniam, aspernatur atque porro aliquam ipsam!',
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet Amet',
      logo: logo,
      location: 'Lekki, Lagos',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veniam, aspernatur atque porro aliquam ipsam!',
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet Amet',
      logo: logo,
      location: 'Lekki, Lagos',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veniam, aspernatur atque porro aliquam ipsam!',
    },
  ]

  return (
    <div className='flex flex-col items-center justify-start w-full px-8 my-24 md:px-14 md:mt-36 lg:px-24 xl:px-52 xl:mt-72'>
      <div className='flex items-center justify-start w-full'>
        <div className="flex items-center justify-start w-full mb-2 md:w-[60%] lg:w-[50%]">
          <p className="text-[15px] mt-1 md:mt-2 md:text-[19px] lg:text-[20px] xl:mt-1">
              03.
          </p>
          <p className="text-[23px] font-medium ml-2 whitespace-nowrap text-[#C4C4C4] md:text-[27px] md:font-bold lg:text-[28px]">
              Experience
          </p>
          <hr className="border-[0.01em] border-[#3d3b4b] w-full ml-2" />
       </div>
     </div>

      <div className="flex flex-col items-center justify-center w-full mt-8 lg:w-[80%] xl:w-[60%]">
              {/* Accordion item */}
        {items.map((item)=>{
          return(
        <div key={item.id} className='flex flex-col items-center justify-start w-full my-3'>
             <div className="flex items-center justify-between w-full rounded-md bg-[#438297] border-[0.08em] border-[#9c38ff] h-14 px-3 md:px-7">
               <p className="text-white text-sm text font-semibold md:text-base xl:text-lg">
                 {item.title}
               </p>
               <div className='flex items-center justify-between'>
                 <p className='hidden text-white text-sm text font-semibold md:flex md:text-base md:pr-8'>
                  2022 - 2023
                 </p>
                 {
                  open
                  ?<IoIosArrowDown onClick={() => setIsExpanded(isExpanded === item.id ? null : item.id)}
                  className='text-xl' />
                  :<IoIosArrowUp onClick={() => setIsExpanded(isExpanded === item.id ? null : item.id)} 
                  className='text-xl' />
                 }
                </div>
               
             </div>

             {isExpanded == item.id && (
               <div className='flex flex-col items-start justify-center w-full bg-[#3d4f55] px-5 py-6 rounded-md mt-5 md:px-8 xl:px-12'>
                <img className='w-24' src={logo} alt="..." />
                <div className='flex items-center justify-start w-full'>
                  <IoLocationSharp className='text-[#ae63f9] text-2xl' />
                  <p className='pl-1 text-sm text-[#C4C4C4] md:text-base'>
                    Lekki, Lagos
                  </p>
                </div>
                <p className='text-sm pt-2 pr-8 leading-6 md:text-base md:pr-0 md:w-[95%] xl:leading-7 xl:text-[17px]'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint non, quos minus pariatur ratione dolorum nemo voluptates fuga, sed quas aliquid explicabo necessitatibus at quo.
                </p>
               </div>
              )
              }

        </div>
         )
       })}

      </div>
    </div>
  )
}

export default Experience