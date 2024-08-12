'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion, useAnimate } from 'framer-motion'
import { Plus } from 'lucide-react'

const tabs = [
  {
    title: 'How do UI components improve UX?',
    description:
      'UI components can improve UX by providing familiar, consistent interactions that make it easy for users to navigate and interact with an application.',
    imageUrl:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714806148/design_elbeas.png',
  },
  {
    title: 'Common UI component design challenges?',
    description:
      'Some common challenges include maintaining consistency across different devices and screen sizes, ensuring compatibility with various browsers and assistive technologies, and balancing flexibility with ease of use.',
    imageUrl:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714806148/share_xxzjjp.png',
  },
  {
    title: 'Ensuring UI component responsiveness?',
    description:
      '     Developers can ensure the responsiveness of UI components by using techniques such as fluid layouts, flexible grids, and media queries to adapt the components to different screen sizes and orientations.',
    imageUrl:
      'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714806148/collboration_frpdk8.png',
  },
]
function index() {
  const [scope, animate] = useAnimate()
  const [activeIndex, setActiveIndex] = useState<number | null>(0)
  const [activeItem, setActiveItem] = useState<
    | {
        title: string
        description: string
        imageUrl: string
      }
    | undefined
  >(tabs[0])

  const handleClick = async (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
    const newActiveItem = tabs.find((_, i) => i === index)
    setActiveItem(newActiveItem)
  }

  return (
    <>
      <div className="container mx-auto pb-10 pt-2">
        <h1 className="uppercase text-center text-4xl font-bold pt-2 pb-4">
          FAQ
        </h1>
        <div className="h-fit border  rounded-lg p-2 dark:bg-[#111111] bg-[#F2F2F2]">
          {tabs.map((tab, index) => (
            <motion.div
              key={index}
              className={`overflow-hidden ${
                index !== tabs.length - 1 ? 'border-b' : ''
              }`}
              onClick={() => handleClick(index)}
            >
              <button
                className={`p-3 px-2 w-full cursor-pointer items-center transition-all font-semibold dark:text-white text-black   flex gap-2 
               `}
              >
                <Plus
                  className={`${
                    activeIndex === index ? 'rotate-45' : 'rotate-0 '
                  } transition-transform ease-in-out w-5 h-5 dark:text-gray-200 text-gray-600`}
                />
                {tab.title}
              </button>
              <AnimatePresence mode="sync">
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                      delay: 0.14,
                    }}
                  >
                    <p
                      className={`dark:text-white text-black p-3 pt-0 w-[90%]`}
                    >
                      {tab.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default index