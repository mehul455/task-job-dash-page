import React from 'react'

const Activity = (props) => {
  return (
    <>
     <div className=" rounded-md mt-5 bg-neutral-800">
                            <div className="flex justify-start p-4" >
                                <div>
                                    <h5 className="font-bold text-lg">Activity</h5>
                                </div>
                               
                                 
                            </div>
                            <hr/>
                            <div className="p-4">
                                <ul>
                                    <li>
                                        <div  className="flex mb-4">
                                            <img src={props.img1} className="h-16 w-16 rounded-full" alt=""/>
                                            <div className="ml-5">
                                                <h5>Please provide your feedback. Many Thanks!!</h5>
                                                <p>Nikita Singh liked this</p>
                                            </div>
                                        </div>
                                        
                                    </li>
                                    <li>
                                        <div  className="flex ">
                                            <img src={props.img2} className="h-16 w-16 rounded-full" alt=""/>
                                            <div className="ml-5">
                                                <h5>Please provide your feedback. Many Thanks!!</h5>
                                                <p>Nikita Singh liked this</p>
                                            </div>
                                        </div>
                                        
                                        
                                    </li>
                                    <div className="flex justify-center pt-3">
                                        <p>See all activity</p>
                                    </div>
                             </ul>
                            </div>
        
        
                        </div>
    </>
  )
}

export default Activity