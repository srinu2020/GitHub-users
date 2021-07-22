import React from 'react'

const GitHubUsers = ({users}) => {
    return (
        <div>
        <h2 class="  mt-5 d-flex  text-capitalize align-items-center justify-content-center">
         list of gitHub users
        </h2>
            <div class="container-fluid mt-5">
            <div class="row text-center">
            {
                 users.map((currelem)=>{
                     const{id,avatar_url,node_id,type,login}=currelem
                     return(<>
                        <div class=" col-md-4 mt-5" key={id}>
            <div className="card p-2 bg-warning">
                                    <div className="d-flex align-items-center">
                                            <div className="image"> <img src= {avatar_url} className="rounded" width="155" alt="error"/> </div>
                                        <div className="margin w-100">
                                                <h4 className="mb-0 mt-0 text-Left text-dark text-capitalize">  {login}</h4>
                                                {/* <span className="text-left">{type }</span> */}
                                            <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                    <div className="d-flex flex-column">
                                                        <span className="articles">Id</span> <span className="number1">{id}</span> </div>
                                                    <div className="d-flex flex-column">
                                                        <span className="followers">Node Id</span> <span className="number2">{node_id}</span> </div>
                                                    <div className="d-flex flex-column">
                                                        <span className="rating">Type</span> <span className="number3">{type}</span> </div>
                                            </div>
    
            </div>
    
            </div>
               
            </div>
        </div>
                     </>)
                 })
            }
            </div>
            </div>
            </div>
    )
}

export default GitHubUsers
