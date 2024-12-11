"use client"
import Link from "next/link";
import { useState } from "react";



export default function Index({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0);
  return (
    <div className='home_layout'>
      <h2>我是根 home 的 Layout ----- {count}</h2>
      <div>
        <Link href="/home/home0">home0</Link> ----- 
        <Link href="/home/home1">home1</Link>
      </div>
      <button onClick={() => {
        setCount(count + 1);
      }}>++</button>
      {children}
    </div>
  );
}
