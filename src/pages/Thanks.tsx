import thanks from "/thanks.png"
export default function Thanks() {
  return (
    <div  className="w-10/12 mx-auto">
        <div className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-2xl mb-8 font-extrabold leading-none tracking-normal text-gray-900 md:text-4xl md:tracking-tight"> <span className=" w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-yellow-600 to-green-400 -mb-5 inline">Congrats </span></h2>
                    <p className=" mb-8 text-md text-gray-600 md:text-xl ">
                        Seems like you've successfully made an inquiry. rest assured we'll be responding to you as soon as possible 
                    </p>
                </div>
            </div>
            <div className="h-screen w-full bg-gray-100 flex items-center">
                <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
                    <div className="max-w-md">
                        {/* <p className="text-2xl md:text-3xl font-light leading-normal" >Sorry we couldn't find this page. </p> */}
                    <p className="mb-8">In the meantime feel free to explore the rest of website and </p>
                    
                    <a href="/" className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-yellow-600 active:bg-yellow-600 hover:bg-yelloe-500">  Back to homepage </a>
                </div>
                <div className="max-w-lg">
                    <img src={thanks} alt="" />
                </div>               
                </div>
            </div>
        </div>
    </div>
  )
}