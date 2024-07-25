import { Dam, DoorOpen, Factory, MoveRight,  UtilityPole } from "lucide-react";

export default function Features() {
  return (
    <div className="py-10 border-2 w-full  border-gradient-to-r from-yellow-600 to-green-400  overflow-hidden">
        <div className=" w-10/12 mx-auto space-y-8 text-gray-500 ">
            <div>
                <span className="text-2xl text-gray-900 font-bold md:text-4xl">What we <span className=" w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-yellow-600 to-green-400 -mb-5 inline">Offer </span> </span>
                <h1 className="mt-4 px-0 text-md text-gray-600 md:text-xl">A technology-first approach to offerig a wide range of services across the energy sector, going beyond traditional consulting</h1>
            </div>
            <div className="mt-16 grid border divide-x divide-y rounded-xl gap-2 overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
                <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                    <div className="relative p-8 space-y-8">
                        <UtilityPole size={32} className="text-yellow-600" />
                        {/* <SunDim size={32} className="text-yellow-600" /> */}
                        {/* <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/burger.png" className="w-10" width="512" height="512" alt="burger illustration" /> */}
                        
                        <div className="space-y-2">
                            <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">Power Generation & Redistribution</h5>
                            <p className="text-sm text-gray-600">Efficient power generation and redistribution solutions for sustainable energy management.</p>
                        </div>
                        <a href="/services" className="flex justify-between items-center group-hover:text-yellow-600">
                            <span className="text-sm">Read more</span>
                            <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0"><MoveRight /></span>
                        </a>
                    </div>
                </div>
                <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                    <div className="relative p-8 space-y-8">
                    {/* <Factory /> */}
                        <Factory size={32} className="text-yellow-600" />
                    
                        {/* <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/trowel.png" className="w-10" width="512" height="512" alt="burger illustration" /> */}
                        
                        <div className="space-y-2">
                            <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">Downstream Refinery Partnerships</h5>
                            <p className="text-sm text-gray-600">Strategic downstream refinery partnerships for optimized processing and distribution efficiency.</p>
                        </div>
                        <a href="/services" className="flex justify-between items-center group-hover:text-yellow-600">
                            <span className="text-sm">Read more</span>
                            <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0"><MoveRight /></span>
                        </a>
                    </div>
                </div>
                <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                    <div className="relative p-8 space-y-8">
                    
                        <Dam size={32} className="text-yellow-600" />
                        {/* <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png" className="w-10" width="512" height="512" alt="burger illustration" /> */}
                        
                        <div className="space-y-2">
                            <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600"> Power Plant Development</h5>
                            <p className="text-sm text-gray-600">Comprehensive power plant development for reliable and efficient energy solutions.</p>
                        </div>
                        <a href="/services" className="flex justify-between items-center group-hover:text-yellow-600">
                            <span className="text-sm">Read more</span>
                            <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0"><MoveRight /></span>
                        </a>
                    </div>
                </div>
                <div className="relative group bg-gray-100 transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
                    <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">
                        <DoorOpen size={32} className="text-yellow-600"  />
                        {/* <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/metal.png" className="w-10" width="512" height="512" alt="burger illustration" /> */}
                        
                        <div className="space-y-2">
                            <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">More features</h5>
                            <p className="text-sm text-gray-600">Discover more features and enhancements by visiting our services page.</p>
                        </div>
                        <a href="/services" className="flex justify-between items-center group-hover:text-yellow-600">
                            <span className="text-sm">Read more</span>
                            <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0"><MoveRight /></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}