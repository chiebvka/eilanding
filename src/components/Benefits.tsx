
import { MoveRight } from "lucide-react"
import media1 from "/eng2.jpeg"
import rig from "/petroleum.webp"
import team from "/miniteam.webp"

export default function Benefits() {
  return (
    <div className="py-10 border-2 w-full  border-gradient-to-r from-yellow-600 to-green-400  overflow-hidden">
        <div className="w-10/12 mx-auto space-y-8 text-gray-500 ">
            <div>
            <span className="text-2xl text-gray-900 font-bold md:text-4xl">Our <span className=" w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-yellow-600 to-green-400 -mb-5 inline">Clients thoughts </span> </span>
            </div>
            <div className="flex min-h-screen items-center justify-center py-10 bg-white">
                <div className=" grid gap-8 lg:grid-cols-2 lg:grid-rows-2">
                    <div className="row-span-2 group flex flex-col rounded-md border border-slate-200">
                        <div className="h-1/2 flex-1"><img src={media1} className="w-full object-cover object-right-top" alt="partner review" /></div>
                        <div className="p-8">
                            <h3 className="text-xl font-medium text-yellow-600">Best In the business</h3>
                            <p className="mt-2 text-slate-500">EILUKLtd connects with popular customer communication channels like Email, Website live-chat, Facebook, Twitter, WhatsApp, Instagram, Line, etc., and helps you deliver a consistent customer experience across channels.</p>
                            <a href="#" className="flex mt-2  items-center group-hover:text-yellow-600">
                                <span className="text-sm mr-2 text-yellow-600">Read more </span>
                                <span className="-translate-x-4 opacity-0 items-center text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0"><MoveRight /></span>
                            </a>
                        </div>
                    </div>
                    <div className="flex group rounded-md border border-slate-200">
                    <div className="flex-1 p-8">
                        <h3 className="text-xl font-medium text-yellow-600">Simplicity and efficiency</h3>
                        <p className="mt-2 text-slate-500">Connect with your website visitors, communicate with them in realtime and give them quality support with a live-chat widget that fits your brand.</p>
                        <a href="#" className="flex mt-2  items-center group-hover:text-yellow-600">
                            <span className="text-sm mr-2 text-yellow-600">Read more </span>
                            <span className="-translate-x-4 opacity-0 items-center text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0"><MoveRight /></span>
                        </a>
                    </div>

                    <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
                        <div className="absolute inset-0">
                        <img src={rig} className="h-full w-full object-cover object-left-top" alt="" />
                        </div>
                    </div>
                    </div>
                    <div className="flex group rounded-md border border-slate-200">
                        <div className="flex-1 p-8">
                            <h3 className="text-xl font-medium text-yellow-600">Best technical team ever</h3>
                            <p className="mt-2 text-slate-500">Integrate with chatbots using Rasa or Dialogflow to automate conversations. Qualify using chatbots and seamlessly handoff to human agents.</p>
                            <a href="#" className="flex mt-2  items-center group-hover:text-yellow-600">
                                <span className="text-sm mr-2 text-yellow-600">Read more </span>
                                <span className="-translate-x-4 opacity-0 items-center text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0"><MoveRight /></span>
                            </a>
                        </div>
                        <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
                            <div className="absolute inset-0">
                            <img src={team} className="h-full w-full object-cover object-left-top" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}