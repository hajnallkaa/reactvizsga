import React from "react";
import { useState, useEffect } from "react";

const Subscription = () => {
    const url = 'api/hotels/subscribe'
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [response, setResponse] = useState(null)
    const [showForm, setShowForm] = useState(true)

    const submitForm = () => {
        setIsLoading(true)
        setShowForm(false)
        fetch(url, {
            method: "POST",
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json",
            },
            body: JSON.stringify(email)
        })
            .then((resp) => setResponse(true))
            .catch((err) => setResponse(false))
            .finally(() => setTimeout(setIsLoading(false), 5000))
    }



   return ( 
    <div>
            {isLoading === false && showForm === true ?
                <form onSubmit={e => e.preventDefault()}>
                    <h3> Request more info about </h3>
                    <input value={email}
                        onChange={(e) => setEmail(e.target.value)} type="email" />
                    <button
                        onClick={submitForm}
                        disabled={!(email.includes('@') && email.includes('.'))}>Submit</button>

                    {response === false ? <p>Oops, something happened</p> : response === true ? <p>Subscribed</p> : ''}
                </form> : <p>Loading</p>}
        </div>
   )
}

export default Subscription;
