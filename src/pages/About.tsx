import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Activity, CheckCheck } from "lucide-react"

export default function About() {
  return (
    <div className="w-10/12 mx-auto">
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-2xl mb-8 font-extrabold leading-none tracking-normal text-gray-900 md:text-4xl md:tracking-tight">Who is  <span className=" w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-yellow-600 to-green-400 -mb-5 inline">EILUK?</span></h2>
            <p className=" mb-8 text-md text-gray-600 md:text-xl ">
            Welcome to EILUKLTD, a leader in providing top-notch services in the oil and gas industry.
            Specializing in Assets Decommissioning Deployment and Oil & Gas Production Operation Services, we aim to deliver exceptional value and innovative solutions to our clients
            </p>
          </div>
          <Tabs defaultValue="mission">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="mission">Mission</TabsTrigger>
              <TabsTrigger value="vision">Vision</TabsTrigger>
            </TabsList>
            <TabsContent value="mission">
              <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none">
                <div className="p-8 sm:p-10 lg:flex-auto">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">Our <span className=" w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-yellow-600 to-green-400 -mb-5 inline">Vision </span> </h3>
                  <p className="mt-6 text-base leading-7 text-gray-600">Our mission is to enhance the operational efficiency and sustainability of the oil and gas sector through cutting-edge decommissioning techniques and comprehensive production operation services.</p>
                  <div className="mt-10 flex items-center gap-x-4">
                    <h4 className="flex-none text-sm font-semibold leading-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-green-400">What’s included</h4>
                    <div className="h-px flex-auto bg-gray-100"></div>
                  </div>
                  <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                    <li className="flex gap-x-3">
                      <CheckCheck size={20} className="text-yellow-600" />
                      Safety
                    </li>
                    <li className="flex gap-x-3">
                      <CheckCheck size={20} className="text-yellow-600" />
                      Innovation
                    </li>
                    <li className="flex gap-x-3">
                      <CheckCheck size={20} className="text-yellow-600" />
                      Sustainability
                    </li>
                    <li className="flex gap-x-3">
                      <CheckCheck size={20} className="text-yellow-600" />
                      Excellence
                    </li>
                  </ul>
                </div>
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                  <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8">
                      <p className="text-base font-semibold text-gray-600">Always Committed</p>
                      <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      
                        <span className="text-xs font-semibold text-gray-600">To be the foremost provider of decommissioning and production services, driving industry standards and contributing to the sustainable development of energy resources.</span>
                      </p>
                        <span   className="mt-10 flex items-center justify-center space-x-3 w-full rounded-md bg-yellow-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"> 
                          <Activity /> <span>Always delivering</span> 
                        </span>
                      {/* <p className="mt-6 text-xs leading-5 text-gray-600">Invoices and receipts available for easy company reimbursement</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="vision">
              <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none">
                <div className="mx-auto p-8  text-gray-600">
                  <h3 className="text-2xl my-8 font-bold tracking-tight text-gray-900">This is our <span className=" w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-yellow-600 to-green-400 -mb-5 inline">Vision for the future </span> </h3>
                  <ul className="grid place-content-center sm:grid-cols-2 gap-8">
                    <li className="flex">
                      <div className="px-4 text-5xl font-extralight text-yellow-600">01.</div>
                      <div>
                        <div className="text-xl font-bold text-transparent bg-clip-text leading-12 bg-gradient-to-r from-yellow-600 to-green-400">Research</div>
                        <p className="max-w-xs py-2 text-sm text-yellow-600">We love numbers! We collect data and insights, analyze
                          them then take the time to learn about your objectives, ask the right questions to understand your
                          business.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="px-4 text-5xl font-extralight text-yellow-600">02.</div>
                      <div>
                        <div className="text-xl font-bold text-transparent bg-clip-text leading-12 bg-gradient-to-r from-yellow-600 to-green-400">Strategey</div>
                        <p className="max-w-xs py-2 text-sm text-yellow-600">Solutions are born from proper research, hard work, and
                          strong strategy. We build data-driven roadmaps for every project to make pave the way to success.
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="px-4 text-5xl font-extralight text-yellow-600">03.</div>
                      <div>
                        <div className="text-xl font-bold text-transparent bg-clip-text leading-12 bg-gradient-to-r from-yellow-600 to-green-400">Design</div>
                        <p className="max-w-xs py-2 text-sm text-yellow-600">We design the right solution for your business. We
                          craft beautiful, intuitive, and user-friendly interfaces that are easy to use and easy to maintain.
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="px-4 text-5xl font-extralight text-yellow-600">04.</div>
                      <div>
                        <div className="text-xl font-bold text-transparent bg-clip-text leading-12 bg-gradient-to-r from-yellow-600 to-green-400">Development</div>
                        <p className="max-w-xs py-2 text-sm text-yellow-600">We build the right solution for your business. We
                          craft beautiful, intuitive, and user-friendly interfaces that are easy to use and easy to maintain.
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="px-4 text-5xl font-extralight text-yellow-600">05.</div>
                      <div>
                        <div className="text-xl font-bold text-transparent bg-clip-text leading-12 bg-gradient-to-r from-yellow-600 to-green-400">Deployment</div>
                        <p className="max-w-xs py-2 text-sm text-yellow-600">We build the right solution for your business. We
                          craft beautiful, intuitive, and user-friendly interfaces that are easy to use and easy to maintain.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="my-10 py-10 border-2 rounded-md w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl sm:text-center">
            <h2 className="text-2xl mb-8 font-extrabold leading-none tracking-normal text-gray-900 md:text-4xl md:tracking-tight">Frequently Asked  Questions about <span className=" w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-yellow-600 to-green-400 -mb-5 inline">EIUKLTD</span></h2>
            <p className=" mb-8 text-md text-gray-600 md:text-xl ">
              Here are the frequently most asked questions about us 
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="bg-gray-100 px-2 rounded-lg mt-3">Is it accessible?</AccordionTrigger>
              <AccordionContent className="px-2">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="bg-gray-100 px-2 rounded-lg mt-3">Is it styled?</AccordionTrigger>
              <AccordionContent className="px-2">
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="bg-gray-100 px-2 rounded-lg mt-3">Is it animated?</AccordionTrigger>
              <AccordionContent className="px-2">
                Yes. It&apos;s animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}