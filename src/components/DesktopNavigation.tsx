
import logo from '/logo.png'
const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ]


export default function DesktopNavigation() {
  return (
        <nav className="hidden md:flex items-center justify-between border-2   sticky top-0 z-50 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4 md:px-8" aria-label="Global">
            <div className="flex md:flex-1">
                <a href="/" className='protest-revolution-regular font-bold text-3xl text-locale'>
                    <span className="sr-only">Your Company</span>
                    <img src={logo} alt="eilukltd logo" className="w-20 h-16"  />
                </a>
            </div>
            <div className="hidden md:flex md:gap-x-12">
                {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                    {item.name}
                </a>
                ))}
            </div>
            <div className="hidden md:flex md:flex-1 md:justify-end">
                {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
                </a> */}
            </div>
        </nav>
    
  )
}