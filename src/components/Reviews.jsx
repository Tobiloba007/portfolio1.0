import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { GiClubs, GiDiamonds, GiSpades } from 'react-icons/gi'
import { IoMdHeart } from 'react-icons/io'
import review1 from '../assets/review1.jpg'
import review2 from '../assets/review2.jpg'
import review3 from '../assets/review3.jpg'
import review4 from '../assets/review4.jpg'


const Reviews = () => {
  const items = [
    {
      image: review1,
      name: 'Alicia Grants',
      position: 'project manager, Taurine GC',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus commodi ab soluta ratione sapiente reiciendis hic iste! Praesentium eaque tempore at, velit ab facilis dolorem.',
      cardIcon: <GiSpades className='text-2xl text-[#74aabc] lg:text-3xl xl:text-5xl' />,
    },
    {
      image: review2,
      name: 'Leonardo Pipen',
      position: 'Video Director, Iris studio',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus commodi ab soluta ratione sapiente reiciendis hic iste! Praesentium eaque tempore at, velit ab facilis dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, beatae.',
      cardIcon: <GiDiamonds className='text-2xl text-[#74aabc] lg:text-3xl xl:text-5xl' />,
    },
    {
      image: review3,
      name: 'Abisola Tinuade',
      position: 'CEO Trendy wears',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus commodi ab soluta ratione sapiente reiciendis hic iste! Praesentium',
      cardIcon: <GiClubs className='text-2xl text-[#74aabc] lg:text-3xl xl:text-5xl' />,
    },
    {
      image: review4,
      name: 'Emmanuel Cole',
      position: 'Founder, Blossom kiddies High sch.',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus commodi ab soluta ratione sapiente reiciendis hic iste! Praesentium eaque tempore at, velit ab facilis dolorem.',
      cardIcon: <IoMdHeart className='text-2xl text-[#74aabc] lg:text-3xl xl:text-5xl' />,
    },
   
  ] 
  return (
    <div className="flex flex-col items-start justify-center w-full mt-20 px-8 md:px-14 md:mt-36 lg:px-24 
    lg:items-start xl:px-52 xl:mt-72">
       <div className="flex items-center justify-start w-full mb-2 md:w-[60%] lg:w-[50%]">
          <p className="text-[15px] mt-1 md:mt-2 md:text-[19px] lg:text-[20px] xl:mt-1">
              03.
          </p>
          <p className="text-[23px] font-medium ml-2 whitespace-nowrap text-[#C4C4C4] md:text-[27px] md:font-bold lg:text-[28px]">
              Testimonials
          </p>
          <hr className="border-[0.01em] border-[#3d3b4b] w-full ml-2" />
       </div>
       <div className='md:w-[90%] mt-2'>
            <p className="text-sm text-[#74aabc] md:text-base xl:text-lg">
                People I&apos;ve worked with have said some nice things.
             </p>
        </div>
        

        <div className='flex items-start justify-center w-full mt-10 md:mt-12 lg:mt-20'>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="flex items-start justify-center w-[90%] h-96 md:w-[50vw] lg:w-[40vw] lg:h-[28rem] xl:w-[35vw] xl:h-[35rem]"
      >
        {items.map((item) => {
          return(
        <SwiperSlide 
        key={item.id} 
        className='flex flex-col items-center justify-center w-full bg-[#10101A] rounded-xl border-[1px] border-[#74aabc] p-2'
        >
            <div className='absolute top-2 flex items-start justify-between w-[95%]'>
              {item.cardIcon}
              {item.cardIcon}
            </div>
            <div className='flex flex-col items-center justify-start w-full'>
              <img 
              className='w-32 h-32 rounded-full object-cover xl:w-40 xl:h-40'
              src={item.image} 
              alt="reviewer" 
              />
              <p className='text-md text-[#C4C4C4] font-light mt-2 lg:mt-5 xl:text-2xl'>
                 {item.name}
              </p>
              <p className='text-xs text-[#C4C4C4] font-thin lg:mt-2 lg:font-light xl:text-base xl:mt-0'>
                {item.position}
              </p>
            </div>
            <div className='flex items-center justify-center w-full xl:px-3'>
              <p className='text-center text-[#C4C4C4] text-sm font-normal mt-3 px-3 lg:mt-4 lg:leading-6 xl:text-xl xl:leading-9'>
                &quot; {item.review} &quot;
              </p>
            </div>
            <div className='absolute bottom-2 flex items-start justify-between w-[95%]'>
              {item.cardIcon}
              {item.cardIcon}
            </div>
        </SwiperSlide>
          )
        })}

      </Swiper>
        </div>

    </div>
  )
}

export default Reviews