import React from 'react'

const AddInfo = () => {
  return (
    <>
        <div className=" rounded-md mt-5 bg-neutral-800  ">
                            <div className="flex justify-between p-4" >
                                <div>
                                    <h5 className="font-bold text-lg">Additional Information</h5>
                                </div>
                                <div>
                                    <h5>icon</h5>
                                </div>
                                 
                            </div>
                            <hr/>
                            <div className="p-4">
                                  
                                <div className="flex justify-between p-3">
                                <div className="flex flex-col ">
                                      <small className="text-sm pb-2">Notice Period: Prefer not to say
                                      </small>
                                      <small className="text-sm pb-2">Marital Status: Unmarried
                                      </small>
                                      <small className="text-sm pb-2">DOB: 12-02 1998
                                      </small>
                    
                                    </div>
                                    <div className="flex flex-col ">
                                      <small className="text-sm pb-2">Differently abled: Yes
                                      </small>
                                      <small className="text-sm pb-2">Gender: Female
                                      </small>
                                      <small className="text-sm pb-2">Languages: English | Hindi | Marathi
                                      </small>
                                    </div> 

                               
                                    
                                  </div>
                            </div>
        
        
                        </div>
    </>
  )
}

export default AddInfo