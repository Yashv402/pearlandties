import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
        <header className="flex justify-between p-4">
            <h1 className="text-2xl font-bold">My Application</h1>
            <nav>
            <ul className="flex space-x-4">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/about" className="hover:underline">About</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
            </nav>
            <span>profile</span>
        </header>
    </div>
  )
}

export default Header