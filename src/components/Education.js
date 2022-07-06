import React from 'react'

const Education = (props) => {
  return (
    <>
    <div className=" rounded-md mt-5 bg-neutral-800">
                            <div className="flex justify-between p-4" >
                                <div>
                                    <h5 className="font-bold text-lg">Education</h5>
                                </div>
                                <div>
                                    icon
                                </div>
                           </div>
                            <hr/>
                            <div className="">
                               <ul className="">
                                <li>
                                    <div  className="flex items-center pb-3 pt-3 pl-3 p-2">
                                            <img src={props.img2} className="h-16 w-16 rounded-lg " alt=""/>
                                        <div className="flex justify-between ml-3">
                                            <div className="">
                                                <h6 className="">Post Graduation <sup>.</sup> Full time <sup>.</sup> 2021</h6>
                                                <small className="text-base">MSc.IT from Ruia College</small><br />
                                                <small >Marks / Grade: 9.21 CGPA</small>
                                            </div>
                                            <div className="pl-10">icon</div>
                                        </div>
                                     
                                    </div>
                                    <hr/>
                                    <div  className="flex items-center pb-3  pt-3 pl-3 p2">
                                        <img src={props.img2} className="h-16 w-16 rounded-lg " alt=""/>
                                        <div className="flex justify-between ml-3">
                                            <div className="">
                                                <h6 className="">Post Graduation <sup>.</sup> Full time <sup>.</sup> 2021</h6>
                                                <small className="text-base">MSc.IT from Ruia College</small><br />
                                                <small >Marks / Grade: 9.21 CGPA</small>
                                            </div>
                                            <div className="pl-10">icon</div>
                                        </div>
                                 
                                </div>
                                    
                                </li>
                               </ul>

                            </div>
        
        
                        </div>
    </>
  )
}

export default Education