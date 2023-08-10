import { FaInstagram } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import { RiTwitterLine } from "react-icons/ri"
import { SlSocialLinkedin } from "react-icons/sl"


const Contacts = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-8 mt-24">
        <div className="flex flex-col items-center justify-start w-full">
            <p className="text-sm font-light text-[#C4C4C4]">
                05. What&apos;s next?
            </p>
            <h1 className="text-4xl font-bold text-[#74aabc] my-5">
                Get In Touch
            </h1>
            <p className="text-center text-sm font-light leading-6">
                Have any questions, need help with an exciting project, or you need an awesome developer on your team ?<br />
                send me an <a className="text-[#74aabc] ml-1" href="#">Email.</a>
            </p>
            <button className="h-14 w-32 border-[1px] border-[#74aabc] text-[#C4C4C4] rounded-md mt-8">
                Say {" "} Hello
            </button>
        </div>

        <div className="flex items-center justify-between w-full mt-24 mb-8">
            <FiGithub className='text-[20px] xl:text-[20px]' />
            <SlSocialLinkedin className='text-[20px] xl:text-[20px]' />
            <RiTwitterLine className='text-[22px] xl:text-[22px]' />
            <FaInstagram className='text-[22px] xl:text-[22px]' />
        </div>

    </div>
  )
}

export default Contacts