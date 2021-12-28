import React from 'react'
import './themeDancers.css'
import { useSelector } from 'react-redux'

const ThemeDancers = () => {
    const theme = useSelector(state => state.theme.path)

    return (
        <div className="danceBoys">
            <div className="divDance" style={{ float: "left" }} >
                <div className="divDance2" style={{ float: "left" }}>
                    <img className="imgClass" style={{ float: "right" }} src={"./images/logo/dk_dance.gif"} />
                </div>
            </div>
            <div className="divDance" style={{ float: "right" }} >
                <div className="divDance2" style={{ float: "right" }}>
                    <img className="imgClass" style={{ float: "left" }} src={"./images/logo/diddy_dance.gif"} />
                </div>
            </div>
        </div>
    )
}

export default ThemeDancers
