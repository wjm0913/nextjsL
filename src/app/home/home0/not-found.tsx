import Link from 'next/link'
import {notFound} from "next/navigation";

export default function NotFound() {
  notFound()
  
  return (
    <div>
      <h2>home0home0全局404</h2>
    </div>
  )
}
