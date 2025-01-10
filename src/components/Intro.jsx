import { FiGithub } from 'react-icons/fi'
import { SlSocialLinkedin } from 'react-icons/sl'
import { RiTwitterXFill } from 'react-icons/ri'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Intro = () => {

  return (
    <div className="poppins flex flex-col items-start justify-end w-full px-8 mt-56 md:px-14 md:w-[85%] lg:w-full lg:px-24 lg:mt-40 xl:px-52 xl:mt-48">
        <p className="text-[14px] text-[#C4C4C4] font-light mb-1 md:font-light md:mb-2 md:text-[16px] lg:mb-1">
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
        <p className="text-[13px] font-normal leading-5 text-[#C4C4C4] md:text-[15px] md:leading-6 lg:text-[16px] lg:w-[65%] xl:w-[60%] xl:text-[18px] xl:leading-8">
            I am a passionate front-end developer with love for creating visually appealing and user-friendly websites. <br /> 
            My journey began with the excitement of bringing designs to life through code, and I&apos;ve been hooked ever since.
        </p>

        <div className="w-full mt-12 lg:hidden">
          <div className="flex items-start justify-between w-[45%] mb-1 text-[#9c38ff] md:mb-2">

            <motion.div
               animate={{ x: [-100, 0], opacity: [0.5, 1], scale: 1 }}
               transition={{
               duration: 1.5,
               delay: 0.5,
               }}
              initial={{ opacity: 0.2, scale: 0 }}
            >
              <a href="https://github.com/Tobiloba007" target="_blank" rel="noreferrer">
                <FiGithub className='text-[16px] md:text-[18px]' />
              </a>
            </motion.div>

            <motion.div
              animate={{ x: [-400, 0], opacity: [0.5, 1], scale: 1 }}
              transition={{
              duration: 1.5,
              delay: 1,
              }}
             initial={{ opacity: 0.2, scale: 0 }}
            >
              <a href="https://www.linkedin.com/in/michael-olaniyan-213662344/" target="_blank" rel="noreferrer">
                <SlSocialLinkedin className='text-[16px] md:text-[18px]' />
              </a>
            </motion.div>
            
            <motion.div
              animate={{ x: [-400, 0], opacity: [0.5, 1], scale: 1 }}
              transition={{
              duration: 1.5,
              delay: 1.5,
              }}
             initial={{ opacity: 0.2, scale: 0 }}
            >
              <a href="https://twitter.com/ipiss_chanpagne" target="_blank" rel="noreferrer">
                <RiTwitterXFill className='text-[18px] md:text-[20px]' />
              </a>
            </motion.div>

            <motion.div
              animate={{ x: [-400, 0], opacity: [0.5, 1], scale: 1 }}
              transition={{
              duration: 1.5,
              delay: 2,
              }}
             initial={{ opacity: 0.2, scale: 0 }}
            >
              <a href="https://api.whatsapp.com/send/?phone=09090529118&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
                <FaWhatsapp className='text-[18px] md:text-[20px]' />
              </a>
            </motion.div>

          </div>
          <hr className='border-[0.01em] border-[#3d3b4b] w-[48%]' />
        </div>

    </div>
  )
}

export default Intro