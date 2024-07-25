import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import logo from '/logo.png'

export default function Footer() {
    const d = new Date();
    const year = d.getFullYear();

  return (
    <div className="flex flex-col  w-full bg-gray-50">

    <footer className="w-10/12 mx-auto text-gray-700  body-font">
        <div className="  text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
            <div className="p-5">
                <a href="/" className='protest-revolution-regular font-bold text-3xl text-locale  '>
                    <span className="sr-only">EILUKLTD Logo</span>
                    <img src={logo} className="w-24 md:w-32 h-auto" />
                </a>
                <div className="mt-4">
                <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                    <a className=" text-yellow-600 cursor-pointer hover:text-green-400" href='https://www.facebook.com/' target='_blank'>
                    <Facebook />
                    </a>
                    <a className=" ml-3 text-yellow-600 cursor-pointer hover:text-green-400" href='https://www.twitter.com/' target='_blank'>
                    <Twitter />
                        {/* <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            className="w-5 h-5" viewBox="0 0 24 24">
                            <path
                                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                            </path>
                        </svg> */}
                    </a>
                    <a className="ml-3 text-yellow-600 cursor-pointer hover:text-green-400" href='https://www.instagram.com/' target='_blank'>
                    <Instagram />
                        {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg> */}
                    </a>
                    <a className=" ml-3 text-yellow-600 cursor-pointer hover:text-green-400" href='https://www.linkedin.com/' target='_blank'>
                    <Linkedin />
                        {/* <svg fill="currentColor" stroke="currentColor" strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                            <path stroke="none"
                                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                            </path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg> */}
                    </a>
                </span>
            </div>
            </div>
            <div className="p-5">
                <div className="text-lg capitalize text-yellow-600 font-bold">Services</div>
                <a className="my-3 block text-sm hover:text-green-400" href="/services">Assets Decommissioning Deployment </a>
                <a className="my-3 block text-sm hover:text-green-400" href="/services">Oil & Gas Production Operation Services </a>
                <a className="my-3 block text-sm hover:text-green-400" href="/services">Power Generation & Redistribution</a>
            </div>
            <div className="p-5">
                <div className="text-lg capitalize text-yellow-600  font-bold">About Us</div>
                <a className="my-3 block text-sm hover:text-green-400" href="/about">Our Vision </a>
                <a className="my-3 block text-sm hover:text-green-400" href="/services">Our Mission </a>
                <a className="my-3 block text-sm hover:text-green-400" href="/about">FAQ </a>
            </div>
            <div className="p-5">
                <div className="text-lg capitalize text-yellow-600 font-bold">Contact us</div>
                <a className="my-3 block text-sm" href="/#">XXX XXXX, Floor 4 San Francisco, CA<span className="text-teal-600 text-xs p-1"></span></a>
                <a className="my-3 block text-sm" href="mailto:info@eilukltd.co.uk">info@eilukltd.co.uk<span className="text-teal-600 text-xs p-1"></span></a>
            </div>
        </div>
    </footer>

        <div className="bg-gradient-to-r from-yellow-600 to-green-400 ">
            <div className="container px-5 py-4 mx-auto">
                <p className="text-sm text-black capitalize xl:text-center">© <a href="https://www.bexoni.com/" target="_blank" className='text-blue-700'>Bexoni Labs</a>  {year} All rights reserved </p>
            </div>
        </div>

</div>
  )
}