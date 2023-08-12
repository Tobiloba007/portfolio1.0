import { useEffect } from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { RiTwitterLine } from 'react-icons/ri'
import { SlSocialLinkedin } from 'react-icons/sl'
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from 'framer-motion'


const Home = ({children}) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div>
        <div className="md:flex md:items-start md:justify-center md:w-full md:px-7">

           {/* <div data-aos="fade-up" data-aos-duration="2500" */}
           <motion.div 
             animate={{ y: [330, 0], opacity: [0, 0.1, 0.3, 0.5, 0.7, 1], scale: 1 }}
             transition={{
             duration: 2,
             delay: 0.8,
             }}
             initial={{ opacity: 1, scale: 1 }}
           className="hidden md:flex fixed bottom-0 left-7 lg:left-12 xl:left-16 flex-col items-start justify-end">
              <div className="flex flex-col items-center justify-end w-full text-[#C4C4C4]">
                 <FiGithub className='text-[16px] my-2 xl:text-[20px] xl:my-3' />
                 <SlSocialLinkedin className='text-[16px] my-2 xl:text-[20px] xl:my-3' />
                 <RiTwitterLine className='text-[18px] my-2 xl:text-[22px] xl:my-3' />
                 <FaInstagram className='text-[18px] my-2 xl:text-[22px] xl:mt-3' />
                 <hr className="border-[#fff] border-[0.01em] h-20 mt-2 xl:h-24 xl:mt-5" />
               </div>
           </motion.div>

           <div>
              {children}
           </div>

           <motion.div
             animate={{ y: [330, 0], opacity: [0.1, 0.3, 0.5, 0.7, 1], scale: 1 }}
             transition={{
             duration: 2,
             delay: 0.8,
             }}
             initial={{ opacity: 1, scale: 1 }}
           className="hidden md:flex fixed bottom-0 right-7 lg:right-12 xl:right-16 flex-col items-center justify-end">
            <a className="my-mail text-[12px] text-[#C4C4C4] text-center tracking-widest xl:text-[14px]"
               href="#"
               >olaniyanmichael0@gmail.com</a>
                 <hr className="border-[#C4C4C4] border-[0.01em] h-20 mt-2 xl:h-24 xl:mt-5" />
           </motion.div>

        </div>
    </div>
  )
}

export default Home