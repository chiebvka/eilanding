import { BadgeInfo, BrainCog, Cpu, Radar } from "lucide-react";

export default function About() {
  return (
    <div className="relative py-10 border-2 w-full bg-gray-50 border-gradient-to-r from-yellow-600 to-green-400 ">
        <div className="items-center justify-evenly w-10/12 mx-auto flex flex-wrap">
            <div className="w-full h-[65vh] md:w-4/12 ">
                <img alt="..." className="max-w-full h-full rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80" />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto ">
                <div className="md:pr-12">
                <div className="text-yellow-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-yellow-600 mt-8">
                    <BadgeInfo size={32} className="text-yellow-300" />
                </div>
                <h3 className="text-2xl text-gray-900 font-bold md:text-4xl">About <span className=" w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-yellow-600 to-green-400 -mb-5 inline">EIUKLTD </span></h3>
                <p className="mt-4 px-0 text-md text-gray-600 md:text-xl">
                Industry leaders in sustainable decommissioning, production services, and innovative energy solutions for the oil and gas industry.
                </p>
                <ul className="list-none mt-6">
                    <li className="py-2">
                    <div className="flex items-center">
                        <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-yellow-600 text-yellow-200 mr-3">
                            {/* <i className="fas fa-fingerprint"></i> */}
                            <BrainCog  />
                            </span>
                        </div>
                        <div>
                        <h4 className="text-gray-600">
                            Sustainable Solutions
                        </h4>
                        </div>
                    </div>
                    </li>
                    <li className="py-2">
                    <div className="flex items-center">
                        <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-yellow-600 text-yellow-200 mr-3">
                            <Cpu />
                        </span>
                        </div>
                        <div>
                        <h4 className="text-gray-600">Energy Innovation</h4>
                        </div>
                    </div>
                    </li>
                    <li className="py-2">
                    <div className="flex items-center">
                        <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-yellow-600 text-yellow-200 mr-3">
                            <Radar />
                        </span>
                        </div>
                        <div>
                        <h4 className="text-gray-600">Reliable Operations</h4>
                        </div>
                    </div>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </div>
  )
}