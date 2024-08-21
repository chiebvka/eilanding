
import { AlignRight } from 'lucide-react'
import logo from '/logo.png'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'How', href: '/how' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ]

export default function MobileNavigation() {
  return (
    <nav className="flex  md:hidden items-center justify-between border-2 sticky top-0 z-50 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4 md:px-8" aria-label="Global">
    <div className="flex md:flex-1">
        <a href="/" className='protest-revolution-regular font-bold text-3xl text-locale'>
            <span className="sr-only">Companny Logo</span>
            <img src={logo} alt="eilukltd logo" className="w-16 h-16"  />
        </a>
    </div>
    <div className="flex ">
        <Sheet>
            <SheetTrigger asChild>
                <AlignRight />
            </SheetTrigger>
            <SheetContent>
                <a href="/" className='protest-revolution-regular font-bold text-locale  '>
                    <span className="sr-only">Companny Logo</span>
                    <img src={logo} alt="eilukltd logo" className="w-24 h-auto"  />
                </a>
                        <div className="my-5  flex  flex-col gap-y-4">
                            {navigation.map((item) => (
                                <SheetClose key={item.name}  asChild >
                                    <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                                        {item.name}
                                    </a>
                                </SheetClose>
                            ))}
                        </div>
            </SheetContent>
        </Sheet>
    </div>

</nav>
  )
}