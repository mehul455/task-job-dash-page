import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

const Bio = () => {
  return (
    <>
    <div className="  p-4 ">
                            <div className="flex justify-between">
                                <h1 className="font-bold text-xl">Nikita Singh</h1>
                                <p className="text-sm text-blue-700">EF2211211</p>
                            </div>
                            <div className="mt-3">
                                <p className=" text-base">Saving US TAX for foreign Real Estate Investors Consulting & Compliance
                                    Solutions with a smile</p>
                            </div>
                            <div className="pt-4">
                                <p className="pt-2 font-bold"><small className="pr-2 font-normal">Designation: </small>UX Designer</p>
                                <p className="pt-2 font-bold"><small className="pr-2 font-normal">Industry: </small>Information Technology</p>
                                <p className="pt-2 font-bold"><small className="pr-2 font-normal">City: </small>Mumbai ( Maharashtra )</p>
                                <p className="pt-2 font-bold"><small className="pr-2 font-normal">Experience: </small>5 Yrs</p>
                                 <div className='pt-4'>
                                 <p className="pb-2 font-bold text-sm">Profile Completion Status <span className='pl-3'>  75%</span></p>
                                 <ProgressBar completed={75}  bgColor="#8FA01F "	/>  
                                 </div>
                                
                            </div>

                            <div className="flex  justify-between p-2 pt-7">
                                <div className="text-center border  border-gray  rounded-md p-2">
                                    <h5 className="text-blue-800">500</h5>
                                    <small>connection</small>
                                </div>
                                <div className="text-center border border-gray rounded-md  p-3">
                                    <h5 className="text-blue-800">200</h5>
                                    <small>followers</small>
                                </div>
        
                            </div>
                        </div>
    </>
  )
}

export default Bio