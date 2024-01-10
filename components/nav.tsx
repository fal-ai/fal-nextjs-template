import { ThemeToggle } from '@/components/theme-toggle'
import { ModelIcon } from '@/components/icons/model-icon'
import { Github } from 'lucide-react'
import Link from 'next/link'
import { MobileNav } from './mobile-nav'

export function Nav() {
  return (
    <div
      className="
      py-2 px-2
      md:px-8
      border-b flex items-center"
    >
      <div className='md:hidden flex flex-1'>
        <MobileNav />
      </div>
      <div className='flex-1 items-center hidden md:flex'>
        <Link href="/">
          <ModelIcon />
        </Link>
        <Link
          href="/"
        >
          <p className="ml-3 text-sm">model <span className='font-bold'>playground</span></p>
        </Link>
        <Link
          href="https://www.fal.ai/models"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p
            className='cursor-pointer text-sm ml-5 text-muted-foreground hover:text-foreground'
          >
            models
          </p>
        </Link>
        <Link
          href="https://www.fal.ai/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p
            className='cursor-pointer text-sm ml-5 text-muted-foreground hover:text-foreground'
          >
            api explorer
          </p>
        </Link>
        <Link
          href="https://www.fal.ai/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p
            className='cursor-pointer text-sm ml-5 text-muted-foreground hover:text-foreground'
          >
            docs
          </p>
        </Link>
        <Link
          href="https://github.com/dabit3/model-playground"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className='ml-5 hover:text-foreground text-muted-foreground w-4 h-4' />
        </Link>
      </div>
      <ThemeToggle />
    </div>
  )
}