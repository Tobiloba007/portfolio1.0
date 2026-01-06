import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"
import { FaWhatsapp } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import { RiTwitterXFill } from "react-icons/ri"
import { SlSocialLinkedin } from "react-icons/sl"
import logo from '../assets/myLogo.png'


const Contacts = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <div data-aos="zoom-in" data-aos-duration="2000" className="flex flex-col items-center justify-center w-full px-8 mt-24 md:px-14 md:mt-36 xl:mt-72">
        <div className="flex flex-col items-center justify-start w-full">
            <p className="text-sm font-light text-[#C4C4C4] lg:text-base xl:text-lg">
                05. What&apos;s next?
            </p>
            <h1 className="text-4xl font-bold text-[#74aabc] my-5 md:my-5 xl:text-5xl">
                Get In Touch
            </h1>
            <p className="text-center text-sm font-light leading-6 md:w-[70%] md:text-base lg:w-[55%] lg:leading-8 xl:w-[45%] xl:text-lg
                          xl:leading-9">
                Have any questions, need help with an exciting project, or you need an awesome developer on your team ?<br />
                send me an <a className="text-[#74aabc] ml-1" href="#">Email.</a>
            </p>
            <a href="mailto:Olaniyanmichael0@gmail.com?subject=" target="_blank" rel="noreferrer">
                <button className="h-14 w-32 border-[1px] border-[#74aabc] text-[#C4C4C4] rounded-md mt-8 xl:w-36">
                    Say Hello
                </button>
            </a>
        </div>

        <div className="flex items-center justify-between w-full mt-20 mb-8 md:hidden">
            <a href="https://https://gitlab.com/olaniyan" target="_blank" rel="noreferrer">
              <FiGithub className='text-[20px] xl:text-[20px]' />
            </a>
            <a href="https://www.linkedin.com/in/michael-olaniyan-213662344/" target="_blank" rel="noreferrer">
              <SlSocialLinkedin className='text-[20px] xl:text-[20px]' />
            </a>
            <a href="https://twitter.com/ipiss_chanpagne" target="_blank" rel="noreferrer">
              <RiTwitterXFill className='text-[22px] xl:text-[22px]' />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=09090529118&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
              <FaWhatsapp className='text-[22px] xl:text-[22px]' />
            </a>
        </div>

        <div className="flex flex-col items-center justify-center w-full mb-2 md:mt-20 lg:mb-3 xl:mb-5 ">
          <img className="w-16 mb-1 lg:w-20 lg:mb-3 xl:w-24"
          src={logo} alt="Michawl's Logo" />
            <p className="text-xs font-light text-[#74aabc] xl:text-sm">
                Handcrafted by me © 2023
            </p>
        </div>

    </div>
  )
}

export default Contacts