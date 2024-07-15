import Image from 'next/image'
import React from 'react'
import hero1 from "@/assests/hero1.png"
import hero2 from "@/assests/hero2.png"
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
        image: hero1,
        name:"Tshirt",
        href:"/"

    },
    {
        id:1,

        image: hero1,
        name:"Hoodies",
        href:"/"

    },
    {
        id:1,
        image: hero1,
        name:"Hoodies",
        href:"/"

    },
    {
        id:1,
        image: hero1,
        name:"Hoodies",
        href:"/"

    },
    {
        id:1,
        image: hero1,
        name:"Hoodies",
        href:"/"

    },
    {
        id:1,
        image: hero1,
        name:"Hoodies",
        href:"/"

    },
    {
        id:1,
        image: hero1,
        name:"Hoodies",
        href:"/"
        

    },
    {
        id:1,
        image: hero1,
        name:"Hoodies",
        href:"/"

    },
    {
        id:1,
        image: hero1,
        name:"Hoodies",
        href:"/"

    },
    {
        id:1,
        image: hero1,
        name:"Hoodies",
        href:"/"

    },
    {
        id:1,
        image: hero1,
        name:"Hoodies",
        href:"/"


    },
    {
        id:1,
        image: hero1,
        name:"Hoodies",
        href:"/"

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
              <Card className='rounded-full w-[200px]'>
                <CardContent className="flex  items-center justify-center p-6">
                    <Link href={index.href}><Image src={index.image} alt='' width={150} height={150}/></Link>
                  
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
