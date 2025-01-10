import { useEffect, useState } from 'react'
import bwecImg from '../assets/bwecImg.png'
import bwecLogo from '../assets/bwecLogo.png'
import alphaImg from '../assets/alphaImg.png'
import alphaLogo from '../assets/alphaLogo.png'
import chinaImg from '../assets/chinaImg.png'
import chinaLogo from '../assets/chinaLogo.png'
import padiImg from '../assets/padiImg.png'
import padiLogo from '../assets/padiLogo.png'
import whatsappImg from '../assets/whatsappImg.png'
import whatsappLogo from '../assets/whatsappLogo.png'
import { IoIosArrowForward } from 'react-icons/io'
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHoverEnter = (itemId) => {
        setIsHovered(itemId, true)
    }

    const handleHoverLeave = () => {
        setIsHovered(false)
    }

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    const items = [
        {
            id: 1,
            proImg: padiImg,
            proLogo: padiLogo,
            proLogoStyle: 'absolute h-56 w-[60%] object-contain rounded-[21.5px]',
            proBackground: 'absolute flex items-center justify-center w-full opacity-[0.8] h-full bg-[#4c4429] rounded-[20px]',
            proIntro: 'Experience a super comfortable financial lifestyle that supports your daily habits.',
            proLink: 'https://padicash.io/',
            aos: 'fade-right',
            offset: "100", 
            easing: "ease-in-sine",
            duration: "2000"
        },
        {
            id: 2,
            proImg: chinaImg,
            proLogo: chinaLogo,
            proLogoStyle: 'absolute h-56 w-[75%] object-contain rounded-[21.5px]',
            proBackground: 'absolute flex items-center justify-center w-full opacity-[0.8] h-full bg-[#1d1d4e] rounded-[20px]',
            proIntro: 'Procurement agency dedicated to providing seamless logistics solutions tailored to meet your needs.',
            proLink: 'https://www.chinadojo.org/',
            aos: 'fade-left',
            offset: "150", 
            easing: "ease-in-sine",
            duration: "2000"
        },
        {
            id: 3,
            proImg: bwecImg,
            proLogo: bwecLogo,
            proLogoStyle: 'absolute h-56 w-[70%] object-contain rounded-[21.5px]',
            proBackground: 'absolute flex items-center justify-center w-full opacity-[0.8] h-full bg-[#182862] rounded-[20px]',
            proIntro: 'learning opportunities to individuals and people in marginalized black communities.',
            proLink: 'https://www.bloomingwells.org/',
            aos: 'fade-left',
            offset: "150", 
            easing: "ease-in-sine",
            duration: "2000"
        },
        {
            id: 4,
            proImg: alphaImg,
            proLogo: alphaLogo,
            proLogoStyle: 'absolute h-56 w-[100%] object-contain rounded-[21.5px]',
            proBackground: 'absolute flex items-center justify-center w-full opacity-[0.8] h-full bg-[#c5c3c3] rounded-[20px]',
            proIntro: 'An international cyber secutity, DevOps and Data solutions company.',
            proLink: 'https://www.myalphax.com/',
            aos: 'fade-right',
            offset: "100", 
            easing: "ease-in-sine",
            duration: "2000"
        },
        // {
        //     id: 5,
        //     proImg: whatsappImg,
        //     proLogo: whatsappLogo,
        //     proLogoStyle: 'absolute h-56 w-[45%] object-contain rounded-[21.5px]',
        //     proBackground: 'absolute flex items-center justify-center w-full opacity-[0.8] h-full bg-[#294522] rounded-[20px]',
        //     proIntro: 'An exploration of design with an idea around user experience and accessibility.',
        //     proLink: 'https://whatsapp-tobiloba007.vercel.app/',
        //     aos: 'fade-right',
        //     offset: "100", 
        //     easing: "ease-in-sine",
        //     duration: "2000"
        // },
    ]

  return (
    <div className="flex flex-col items-start justify-center w-full mt-20 px-8 md:px-14 md:mt-36 lg:px-24 
    lg:items-start xl:px-52 xl:mt-72">
       <div className="flex flex-col items-start justify-center w-full lg:w-full">
            <div className="flex items-center justify-start w-full mb-2 md:w-[60%] lg:w-[50%]">
               <p className="text-[15px] mt-1 md:mt-2 md:text-[19px] lg:text-[20px] xl:mt-1">
                   02.
               </p>
               <p className="text-[23px] font-medium ml-2 whitespace-nowrap text-[#C4C4C4] md:text-[27px] md:font-bold lg:text-[28px]">
                   My Projects
               </p>
               <hr className="border-[0.01em] border-[#3d3b4b] w-full ml-2" />
            </div>
            <div className='md:w-[90%] mt-5'>
                <p className="text-sm text-[#74aabc] md:text-base xl:text-lg">Here are few projects I&apos;ve worked on</p>
            </div>

            <div className="flex flex-col items-center justify-start w-[100%] mt-5 md:flex-row md:flex-wrap md:justify-between">
                              {/* PROJECT ITEM */}
                    {items.map((item) => {
                        return(
                    <div key={item.id}
                    className="flex flex-col items-center justify-center w-full rounded-[20px] my-3 md:my-4 md:w-[47%] lg:w-[48%] xl:w-[47%] xl:my-8"
                    data-aos= {item.aos}
                    data-aos-offset={item.offset}
                    data-aos-easing={item.easing}
                    data-aos-duration={item.duration}
                    onMouseEnter={() => handleHoverEnter(item.id)}
                    onMouseLeave={handleHoverLeave}
                    >
                        {
                            isHovered === item.id
                         ? <div className="relative flex items-center justify-center w-full h-64 bg-[#223a44] rounded-[20px] border-[1px] border-[#9c38ff] px-7 md:h-72">
                             <div className='flex flex-col items-center justify-center w-full'>
                                 <p className='text-center text-base xl:text-lg'>
                                    {item.proIntro}
                                 </p>
                                 <a className='flex items-center justify-center w-40 h-11 mt-7 border-2 border-[#9c38ff] rounded-3xl hover:bg-[#9c38ff] xl:w-44 xl:h-12'
                                   href={item.proLink}
                                   target="_blank"
                                   rel="noreferrer"
                                 >
                                    <p className='text-sm xl:text-base'>
                                        Visit Website
                                     </p>
                                     <IoIosArrowForward className='ml-2 text-md xl:text-base' />
                                 </a>
                             </div>
                         </div>
                         : <div className="relative flex items-center justify-center w-full h-64 md:h-72">
                               <img className='h-full w-full object-cover rounded-[20px] opacity-[0.8]'
                               src={item.proImg} 
                               alt="project image" 
                               />
                               <div className={item.proBackground}>
                               </div>
                               <img className={item.proLogoStyle}
                               src={item.proLogo} 
                               alt="project image" 
                               />
                           </div>
                        }
                    </div>
                                            
                    )
                   })}


            </div>

        </div>

        <div className='flex items-center justify-center w-full mt-3'>
            <p className='text-sm text-[#74aabc] md:text-base xl:text-lg'>
                want to see more?
            </p>
             <a  href="mailto:Olaniyanmichael0@gmail.com?subject=" target="_blank" rel="noreferrer"
             className='text-sm underline underline-offset-2 pl-1 md:text-base md:pl-2 xl:text-lg'
                > Email me.</a>
        </div>

    </div>
  )
}

export default Projects