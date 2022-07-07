import React from 'react'
import {ColorContext} from './Color'

const ColorBox = () =>{
    return(
        <ColorContext.Consumer>
        {
            (value)=>{
                return (
                    <div style={{
                        width : "64px",
                        height: "64px",
                        background: value.color
                    }}>
                    </div>
                )
           }
        }
        </ColorContext.Consumer>
    )
}

export {ColorBox} ;
