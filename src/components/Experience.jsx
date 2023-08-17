import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'
import blueprint from '../assets/blueprint.png'
import umscope from '../assets/umscope.jpeg'
import logo from '../assets/fiverr.jpeg'

const Experience = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const items = [
    {
      id: 1,
      title: 'Blueprints pathway',
      date: '2022 - Present',
      logo: blueprint,
      location: 'Lekki, Lagos',
      details: 'Collaborated closely with designers and back-end developers to create visually stunning and functional user interfaces. while ensuring cross-browser-compatibility and optimized website performance for a seamless user experience.',
    },
    {
      id: 2,
      title: 'UMscope Frontend internship',
      date: '2021 - 2022',
      logo: umscope,
      location: 'Lekki, Lagos',
      details: 'Worked with senior developers to implement responsive designs, Gained hands-on experience with different frontend development technologies.',
    },
    {
      id: 3,
      title: 'Fiverr & Upwork',
      date: '',
      logo: logo,
      location: 'Lekki, Lagos',
      details: 'Collaborated with the client to understand their design preferences and project requirements. Delivered projects on time and within budget, leading to a successful launch.',
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
                   {item.date}
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
                <img className='w-24 my-8' src={item.logo} alt="..." />
                <div className='flex items-center justify-start w-full'>
                  <IoLocationSharp className='text-[#ae63f9] text-2xl' />
                  <p className='pl-1 text-sm text-[#C4C4C4] md:text-base'>
                    Lekki, Lagos
                  </p>
                </div>
                <p className='text-sm pt-2 leading-6 md:text-base md:pr-4 md:w-[95%] lg:w-[85%] xl:leading-7 xl:text-[17px] xl:w-[95%]'>
                    {item.details}
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