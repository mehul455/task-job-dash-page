import React from 'react'

const Skills = () => {
  return (
    <>
      <div className=" rounded-md mt-5 bg-neutral-800">
                            <div className="flex justify-between p-4" >
                                <div>
                                    <h5 className="font-bold text-lg">Key Skills</h5>
                                </div>
                                <div>
                                    <h5>icon</h5>
                                </div>
                                 
                            </div>
                            <hr/>
                            <div className="p-4">
                                    <div className="flex justify-evenly">
                                        <button className="border border-grey-800 rounded-3xl p-1 pl-4 pr-4 phone:pl-2 phone:pr-2"><small>UI Design</small></button>
                                        <button className="border border-grey-800 rounded-3xl p-1 pl-4 pr-4 phone:pl-2 phone:pr-2"><small>UI Design</small></button>
                                        <button className="border border-grey-800 rounded-3xl p-1 pl-4 pr-4 phone:pl-2 phone:pr-2"><small>Angular</small></button>
                                        <button className="border border-grey-800 rounded-3xl p-1 pl-4 pr-4 phone:pl-2 phone:pr-2"><small>HTML</small></button>
    
                                </div>
                          
                            </div>
        
        
                        </div>
    </>
  )
}

export default Skills