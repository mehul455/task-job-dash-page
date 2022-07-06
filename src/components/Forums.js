import React from 'react'

const Forums = (props) => {
  return (
    <>
     <div className=" rounded-md p-4 bg-neutral-800 mt-5">
                        <div className="mb-4">
                            <h5 className="font-bold">Your Forums</h5>
                        </div>
                        <ul>
                            <li className="flex items-center mb-3">
                                <img src={props.img1} className="h-10 w-10 rounded-full" alt=""/>
                                <div className="ml-3">
                                    <p>Accounting</p>
                                    <small>8 Members</small>
                                </div>
                            </li>

                            <li className="flex items-center mb-3">
                                <img src={props.img2} className="h-10 w-10 rounded-full" alt=""/>
                                <div className="ml-3">
                                    <p>Accounting</p>
                                    <small>8 Members</small>
                                </div>
                            </li>

                            <li className="flex items-center mb-3">
                                <img src={props.img3} className="h-10 w-10 rounded-full" alt=""/>
                                <div className="ml-3">
                                    <p>Accounting</p>
                                    <small>8 Members</small>
                                </div>
                            </li>

                            <li className="flex items-center mb-3">
                                <img src={props.img4} className="h-10 w-10 rounded-full" alt=""/>
                                <div className="ml-3">
                                    <p>Accounting</p>
                                    <small>8 Members</small>
                                </div>
                            </li>

                            <li className="flex items-center mb-3">
                                <img src={props.img5} className="h-10 w-10 rounded-full" alt=""/>
                                <div className="ml-3">
                                    <p>Accounting</p>
                                    <small>8 Members</small>
                                </div>
                            </li>
                            <hr/>
                            <li className="flex justify-center mt-2">
                                <div className="">
                                    <p className="text-blue-700">Explore More</p>
                                </div>
                            </li>


                        </ul>


                    </div>
    </>
  )
}

export default Forums