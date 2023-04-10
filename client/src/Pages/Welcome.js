import React, { useState,useEffect } from 'react'
import { useNavigate} from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate()
    const [startSurvey, setStartSurvey] = useState(false)

    useEffect(() => {
        startSurvey && navigate('/survey')
    }, [startSurvey])
    
    const start = ()=>{
        setStartSurvey(true)
    }

  return (<>
    <div className='upper-container'>
        Welcome
       
    </div>
    <div className='lower-container'>
         <button className='button' onClick={start}>Start</button>
    </div>

        </>
    
  )
}

export default Welcome