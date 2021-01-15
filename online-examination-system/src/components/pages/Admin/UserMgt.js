import React, { useState, useEffect } from 'react'
import AdminMain from './AdminMain'
import axios from 'axios';


function UserMgt() {

    const [user, setUser] = useState([]);

    //const { id,Name, Email, Phone, Password, Sector, Organisation } = user;
    const [Userid,setUserid] = useState('');
    const [Nametext, setNametext] = useState('');
    const [Emailtext, setEmailtext] = useState('');
    const [Phonetext, setPhonetext] = useState('');
    const [Orgtext, setOrgtexttext] = useState('');
    const [NameOrgtext, setNameOrgtext] = useState('');

   
    

    useEffect(() => {
        loadusers();
    }, []);

     const loadusers = async () => {
        const result = await axios.get('http://localhost:5000/studentModel');
        setUser(result.data);
    };

    function setModalvalues(id) {
        alert('Updating... ' + id.Name +' -UniqueID: ' + id._id);
        setUserid(id.id)
        setNametext(id.Name);
        setEmailtext(id.Email);
        setPhonetext(id.Phone);
        setOrgtexttext(id.Org);
        setNameOrgtext(id.NameOrg);
        
       
    }
   
    const updateusers = async (e) => {
        e.preventDefault()
        alert(user._id+ "calling from update")
        const result = await axios.put(`http://localhost:5000/studentModel/${user._id}`,{
             "Name": Nametext,
             "Email": Emailtext,
             "Password": '',
             "Sector": '',
             "Organisation": '',
             "Phone": ''

        });
       
        //const result = await axios.put('http://localhost:5000/getUserMgnt/' + id);
        setUser(result.data);
    };

const deleteUser= async id=>{
    alert('deleting :'+id);
    const result = await axios.delete(`http://localhost:5000/studentModel/${id}`);
    loadusers();
}

    return (
        <div >
            <AdminMain></AdminMain>
            <div style={{ marginBottom: "100px" }}>
                <br></br>
                <h1 className="text-center">Welcome to user management</h1>
                <div className="container-fluid" >
                    <table className="table table-striped table-hover border shadow">
                        <thead>
                            <tr className="table-primary">
                                <th>Sr. No</th>
                                <th >Name</th>
                                <th> Email</th>
                                <th> Phone</th>
                                <th> Password</th>
                                <th> Sector</th>
                                <th> Organisation</th>
                                

                                {/* <th>Edit Record</th> */}
                                <th>Delete Record</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user.map((user, index) => {
                                   
                                    
                                    return(
                                    <tr>
                                        <th scope='row'>{index + 1}</th>
                                        <td>{user.Name}</td>
                                        <td>{user.Email}</td>
                                        <td>{user.Phone}</td>
                                        <td>{user.Password}</td>
                                        <td>{user.Org}</td>
                                        <td>{user.NameOrg}</td>
                                        
                                      

                                        {/* <td><button className="btn btn-primary" data-bs-toggle="modal"
                                            data-bs-target="#editUser" onClick={() => setModalvalues(user)}>Edit
                                            </button>
                                            </td> */}
                                        <td><button className="btn btn-danger" onClick={()=>deleteUser(user._id)}>Delete</button></td>
                                    </tr>
                                )})
                            }
                        </tbody>
                    </table>
                </div>


                {/*  on edit this opens */}
                <div class="modal fade" id="editUser" tabindex="-1" aria-labelledby="EditUser" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" > Edit Details </h5>
                                {/* <!-- this is cross mark --> */}
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                            </div>

                            <div class="modal-body">
                                <form id="edit-form" onSubmit='/' >
                                    <div class="mb-3">
                                        <label for="username" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="username" defaultValue={Nametext} />
                                        {/* <div id="username" class="form-text">create a suitable username.</div>  */}
                                    </div>
                                    <div class="mb-3">
                                        <label for="emailId" class="form-label">Email Id</label>
                                        <input type="text" class="form-control" id="emailId" defaultValue={Emailtext}/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="phoneNo" class="form-label">Phone</label>
                                        <input type="text" class="form-control" id="phoneNo" defaultValue={Phonetext}/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="subject" class="form-label">Sector</label>
                                        <input type="text" class="form-control" id="subject" defaultValue={Orgtext}/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="marks" class="form-label">Organisation</label>
                                        <input type="text" class="form-control" id="marks" defaultValue={NameOrgtext}/>
                                    </div>

                                    {/* <!-- <button type="submit" class="btn btn-primary">Submit</button> --> */}
                                    <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">close</button>
                                <button type="submit" form="edit-form" class="btn btn-primary" onClick={updateusers}>Update</button>
                            </div>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserMgt
