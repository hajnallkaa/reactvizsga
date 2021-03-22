import './App.css'
import LoadingMask from './components/LoadingMask'
import Hotel from './components/Hotel'
import Subscription from './components/Subscription'
import { useState, useEffect } from 'react'

const App = () => {
  const url= "C:\Users\hajna\Desktop\reactinitial\src\api"

  const[hotels, setHotels] = useState(null)
  const [response, setResponse] = useState(null)


  const getHotels = async () => {
    try {
      const response = await fetch("api/hotels")
      const data = await response.json()
      setHotels(data)
    }
    catch (error) {
        setResponse(false)
    }
    }


    useEffect(() => {
      getHotels()
  }, [])

  return (
    <div className="App">
      
                <div>
                    <h1>Hotels</h1>
                    {hotels !== null ?
                        hotels.map((hotel, index) => <Hotel key={index} hotel={hotel} />)
                        : <LoadingMask />}
                </div>
            
    </div>
  )
}

export default App
