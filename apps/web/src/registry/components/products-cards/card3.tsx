'use client'
import React, { ReactNode, useState } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import * as Select from '@radix-ui/react-select'
import { cn } from '@/lib/utils'
import 'swiper/css'
import 'swiper/css/pagination'
import { motion } from 'framer-motion'
import { FaRegHeart, FaHeart } from 'react-icons/fa6'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import { CheckIcon, Heart } from 'lucide-react'

const arr = [
  {
    img: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714415909/regis-hari-bouchard-ZjViL8qxihM-unsplash_hwrmgb.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714372227/usama-akram-kP6knT7tjn4-unsplash_xm8rmu.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714415909/luis-felipe-lins-LG88A2XgIXY-unsplash_rdybsg.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714415908/usama-akram-s-gYAbQToXk-unsplash_zdsntx.jpg',
  },
]

function Card2() {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive((prevState) => !prevState)
  }
  return (
    <div className="w-[350px] mx-auto ">
      <div className="dark:bg-white bg-gray-100 rounded-md p-2">
        <div className="w-full h-72 relative">
          <motion.button
            className="absolute top-2 right-2 z-20 text-2xl text-white"
            onClick={handleClick}
            animate={{ scale: isActive ? 1.2 : 1 }}
            transition={{ type: 'spring', stiffness: 1000, damping: 10 }}
          >
            {isActive ? (
              <>
                <FaHeart />
              </>
            ) : (
              <>
                <FaRegHeart />
              </>
            )}
          </motion.button>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="h-full rounded-md  "
          >
            {arr.map((data, index) => (
              <div key={index} className="h-full rounded-md  ">
                <SwiperSlide>
                  {' '}
                  <Image
                    src={data?.img}
                    alt="shoes"
                    width={1000}
                    height={1000}
                    className={`w-full h-full rounded-md  object-cover  `}
                  />
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
          {/* <EmblaCarousel slides={arr} options={OPTIONS} /> */}
        </div>
        <article className="text-black pt-2 p-2">
          <div className="flex justify-between">
            <h1 className="font-semibold text-xl text-blue-500">
              Nike Air Max
            </h1>
            <span className="font-medium text-xl text-blue-500">$39</span>
          </div>
          <p className="text-xs pb-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            porro quos quae autem vel praesentium.
          </p>

          <button className="w-full text-white flex justify-center items-center gap-2 bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#3e5068] to-[#0c1970] py-3 rounded-md">
            Add to cart
          </button>
        </article>
      </div>
    </div>
  )
}
const SelectItem = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => {
    return (
      <Select.Item
        className={cn(
          'text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1',
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    )
  }
)
export default Card2