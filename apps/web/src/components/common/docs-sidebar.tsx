// @ts-nocheck
'use client'
import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Baby,
  BookOpen,
  Component,
  Grid2X2,
  Layout,
  LayoutIcon,
  LayoutTemplate,
  Rocket,
  SquareCode,
} from 'lucide-react'
import { Icons } from '@/assets/icons'
export const basePath = [
  {
    id: '/get-started',
    name: 'Get-Started',
    icon: <Rocket />,
  },
  {
    id: '/components',
    name: 'Components',
    icon: <Component />,
  },
  {
    id: '/layouts',
    name: 'Layouts',
    icon: <Layout />,
  },
  {
    id: '/templates',
    name: 'Templates',
    icon: <LayoutTemplate />,
  },
  // {
  //   id: '/open-source',
  //   name: 'Open Source',
  //   icon: <SquareCode />,
  // },
]
export const specialComponents = [
  { id: '/components/image-mousetrail', name: 'Image Mousetrail', new: true },
  { id: '/components/spotlight-cards', name: 'Spotlight cards', new: true },
  { id: '/components/image-reveal', name: 'Image Reveal', new: true },
  { id: '/components/globe', name: 'Globe', new: true },
  {
    id: '/components/progressive-carousel',
    name: 'Progressive Carousel',
    new: true,
  },

  { id: '/components/magnified-doc', name: 'Magnified-Doc' },
  {
    id: '/components/gradient-border',
    name: 'gradient-border',
  },
  { id: '/components/buttons', name: 'Buttons', new: true },

  { id: '/components/noise', name: 'Noise' },
  { id: '/components/responsive-header', name: 'Responsive-Header' },
  { id: '/components/footers', name: 'Footers' },
  {
    id: '/components/animated-beam',
    name: 'Animated Beam',
  },
]
export const components = [
  { id: '/components/tabs', name: 'Tabs', component: 'tabs', new: true },
  {
    id: '/components/image-tabs',
    name: 'Image Tabs',
    component: 'tabs',
    new: true,
  },
  {
    id: '/components/sparkles',
    name: 'Sparkles',
    component: 'sparkles',
    new: true,
  },
  {
    id: '/components/sparkles-title',
    name: 'Sparkles Title',
    component: 'sparkles',
    new: true,
  },
  { id: '/components/accordion', name: 'Accordion', component: 'accordion' },

  { id: '/components/faqs', name: 'FAQs', component: 'accordion' },
  { id: '/components/grid', name: 'Grid', component: 'grid' },
  { id: '/components/masonary-grid', name: 'Masonary', component: 'grid' },
  { id: '/components/hover-cards', name: 'Hover cards', component: 'card' },
  {
    id: '/components/products-cards',
    name: 'Products-Cards',
    component: 'card',
  },

  { id: '/components/dialog', name: 'Dialog', component: 'modal/drawer' },
  {
    id: '/components/media-modal',
    name: 'Media Modal',
    component: 'modal/drawer',
  },
  {
    id: '/components/linear-modal',
    name: 'Linear Modal',
    component: 'modal/drawer',
  },
  {
    id: '/components/gallery-model',
    name: 'Gallery Model',
    component: 'modal/drawer',
  },
  {
    id: '/components/drawer',
    name: 'Responsive Drawer',
    component: 'modal/drawer',
  },
  {
    id: '/components/sidebar',
    name: 'Responsive Sidebar',
    component: 'modal/drawer',
  },

  {
    id: '/components/stacking-card',
    name: 'Stacking Card',
    component: 'sticky-scroll',
  },
  {
    id: '/components/embla-carousel',
    name: 'Carousel',
    new: true,
    component: 'carousel',
  },
  {
    id: '/components/clip-path-image',
    name: 'Clip-Path Image',
    new: true,
    component: 'clip-path',
  },

  { id: '/components/marquee', name: 'Marquee', component: 'marquee' },
  {
    id: '/components/image-masking',
    name: 'Image Masking',
    new: true,
    component: 'clip-path',
  },
  {
    id: '/components/video-masking',
    name: 'Video Masking',
    new: true,
    component: 'clip-path',
  },

  {
    id: '/components/framer-carousel',
    name: 'Framer Carousel',
    component: 'carousel',
  },
  {
    id: '/components/sticky-scroll',
    name: 'Sticky Scroll',
    component: 'sticky-scroll',
    new: true,
  },

  {
    id: '/components/image-accordions',
    name: 'Image Accordion',
    component: 'accordion',
  },

  // { id: '/components/scroll', name: 'Scroll' },
  {
    id: '/components/infinity-brand',
    name: 'Infinity Brand',
    component: 'marquee',
  },
  {
    id: '/components/horizontal-scroll',
    name: 'Horizontal Scroll',
    component: 'scroll',
    new: true,
  },
  // { id: '/components/footers', name: 'Footers' },
  {
    id: '/components/smooth-scroll',
    name: 'Smooth-Scroll',
    component: 'scroll',
    new: true,
  },
]
export const layouts = [
  { id: '/layouts/gallery', name: 'Gallery' },
  { id: '/components/smooth-scroll', name: 'Smooth-Scroll' },
]

