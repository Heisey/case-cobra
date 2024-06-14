

import * as React from 'react'

import * as Lib from '@/lib'

export interface StandardProps extends React.PropsWithChildren {
  className?: string
}


const Standard: React.FC<StandardProps> = (props) => {


 return (
   <div className={Lib.tailwind.cn('h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20', props.className)}>
     {props.children}
   </div>
 )
}


export default Standard