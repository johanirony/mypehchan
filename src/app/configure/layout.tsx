import Steps from '@/components/Steps'
import React, { ReactNode } from 'react'

export default function layout({children}:{children:ReactNode}) {
  return (
    <div className='flex-1 flex flex-col'>
      <Steps/>
        {children}
    </div>
  )
}
