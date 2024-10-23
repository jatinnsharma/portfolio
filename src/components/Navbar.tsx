"use client"
import React from "react"
import Link from "next/link"
import { Home, BookOpen } from "lucide-react"
import { ModeToggle } from "./ModeToggle"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()
  
  return (
    <nav className="fixed bg-[#000000ba] bottom-0 left-0 right-0 border xl:w-[30vw] md:w-3/6 sm:w-3/12 mx-auto rounded-full border-emerald-200 dark:border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center h-16">
          <ul className="flex justify-center items-center space-x-6">
            <li>
              <NavItem 
                href="/" 
                icon={''} 
                label="Home"
                isActive={pathname === '/'} 
              />
            </li>
            <li>
              <NavItem 
                href="/blog" 
                icon={''} 
                label="Blog"
                isActive={pathname === '/blog'}
              />
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

function NavItem({ 
  href, 
  icon, 
  label, 
  isActive 
}: { 
  href: string; 
  icon: React.ReactNode; 
  label: string;
  isActive: boolean;
}) {
  return (
    <Link 
      href={href} 
      className={`transition-colors ${
        isActive 
          ? 'text-emerald-600 dark:text-emerald-400' 
          : 'text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400'
      }`}
      aria-label={label}
    >
      {icon} {label}
    </Link>
  )
}