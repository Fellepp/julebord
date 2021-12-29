import React from 'react'
import './themeDancers.css'
import { useSelector } from 'react-redux'

const ThemeDancers = () => {
    const path = useSelector(state => state.theme.path)

    return (
        <div className="danceBoys">
            <div className="divDance" style={{ float: "left" }} >
                <div className="divDance2" style={{ float: "left" }}>
                    <img className="imgClass" style={{ float: "right" }} src={`${path}dancer1.gif`} />
                </div>
            </div>
            <div className="divDance" style={{ float: "right" }} >
                <div className="divDance2" style={{ float: "right" }}>
                    <img className="imgClass" style={{ float: "left" }} src={`${path}dancer2.gif`} />
                </div>
            </div>
        </div>
    )
}

export default ThemeDancers
