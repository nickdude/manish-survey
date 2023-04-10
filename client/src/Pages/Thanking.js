import React, { useEffect, useState } from 'react'
import { useNavigate} from "react-router-dom";

const Thanking = () => {
    const navigate = useNavigate()
    const [thanking, setThanking] = useState(true)

    useEffect(() => {    
     !thanking && navigate('/')
    }, [thanking])

    setTimeout(() => {
        setThanking(false)
    }, 5000);
    
  return (
    <div className='thanking'>Thanks</div>
  )
}

export default Thanking