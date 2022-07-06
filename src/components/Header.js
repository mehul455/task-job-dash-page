import React from 'react'

const Header = (props) => {
  return (
    <>
          <div className="phone:p-3">
                    <div className="relative ">
                        <img src={props.img} alt="header" className="w-full h-52 object-cover rounded-lg"/>
                    </div>
                    <div>
                        <div className="relative ml-5 -mt-16 lg:mb-0">
                            <img src={props.img} alt="header1" className="rounded-full relative h-32 w-32"/>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default Header