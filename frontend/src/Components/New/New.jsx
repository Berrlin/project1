import React from 'react'
import './New.css'
import new_logo from '../../assets/new_logo.png'
import next from '../../assets/next.png'
const New = () => {
    return (
        <div>
            <h1  className='h1'>NEWS</h1>
            <div className='new'>
                <div className="new-left">
                    <h1>A VERY CLOSE RACE TO END THE FIRST PART OF THE SEASON</h1>
                    <p>In the final race before the summer break, Scuderia Ferrari HP picked up 18 points courtesy of a fourth place for Charles Leclerc and a seventh for Carlos Sainz</p>
                    <a href="" className='read-more'>Read More <img src={next} alt="" /></a>
                </div>
                <div className="new-right">
                    <img src={new_logo} alt="" />

                </div>
            </div>
        </div>

    )
}

export default New