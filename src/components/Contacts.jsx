import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"
import { FaInstagram } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import { RiTwitterLine } from "react-icons/ri"
import { SlSocialLinkedin } from "react-icons/sl"


const Contacts = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <div data-aos="zoom-in" data-aos-duration="2500" className="flex flex-col items-center justify-center w-full px-8 mt-24 md:px-14 md:mt-36 xl:mt-72">
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
            <button className="h-14 w-32 border-[1px] border-[#74aabc] text-[#C4C4C4] rounded-md mt-8 xl:w-36">
                Say Hello
            </button>
        </div>

        <div className="flex items-center justify-between w-full mt-20 mb-12 md:hidden">
            <FiGithub className='text-[20px] xl:text-[20px]' />
            <SlSocialLinkedin className='text-[20px] xl:text-[20px]' />
            <RiTwitterLine className='text-[22px] xl:text-[22px]' />
            <FaInstagram className='text-[22px] xl:text-[22px]' />
        </div>

        <div className="flex items-center justify-center w-full mb-2 md:mt-20 lg:mb-3 xl:mb-5 ">
            <p className="text-xs font-light text-[#a452f7] xl:text-sm">
                Handcrafted by me © 2023
            </p>
        </div>

    </div>
  )
}

export default Contacts