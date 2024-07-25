import { Phone } from "lucide-react";
import contact from "/contact.webp"


export default function Contact() {
  return (
    <div  className="w-10/12 mx-auto">
        <div  className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-2xl mb-8 font-extrabold leading-none tracking-normal text-gray-900 md:text-4xl md:tracking-tight">Need More Info? <span className=" w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-yellow-600 to-green-400 -mb-5 inline">Contact Us </span></h2>
                    <p className=" mb-8 text-md text-gray-600 md:text-xl ">
                        Start gaining the traction you've always wanted with our next-level templates and designs. Crafted to help you tell your story.
                    </p>
                </div>
            </div>
            <div className="py-16 bg-white">  
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:5/12 rounded-lg border-2 border-yellow-600 lg:w-5/12">
                            <img src={contact} alt="image" loading="lazy" width="" className="rounded-lg" height="" />
                            {/* <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height="" /> */}
                        </div>
                        <div className="md:7/12 lg:w-6/12">
                        <form action="https://formsubmit.co/eiluk@bexoni.com" method="POST" className="form bg-gray-50 rounded-lg p-6 my-10 relative">
               
                            <div className="text-yellow-600 p-3 text-center flex items-center justify-center w-12 h-12 mb-6 shadow-lg rounded-full bg-yellow-600 mt-8">
                                <Phone size={24} className="text-yellow-300" />
                             
                            </div>
                            <h3 className="text-2xl text-gray-900 font-semibold">Let us call you!</h3>
                            <p className="text-gray-600"> To help you choose your property</p>
                            <div className="flex space-x-5 mt-3">
                                <input type="text" name="name" id="" placeholder="Your Name" className="border p-2  w-1/2" required />
                                <input type="number" name="mobile" id="" placeholder="Your Number" className="border p-2 w-1/2" required />
                            </div>
                            <input type="email" name="email" id="" placeholder="Your Email" className="border p-2 w-full mt-3" required />
                            <textarea  name="message" id="" cols={10} rows={3} placeholder="Tell us about desired property" className="border p-2 mt-3 w-full"></textarea>
                            <p className="font-bold text-sm mt-3">GDPR Agreement *</p>
                            <div className="flex items-baseline space-x-2 mt-2">
                                <input type="checkbox" name="consent" id="" className="inline-block" />
                                <p className="text-gray-600 text-sm">I consent to having this website store my submitted information so they can respond to my inquiry.</p>
                            </div>
                            <input type="hidden" name="_next" value="https://eilukltd.co.uk/thanks" />
                            <input type="submit" value="Submit" className="w-full mt-6 bg-yellow-600 rounded-md hover:bg-yellow-500 text-white font-semibold p-3" />

                        </form>
                            {/* <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Nuxt development is carried out by passionate developers</h2>
                            <p className="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                            <p className="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}