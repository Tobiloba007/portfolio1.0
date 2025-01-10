import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { GiClubs, GiDiamonds, GiSpades } from 'react-icons/gi'
// import { IoMdHeart } from 'react-icons/io'
// import review1 from '../assets/review1.jpg'
import gbolahan from '../assets/gbolahan.jpeg'
import lex from '../assets/lex.jpeg'
// import review4 from '../assets/review4.jpg'
import collins from '../assets/collins.jpeg'


const Reviews = () => {
  const items = [
    // {
    //   image: gbolahan,
    //   name: 'Veracruz Francis',
    //   position: 'CEO UMscope',
    //   review: "With immaculate ease, Micheal has grown, matured, and exceeded whatever expectations are placed, in front of him. He's got the best can do attitude and always in charge of the game’s front-end development because he is the best at it.",
    //   cardIcon: <GiSpades className='text-2xl text-[#74aabc] lg:text-3xl xl:text-5xl' />,
    // },
    {
      image: lex,
      name: 'Olajuwon Olalekan',
      position: 'Product Designer at LexCreate',
      review: "Ensuring developers adhere precisely to your intended design is a frequent challenge, but this isn't the situation with Michal. He faithfully translates my designs without any deviation. Collaborating with him is effortless due to his meticulous focus on the finer points.",
      cardIcon: <GiDiamonds className='text-2xl text-[#74aabc] lg:text-3xl xl:text-5xl' />,
    },
    {
      image: collins,
      name: 'Ikedinachim Ugochukwu',
      position: 'Software Developer | Blueprints pathway',
      review: "Michael was the best colleague to work with He is highly responsive, organised and strategic with solving problems. i have learnt a lot from him and i am sure he would do well on any team.",
      cardIcon: <GiClubs className='text-2xl text-[#74aabc] lg:text-3xl xl:text-5xl' />,
    },
    // {
    //   image: review4,
    //   name: 'Emmanuel Cole',
    //   position: 'Founder, Blossom kiddies High sch.',
    //   review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus commodi ab soluta ratione sapiente reiciendis hic iste! Praesentium eaque tempore at, velit ab facilis dolorem.',
    //   cardIcon: <IoMdHeart className='text-2xl text-[#74aabc] lg:text-3xl xl:text-5xl' />,
    // },
    // {
    //   image: collins,
    //   name: 'Jude Ogunaike',
    //   position: 'Founder, Blossom kiddies High sch.',
    //   review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus commodi ab soluta ratione sapiente reiciendis hic iste! Praesentium eaque tempore at, velit ab facilis dolorem.',
    //   cardIcon: <IoMdHeart className='text-2xl text-[#74aabc] lg:text-3xl xl:text-5xl' />,
    // },
   
  ] 
  return (
    <div className="flex flex-col items-start justify-center w-full mt-20 px-8 md:px-14 md:mt-36 lg:px-24 
    lg:items-start xl:px-52 xl:mt-72">
       <div className="flex items-center justify-start w-full mb-2 md:w-[60%] lg:w-[50%]">
          <p className="text-[15px] mt-1 md:mt-2 md:text-[19px] lg:text-[20px] xl:mt-1">
              04.
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
        loop={true}
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
              <p className='text-xs text-[#74aabc] font-thin lg:mt-2 lg:font-light xl:text-base xl:mt-0'>
                {item.position}
              </p>
            </div>
            <div className='flex items-center justify-center w-full xl:px-3'>
              <p className='text-center text-[#C4C4C4] text-sm font-normal mt-3 px-3 lg:mt-4 lg:leading-6 xl:text-lg xl:leading-9'>
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