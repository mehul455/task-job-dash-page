import React from 'react'

const SocialLink = (props) => {
  return (
    <>
    <div className=" rounded-md mt-5 bg-neutral-800">
                            <div className="flex justify-between p-4" >
                                <div>
                                    <h5 className="font-bold text-lg">Social Links</h5>
                                </div>
                                <div>
                                    <h5>icon</h5>
                                </div>
                                 
                            </div>
                            <hr/>
                            <div className="p-4">
                                     <div className="flex justify-evenly">
                                            <div className="text-center ">
                                              <img src={props.img1} alt="userimg" className="h-16 w-16  rounded-full phone:w-10 phone:h-10" />
                                              <p className="text-xs pr-1">Youtube</p>
                            
                                            </div>
                                            <div className="text-center">   
                                              <img src={props.img2} alt="userimg" className="h-16 w-16  rounded-full phone:w-10 phone:h-10" />
                                              <p className="text-xs pr-1">LinkedIn</p>
                            
                                            </div>
                                            <div className="text-center">
                                              <img src={props.img3} alt="userimg" className="h-16 w-16  rounded-full phone:w-10 phone:h-10" />
                                              <p className="text-xs pr-1">Facebook</p>
                            
                                            </div>
                                            <div className="text-center">
                                              <img src={props.img4} alt="userimg" className="h-16 w-16  rounded-full phone:w-10 phone:h-10" />
                                              <p  className="text-xs pr-1">Instagram</p>
                            
                                            </div>
                                            <div className="text-center">
                                              <img src={props.img5} alt="userimg" className="h-16 w-16  rounded-full phone:w-10 phone:h-10" />
                                              <p className="text-xs pr-2" >Twitter</p>
                            
                                            </div>
                                            <div className="text-center">
                                              <img src={props.img6} alt="userimg" className="h-16 w-16  rounded-full phone:w-10 phone:h-10" />
                                              <p className="text-xs pr-1" >GitHub</p>
                            
                                            </div>
    
                                </div> 
                          
                            </div>
        
        
                        </div>
    </>
  )
}

export default SocialLink