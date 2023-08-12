import { FiGithub } from 'react-icons/fi'
import { SlSocialLinkedin } from 'react-icons/sl'
import { RiTwitterLine } from 'react-icons/ri'
import { FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Intro = () => {

  return (
    <div className="poppins flex flex-col items-start justify-end w-full px-8 mt-56 md:px-14 md:w-[85%] lg:w-full lg:px-24 lg:mt-36 xl:px-52 xl:mt-32">
        <p className="text-[17px] text-[#C4C4C4] font-light mb-1 md:font-medium md:mb-2 md:text-[18px] lg:mb-1">
            Hi, my name is
        </p>
        <h1 className="poppins text-[38px] font-[800] tracking-wider mb-1 bg-gradient-to-r from-[#9c38ff] to-[#74aabc] text-transparent bg-clip-text
        md:text-[48px] lg:text-[55px] xl:text-[68px]">
          MICHAEL
        </h1>
        <p className="text-[30px] text-[#C4C4C4] font-[700] leading-9 mb-6 md:text-[41px] md:leading-[2.9rem] md:mb-7 md:font-[600] lg:text-[50px] lg:w-[80%]
        lg:leading-[3.6rem] xl:text-[60px] xl:leading-[4rem] xl:font-[700]">
          I build amazing things for the web.
        </p>
        <p className="text-[15px] font-normal leading-6 text-[#C4C4C4] md:text-[16px] lg:text-[16px] lg:w-[70%] xl:w-[60%] xl:text-[18px] xl:leading-7">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, assumenda omnis aut et dolore minus harum aliquam, earum mollitia unde vero quos, sapiente modi repellendus nihil. Illum, provident brilliant!
        </p>

        <div className="w-full mt-12 lg:hidden">
          <div className="flex items-start justify-between w-[45%] mb-1 text-[#9c38ff] md:mb-2">

            <motion.div
               animate={{ x: [-100, 0], opacity: [0, 0.2, 0.5, 0.7, 1], scale: 1 }}
               transition={{
               duration: 1,
               delay: 0.5,
               }}
              initial={{ opacity: 1, scale: 1 }}
            >
              <FiGithub className='text-[16px] md:text-[18px]' />
            </motion.div>

            <motion.div
              animate={{ x: [-400, 0], opacity: [0.5, 1], scale: 1 }}
              transition={{
              duration: 1,
              delay: 1.5,
              }}
             initial={{ opacity: 0.2, scale: 0 }}
            >
              <SlSocialLinkedin className='text-[16px] md:text-[18px]' />
            </motion.div>
            
            <motion.div
              animate={{ x: [-400, 0], opacity: [0.5, 1], scale: 1 }}
              transition={{
              duration: 1,
              delay: 2.5,
              }}
             initial={{ opacity: 0.2, scale: 0 }}
            >
              <RiTwitterLine className='text-[18px] md:text-[20px]' />
            </motion.div>

            <motion.div
              animate={{ x: [-400, 0], opacity: [0.5, 1], scale: 1 }}
              transition={{
              duration: 1,
              delay: 3.5,
              }}
             initial={{ opacity: 0.2, scale: 0 }}
            >
              <FaInstagram className='text-[18px] md:text-[20px]' />
            </motion.div>

          </div>
          <hr className='border-[0.01em] border-[#3d3b4b] w-[48%]' />
        </div>

    </div>
  )
}

export default Intro