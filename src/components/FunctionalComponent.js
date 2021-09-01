import React, { useState } from "react";

function FunctionalComponent() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [age, setAge] = useState("");

    function handleEmail(e) {
        setEmail(e.target.value);
    }
    function handlePassword(e) {
        setPassword(e.target.value);
    }
    function handleFname(e) {
        setfName(e.target.value);
    }
    function handleLname(e) {
        setlName(e.target.value);
    }
    function handleAge(e) {
        setAge(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        setEmail("");
        setPassword("");
        setfName("");
        setlName("");
        setAge("");
    }

    return (
        <div className="compo">
            <h1>Functional Component</h1>
        <form className="form-row"onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" className="form-control" name="email" value={email} onChange={(e)=>handleEmail(e)} placeholder="Email"/>
            </div>
            <div className="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input type="password" className="form-control" name="password" value={password} onChange={(e)=>handlePassword(e)} placeholder="Password"/>
            </div>
            <div className="form-group col-md-6">
            <label for="inputEmail4">First Name</label>
            <input type="fName" className="form-control" name="fName" value={fName} onChange={(e)=>handleFname(e)}/>
            </div>
            <div className="form-group col-md-6">
            <label for="inputPassword4">Last Name</label>
            <input type="lName" className="form-control" name="lName" value={lName} onChange={(e)=>handleLname(e)}/>
            </div>
            <div className="form-group col-md-6">
            <label for="inputPassword4">Age</label>
            <input type="age"  className="form-control" name="email" value={age} onChange={(e)=>handleAge(e)}/>
            </div>
            
            </form>
            
            <button type="submit" class="btn btn-primary">Submit</button>
            
        </div>
    )
}

export default FunctionalComponent;