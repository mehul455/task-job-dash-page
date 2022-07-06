import React from 'react'

const Experience = (props) => {
  return (
    <>
    <div className=" rounded-md mt-5 bg-neutral-800">
                            <div className="flex justify-start p-4" >
                                <div>
                                    <h5 className="font-bold text-lg">Experience</h5>
                                </div>
                           </div>
                            <hr/>
                            <div className="p-3">
                               <ul className="">
                                <li>
                                    <div  className="flex pb-3">
                                            <img src={props.img1} className="h-16 w-16 rounded-full" alt=""/>
                                        <div className="flex justify-between ml-3">
                                            <div className="">
                                                <h5 className="">UI/UX Designer <sup>.</sup> Full time</h5>
                                                <small>Employee Forums | Human Resources
                                                </small><br />
                                                <small>Period: Currently working since Nov 2021 <sup>.</sup> 2m
                                                </small><br />
                                                <small className="">orem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet turpis ultrices eu
                                                  faucibuseget nibh. Sagittis in donec porta sed nibh ut.
                                                </small><br />
                                                <div className=" flex justify-end pt-2" >
                                                    <button className="border border-blue-800 rounded-3xl p-1 pl-4 pr-4 "><small>Add reference</small></button>
                                                 </div>
                                            </div>
                                            <div className="">icon</div>
                                        </div>
                                     
                                    </div>
                                    <hr/>
                                    <div  className="flex pt-3">
                                        <img src={props.img2} className="h-16 w-16 rounded-full" alt=""/>
                                    <div className="flex justify-between ml-3">
                                        <div className="">
                                            <h5 className="">UI/UX Designer <sup>.</sup> Full time</h5>
                                            <small>Employee Forums | Human Resources
                                            </small><br />
                                            <small>Period: Currently working since Nov 2021 <sup>.</sup> 2m
                                            </small><br />
                                            <small className="">orem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet turpis ultrices eu
                                              faucibuseget nibh. Sagittis in donec porta sed nibh ut.
                                            </small><br />
                                            <div className=" flex justify-end pt-2" >
                                                <button className="border border-blue-800 rounded-3xl p-1 pl-4 pr-4 "><small>Add reference</small></button>
                                             </div>
                                        </div>
                                        <div className="">icon</div>
                                    </div>
                                 
                                </div>
                                    
                                </li>
                               </ul>

                            </div>
        
        
                        </div>
    </>
  )
}

export default Experience