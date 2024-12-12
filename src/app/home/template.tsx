"use client"

import { useState } from "react";


export default function HomeTemplate({ children }: { children: React.ReactNode }) {
    
    const [count, setCount] = useState(0)
    
    return <div
    className='app_template'
    >

        <div>home 下面的 template模版{count}</div>

         <button onClick={() => {
        setCount(count + 1);
      }}>++</button>
        {children}
        </div>
  }