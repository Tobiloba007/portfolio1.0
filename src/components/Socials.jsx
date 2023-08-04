import { FaInstagram } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { RiTwitterLine } from 'react-icons/ri'
import { SlSocialLinkedin } from 'react-icons/sl'

const Socials = () => {
  return (
    <div>
        <div className="hidden fixed bottom-0 lg:flex items-end justify-between w-full px-8 xl:px-12">

           <div className="flex flex-col items-start justify-end">
              <div className="flex flex-col items-center justify-end w-full text-[#C4C4C4]">
                 <FiGithub className='text-[16px] my-2 xl:text-[20px] xl:my-3' />
                 <SlSocialLinkedin className='text-[16px] my-2 xl:text-[20px] xl:my-3' />
                 <RiTwitterLine className='text-[18px] my-2 xl:text-[22px] xl:my-3' />
                 <FaInstagram className='text-[18px] my-2 xl:text-[22px] xl:mt-3' />
                 <hr className="border-[#fff] border-[0.01em] h-20 mt-2 xl:h-24 xl:mt-5" />
               </div>
           </div>

           <div className="flex flex-col items-center justify-end">
            <a className="my-mail text-[12px] text-[#C4C4C4] text-center tracking-widest xl:text-[14px]"
               href="#"
               >olaniyanmichael0@gmail.com</a>
                 <hr className="border-[#C4C4C4] border-[0.01em] h-20 mt-2 xl:h-24 xl:mt-5" />
           </div>

        </div>
    </div>
  )
}

export default Socials