import { useState } from "react";
import FormSignUp from "./components/form";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HomePage() {
  
  const [inscription, setInscription] = useState(true)

    return (

        <div className={`container mx-auto lg:h-screen flex justify-center lg:items-center`}>
          <div className={`relative w-full px-6 py-8 ${inscription ? "block":"hidden"}`}>
            <div className={`mx-auto w-full lg:w-2/6 bg-quaternary border border-blue-400 rounded-xl p-6 lg:p-16 shadow-lg`}>
              <h2 className={``}>Sign Up</h2>
              <h4 className={``}>It's quick and easy</h4>
              <FormSignUp setInscription={setInscription} />
            </div>

            <div className={`hidden lg:block absolute -z-1 transform -top-1/2 w-full h-full -left-1/2 translate-x-1/2 translate-y-1/2 flex justify-center items-center`}>
              <div className={`absolute h-4/6 transform translate-x-10 mx-auto w-full lg:w-2/6 bg-quaternary rotate-1 bg-opacity-40 rounded-xl p-6 lg:p-16 shadow-lg`}/>
              <div className={`absolute h-4/6 transform -translate-x-10 mx-auto w-full lg:w-2/6 bg-blue-400 -rotate-1 bg-opacity-10 rounded-xl p-6 lg:p-16 shadow-lg`}/>
            </div>
            
          </div>

          <div className={`relative w-full px-6 py-8 ${!inscription ? "block":"hidden"}`}>
            <div className={`mx-auto w-full lg:w-2/6 bg-quaternary border border-blue-400 rounded-xl p-6 lg:p-16 shadow-lg`}>
              <h2 className={`mb-6`}>Thank you <FontAwesomeIcon icon={faCoffee} className={`ml-2 text-blue-400 text-base`}/></h2>
              <p className={``}>You're awesome, and now part of the community! </p>
              <p className={``}>You will receive soon your confirmation email </p>
            </div>

            <div className={`hidden lg:block absolute -z-1 transform -top-1/2 w-full h-full -left-1/2 translate-x-1/2 translate-y-1/2 flex justify-center items-center`}>
              <div className={`absolute h-4/6 transform translate-x-10 mx-auto w-full lg:w-2/6 bg-quaternary rotate-1 bg-opacity-40 rounded-xl p-6 lg:p-16 shadow-lg`}/>
              <div className={`absolute h-4/6 transform -translate-x-10 mx-auto w-full lg:w-2/6 bg-blue-400 -rotate-1 bg-opacity-10 rounded-xl p-6 lg:p-16 shadow-lg`}/>
            </div>
            
          </div>
          
        </div>
    )
  }

export default HomePage