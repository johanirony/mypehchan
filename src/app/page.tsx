import Image from 'next/image'
import React from 'react'
import hero1 from "@/assests/hero1.png"
import hero2 from "@/assests/hero2.png"
import mug from "@/assests/mug.png"
import hoodie from "@/assests/hoodie.png"
import joiningkits from "@/assests/joiningkits.png"
import shirts from "@/assests/shirts.png"
import cap from "@/assests/cap.png"
import pendrive from "@/assests/pendrive.png"
import mousepad from "@/assests/mousepad.png"




import tshirt2 from "@/assests/tshirt2.png"
import collarneck from "@/assests/collarneck.png"

import { Button } from '@/components/ui/button'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from 'next/link'


export default function Home() {
    const corousel=[{
        id:1,
        image: mug,
        name:"Custom Mugs",
        href:"/",
        height:150,
        width:150

    },
    {
        id:2,

        image: tshirt2,
        name:"Custom T-shirts",
        href:"/",
        height:110,
        width:110

    },
    {
        id:3,
        image: collarneck,
        name:"Custom Polo Tshirts",
        href:"/",
        height:130,
        width:130

    },
    {
        id:4,
        image: hoodie,
        name:"Custom Hoodies",
        href:"/",
        height:120,
        width:120

    },
    {
        id:5,
        image: joiningkits,
        name:"Joining Kits",
        href:"/",
        height:150,
        width:150

    },
    {
        id:6,
        image: shirts,
        name:"Custom Shirts",
        href:"/",
        height:120,
        width:120

    },
    {
        id:7,
        image: cap,
        name:"Custom Caps",
        href:"/",
        height:300,
        width:300
        

    },
    {
        id:8,
        image: pendrive,
        name:"Custom Pendrives",
        href:"/",
        height:100,
        width:200

    },
    {
        id:9,
        image: mousepad,
        name:"Custom Mousepads",
        href:"/",
        height:100,
        width:200

    },
    
]
   
  return (
    <div className="">
        <div className="w-full h-auto bg-[#30D5C8] flex flex-row justify-evenly items-center">
      <div className=""><Image src={hero1} alt='hero1' width={500} height={500} className='rounded-full py-5 ' /> </div>
      <div className="text-center text-white  ">
        <h1 className=' text-5xl font-semibold'>My Pehchan , My Pride</h1>
        <h2 className='pt-2 text-lg '>Unleash Your Creativity</h2>
       <div className='pt-5 '><Button className='rounded-full w-[150px] h-10 text-lg bg-white text-black border-[3px] hover:bg-gray-600 border-gray-600 hover:border-white ' >Shop Now</Button></div>
        
      </div>
      <div className=""><Image src={hero2} alt='hero2' width={500} height={500} className='rounded-full py-5 '/> </div>
      
    </div>
    
        <div className='px-10 pt-5'>
        <h1 className='text-4xl font-semibold'>Explore All Categories</h1>
        <div className="px-5 py-5">
        <Carousel className="w-full ">
      <CarouselContent className="-ml-1">
        {corousel.map((index) => (
          <CarouselItem key={index.id} className="pl-1 md:basis-1/2 lg:basis-1/6">
            <div className="p-1">
              <Card className='rounded-full w-[200px] bg-zinc-100 hover:bg-zinc-300'>
                <CardContent className="flex  items-center justify-center p-6">
                    <Link href={index.href}><Image src={index.image} alt='' width={index.width} height={index.height}/></Link>
                  
                </CardContent>
              </Card>
              <h1 className='text-center pt-2 text-lg font-medium'>{index.name}</h1>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
        </div>

       
        
    </div>
    <div className='px-10 pt-5'>
        <h1 className='text-4xl font-semibold'>Our Most Popular Products</h1>
        <div className="px-5 py-5">
        <Carousel className="w-full ">
      <CarouselContent className="-ml-1">
        {corousel.map((index) => (
          <CarouselItem key={index.id} className="pl-1 md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <Card className=' w-[300px]'>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Link href={index.href}><Image src={index.image} alt='' width={200} height={200}/></Link>
                  
                </CardContent>
              </Card>
              <h1 className='text-center pt-2 text-lg font-medium'>{index.name}</h1>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
        </div>

       
        
    </div>
    <div className='px-10 pt-5'>
        <h1 className='text-4xl font-semibold'>Trending Products</h1>
        <div className="px-5 py-5">
        <Carousel className="w-full ">
      <CarouselContent className="-ml-1">
        {corousel.map((index) => (
          <CarouselItem key={index.id} className="pl-1 md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <Card className=' w-[300px]'>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Link href={index.href}><Image src={index.image} alt='' width={200} height={200}/></Link>
                  
                </CardContent>
              </Card>
              <h1 className='text-center pt-2 text-lg font-medium'>{index.name}</h1>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
        </div>

       
        
    </div>
  
    </div>
    
  )
}
