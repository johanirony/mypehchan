"use client"
import { link } from 'fs';
import Link from 'next/link'
import React, { useRef, useState } from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu';
import { cn } from '@/lib/utils';



export default function List() {
      const links =[
                {
                    id:1,
                    link:"View All",
                    href:"#",
                    dropdown:[
                      {  id:1.1,
                        link:"Shirts",
                        href:"#"
                    },
                    {  id:1.2,
                        link:"Mugs",
                        href:"#"
                    },
                    {  id:1.3,
                        link:"hoodies",
                        href:"#"
                    },
                    {  id:1.4,
                        link:"hoodies",
                        href:"#"
                    }
                    ]
                },
                {
                    id:2,
                    link:"Apparels",
                    href:"#",dropdown:[
                      {  id:1.1,
                        link:"sweatshirt",
                        href:"#"
                    },
                    {  id:1.2,
                        link:"hoodies",
                        href:"#"
                    },
                    {  id:1.3,
                        link:"hoodies",
                        href:"#"
                    },
                    {  id:1.4,
                        link:"hoodies",
                        href:"#"
                    }
                    ]
                },
                {
                    id:3,
                    link:"Mugs",
                    href:"#",dropdown:[
                      {  id:1.1,
                        link:"hoodies",
                        href:"#"
                    },
                    {  id:1.2,
                        link:"hoodies",
                        href:"#"
                    },
                    {  id:1.3,
                        link:"hoodies",
                        href:"#"
                    },
                    {  id:1.4,
                        link:"hoodies",
                        href:"#"
                    }
                    ]
                },
                {
                    id:4,
                    link:"Personalised Pens",
                    href:"#",dropdown:[
                      {  id:1.1,
                        link:"hoodies",
                        href:"#"
                    },
                    {  id:1.2,
                        link:"hoodies",
                        href:"#"
                    },
                    {  id:1.3,
                        link:"hoodies",
                        href:"#"
                    },
                    {  id:1.4,
                        link:"hoodies",
                        href:"#"
                    }
                    ]
                },
                {
                    id:5,
                    link:"Power Banks",
                    href:"#",dropdown:[
                      {  id:1.1,
                        link:"hoodies",
                        href:"#"
                    },
                    {  id:1.2,
                        link:"hoodies",
                        href:"#"
                    },
                    {  id:1.3,
                        link:"hoodies",
                        href:"#"
                    },
                    {  id:1.4,
                        link:"hoodies",
                        href:"#"
                    }
                    ]
                },
                {
                    id:6,
                    link:"USBs",
                    href:"#",dropdown:[
                      {  id:1.1,
                        link:"hoodies",
                        href:"#"
                    },
                    {  id:1.2,
                        link:"hoodies",
                        href:"#"
                    },
                    {  id:1.3,
                        link:"hoodies",
                        href:"#"
                    },
                    {  id:1.4,
                        link:"hoodies",
                        href:"#"
                    }
                    ]
                },
                
                {
                    id:8,
                    link:"IT Products",
                    href:"#",dropdown:[
                      {  id:1.1,
                        link:"hoodies",
                        href:"#"
                    },
                    {  id:1.2,
                        link:"hoodies",
                        href:"#"
                    },
                    {  id:1.3,
                        link:"hoodies",
                        href:"#"
                    },
                    {  id:1.4,
                        link:"hoodies",
                        href:"#"
                    }
                    ]
                },
                {
                    id:9,
                    link:"Gifting Sets",
                    href:"#",dropdown:[
                      {  id:1.1,
                        link:"hoodies",
                        href:"#"
                    },
                    {  id:1.2,
                        link:"hoodies",
                        href:"#"
                    },
                    {  id:1.3,
                        link:"hoodies",
                        href:"#"
                    },
                    {  id:1.4,
                        link:"hoodies",
                        href:"#"
                    }
                    ]
                },
                
                
                {
                    id:11,
                    link:"Packaging",
                    href:"#",dropdown:[
                      {  id:1.1,
                        link:"hoodies",
                        href:"#"
                    },
                    {  id:1.2,
                        link:"hoodies",
                        href:"#"
                    },
                    {  id:1.3,
                        link:"hoodies",
                        href:"#"
                    },
                    {  id:1.4,
                        link:"hoodies",
                        href:"#"
                    }
                    ]
                },
                {
                    id:12,
                    link:"Stationery",
                    href:"#",dropdown:[
                      {  id:1.1,
                        link:"hoodies",
                        href:"#"
                    },
                    {  id:1.2,
                        link:"hoodies",
                        href:"#"
                    },
                    {  id:1.3,
                        link:"hoodies",
                        href:"#"
                    },
                    {  id:1.4,
                        link:"hoodies",
                        href:"#"
                    }
                    ]
                },
            ]
    

    
    

  

  return (
<div className=" w-full h-auto bg-[#30D5C8] hidden lg:flex ">
        <NavigationMenu className='bg-[#30D5C8] grid grid-cols-10 justify-between items-center '>
    {links.map((link)=>(<NavigationMenuList className='  '>
        <NavigationMenuItem key={link.id} className=''><NavigationMenuTrigger className='text-sm text-white font-semibold bg-[#30D5C8]   '>{link.link}</NavigationMenuTrigger>
        
        
        <NavigationMenuContent>
          <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[1500px] lg:grid-cols-4  ">
            
              {link.dropdown.map((dropdown)=>(
                <ListItem 
               
                title={dropdown.link}
                href="#"
              >
                
                
                
              </ListItem>
              ))}
            
          </div>
        </NavigationMenuContent>
        </NavigationMenuItem>
      
      
    
        
     
      
      
    </NavigationMenuList>  ))}
  </NavigationMenu>
    </div>
   
  )  }
  const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <div>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </div>
  )
})
ListItem.displayName = "ListItem"