function DocsSidebar() {
  const pathname = usePathname()
  const groupedComponents = components.reduce((acc, component) => {
    const group = component.component || null
    if (!acc[group]) {
      acc[group] = []
    }
    acc[group].push(component)
    return acc
  }, {})
  // console.log(groupedComponents)

  return (
    <div className="h-full border-r ">
      <div className="sticky top-0 h-screen rounded-md   pt-14 ">
        <ScrollArea className="h-full py-4">
          <ul className="pb-3">
            {basePath?.map((link, index) => {
              return (
                <>
                  <li key={`id-${index}`}>
                    <Link
                      href={link.id}
                      className={`flex gap-2 group font-medium items-center py-1  transition-all ${
                        link.id === pathname
                          ? 'active-nav'
                          : 'text-slate-600 hover:text-slate-900  dark:text-slate-400 dark:hover:text-white'
                      }`}
                    >
                      {React.cloneElement(link?.icon, {
                        className: `${
                          link.id === pathname
                            ? 'dark:text-base-dark dark:bg-white bg-base-dark text-white'
                            : 'dark:bg-gray-800 dark:text-white group-hover:bg-base-dark group-hover:text-white  dark:group-hover:bg-white dark:group-hover:text-base-dark'
                        } h-7 w-7 border transition-all  rounded-sm p-1.5`,
                      })}

                      {link.name}
                    </Link>
                  </li>
                </>
              )
            })}
          </ul>
          <h1 className="text-lg font-semibold pb-1">Components</h1>
          <ul>
            {specialComponents?.map((link) => {
              return (
                <>
                  <li
                    className={`font-normal text-sm  flex items-center gap-1 dark:hover:text-white  py-1 pl-2  border-l transition-all  ${
                      link.id === pathname
                        ? 'dark:border-white border-black text-black dark:text-white font-semibold'
                        : 'dark:text-slate-400 hover:border-black/60 dark:hover:border-white/50 text-slate-500 hover:text-slate-900'
                    }`}
                    // data-active={link.id === pathname}
                    key={link.id}
                  >
                    <Link href={link.id}>{link.name}</Link>
                    {link?.new && (
                      <span className="bg-blue-400 text-white  rounded-full px-2 h-4 text-xs items-center flex">
                        new
                      </span>
                    )}
                  </li>
                </>
              )
            })}
          </ul>
          {Object.entries(groupedComponents).map(([group, items]) => (
            <div key={group}>
              <h2 className="text-[1rem] dark:font-normal dark:text-gray-100 font-normal capitalize my-1">
                {group}
              </h2>
              <ul>
                {items.map((link) => (
                  <li
                    key={link.id}
                    className={`font-normal text-sm flex items-center gap-1 dark:hover:text-white py-1 pl-2 border-l transition-all ${
                      link.id === pathname
                        ? 'dark:border-white border-black text-black dark:text-white font-semibold'
                        : 'dark:text-slate-400 hover:border-black/60 dark:hover:border-white/50 text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    <Link href={link.id}>{link.name}</Link>
                    {link?.new && (
                      <span className="bg-blue-400 text-white rounded-full px-2 h-4 text-xs items-center flex">
                        new
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* <h1 className="text-sm font-semibold pb-1 pt-2">Layouts</h1>
          <ul>
            {layouts?.map((link) => {
              return (
                <>
                  <li
                    className={`font-normal    dark:hover:text-white  py-1 pl-2  border-l transition-all   ${
                      link.id === pathname
                        ? 'dark:border-white border-black text-black dark:text-white font-medium'
                        : 'dark:text-slate-400 hover:border-black/60 dark:hover:border-white/50 text-slate-500 hover:text-slate-900'
                    }`}
                    // data-active={link.id === pathname}
                    key={link.id}
                  >
                    <Link href={link.id}>{link.name}</Link>
                  </li>
                </>
              )
            })}
          </ul> */}
        </ScrollArea>
      </div>
    </div>
  )
}

export default DocsSidebar