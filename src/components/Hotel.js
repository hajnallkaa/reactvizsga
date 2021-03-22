import React from "react";
import { useState } from "react";
import Subscription from "./Subscription"

const Hotel = ({ hotel }) => {

    const [showDetails, setShowDetails] = useState(false)
    const [moreinfo, setMoreinfo] = useState(false)

    const setDetails = () => {
        setShowDetails(!showDetails)
    }

    const moreInfo = () => {
        setMoreinfo(!moreinfo)
    }

    return (
        <div>
            {hotel.name} <br />
            {showDetails && hotel.stars}
            {showDetails && hotel.city}
            {moreinfo && <Subscription /> } <br />
            {showDetails && <button onClick={moreInfo}>Request more info</button>}
            <p>
                <button onClick={setDetails}>{showDetails ? 'show less' : 'show more'}</button>
            </p>
        </div>
    )
}

export default Hotel;