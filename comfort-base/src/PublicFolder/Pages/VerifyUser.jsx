import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const VerifyUser = () => {
    const {token} = useParams()
    const [verificationData, setVerificationData] = useState({success:"", message:""})
    const [verifyim, setVerifyim] = useState(true)

    useEffect(() => {
      doverify()
    }, [])
    
    const doverify =async ()=>{
        try {
            const res = await fetch(`https://comfort-base-backend.onrender.com/auth/verifyuser/${token}`,{
                method:"POST"
            })
            
            const data = await res.json()
            setVerificationData(data)
            
        } catch (error) {
            console.log(error)
            
        }finally{setVerifyim(false)}
    }
  return (

    <div>
        {
        verifyim ? (<p>verifying your account</p>):

        (<p style={{color:verificationData.success ? "green":"red"}}>
            {verificationData.message}
        </p>)
        }
    </div>
  )
}

export default VerifyUser