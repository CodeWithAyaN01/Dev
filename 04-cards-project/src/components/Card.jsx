import React from 'react'
import { CiBookmark } from "react-icons/ci";
import { VscGitStashApply } from "react-icons/vsc";

const URL = 'https://in.pinterest.com/pin/585890232788072997/'
export const Card = (props) => {
  return (
    <div className='parent'>

        <div className="JobCard">

            <div className="UpperPart">
                <img src = {props.logo} id= 'amazon'></img>
                <button>Save <CiBookmark size={15} style={{ position: "relative", top: "3px" }} /></button>
            </div>
            <div className="MiddlePart">
                <h4> {props.name}</h4>
                <p><br />{props.info}</p>
            </div>
            <div className="LowerPart">
              <p>{props.salary} <br />{props.location}</p>
              <button 
                onClick={() => window.open(props.url, "_blank")}>Apply <VscGitStashApply 
              /> 
              </button>
            </div>

        </div>

    </div>
  )
}

export default Card
