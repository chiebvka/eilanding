import rig from "/petroleum.webp"
import team from "/miniteam.webp"
import about from '/eng1.jpeg'
import media1 from "/eng2.jpeg"



export default function How() {
  return (
    <div className='w-10/12 mx-auto'>
        <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-2xl mb-8 font-extrabold leading-none tracking-normal text-gray-900 md:text-4xl md:tracking-tight">How does <span className=" w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-yellow-600 to-green-400 -mb-5 inline">EILUK operate?</span> </h2>
            <p className=" mb-8 text-md text-gray-600 md:text-xl ">
   
            </p>
          </div>

            

  <div className="space-y-12">

    <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">

      <div className="md:w-5/12"> 
        {/* <h2 className="text-2xl font-bold mb-4">Verse Finder</h2> */}
        <p className="text-gray-600 mb-6  md:text-left">Globally, decommissioning in Oil and Gas (O&G) is a huge market. In 2022, the UK North Sea sector spent billions on decommissioning project. A significant rise is expected soon as topsides and subsea decommissioning of the UK Continental Shelf continues.        </p>
      </div>
      

      <div className="md:w-5/12 h-56">
        <img className="rounded-md border-none w-full object-cover h-full" src={rig} alt="Verse Finder Image" />
      </div>
    </div>


    <div className="flex flex-col md:flex-row-reverse items-center md:items-start md:justify-between">

      <div className="md:w-5/12"> 
        <p className="text-gray-600 mb-6 md:text-left">But decommissioning is an expensive and complicated task for asset owners; while opportunities may emerge from new sectors such as carbon sequestration for the present at least it brings little in the way of financial recompense.  A significant factor is the safety of those workers undertaking the decommissioning work on ageing infrastructure.        </p>
      </div>
      
      <div className="md:w-5/12 h-56">
        <img className="rounded-md border-none w-full object-cover h-full" src={media1} alt="Bible Trivia Image" />
      </div>
    </div>

    <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">

      <div className="md:w-5/12"> 
        {/* <h2 className="text-2xl font-bold mb-4">Verse Finder</h2> */}
        <p className="text-gray-600 mb-6 md:text-left">The engineering of modern-day structures, like rigs are mandated at least in part to give due consideration to end-of-life management, but the same wasn’t true for these older structures and each project brings with it a litany of problems with regard to disposing of hazardous materials to ensure compliance with modern environmental legislation </p>
      </div>
      

      <div className="md:w-5/12 h-56">
        <img className="rounded-md border-none w-full object-cover h-full" src={about} alt="Verse Finder Image" />
      </div>
    </div>


    <div className="flex flex-col md:flex-row-reverse items-center md:items-start md:justify-between">

      <div className="md:w-5/12"> 
        <p className="text-gray-600 mb-6  md:text-left">None of this will be possible without skilled decommissioning experts, including marine engineers and naval architects, with the expertise and experience to undertake such projects. That's where we come in. Enterprise Investments Limited has the skillset to engage all key stakeholders to execute a cost effective decommissioning Job globally. </p>
      </div>
      
      <div className="md:w-5/12 h-56  ">
        <img className="rounded-md border-none w-full object-cover h-full" src={team} alt="Bible Trivia Image" />
      </div>
    </div>
  </div>
  
        </div>
        </div>
    </div>
  )
}