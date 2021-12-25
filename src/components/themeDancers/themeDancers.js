import React from 'react'
import './themeDancers.css'

const themeDancers = () => {
    return (
        <div className="danceBoys">
            <div className="divDance" style={{ float: "left" }} >
                <div className="divDance2" style={{ float: "left" }}>
                    <img className="imgClass" style={{ float: "right" }} src={"./images/logo/dk_dance.gif"} />
                </div>
            </div>
            <div className="divDance" style={{ float: "right" }} >
                <div className="divDance2" style={{ float: "right" }}>
                    <img className="imgClass" style={{ float: "left" }} src={"./images/logo/dk_dance.gif"} />
                </div>
            </div>
        </div>
    )
}

export default themeDancers
