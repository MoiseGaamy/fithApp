import React from "react";


class ClassComponent extends React.Component {
    constructor() {
        super();
        this.state = { email:"" , password:"", fName:"", lName:"", age:""}
    }

    handleEmail(e) {
        this.setState({ email: e.target.value})
    }
    handlePassword(e) {
        this.setState({ password: e.target.value})
    }
    handleFname(e) {
        this.setState({ fName: e.target.value})
    }
    handleLname(e) {
        this.setState({ lName: e.target.value})
    }
    handleAge(e) {
        this.setState({ age: e.target.value})
    };
    handleSubmit(e) {
        e.preventDefault()
        this.setState({ email: "", password: "", fName: "", lName: "", age: "" });
        
    };
    render() {
        return (
            <div className="compo">
            <h1>Class Component</h1>
        <form className="form-row"onSubmit={(e) => this.handleSubmit(e)}>
            <div className="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" className="form-control" name="email" value={this.state.email} onChange={(e)=>this.handleEmail(e)} placeholder="Email"/>
            </div>
            <div className="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input type="password" className="form-control" name="password" value={this.state.password} onChange={(e)=>this.handlePassword(e)} placeholder="Password"/>
            </div>
            <div className="form-group col-md-6">
            <label for="inputEmail4">First Name</label>
            <input type="fName" className="form-control" name="fName" value={this.state.fName} onChange={(e)=>this.handleFname(e)}/>
            </div>
            <div className="form-group col-md-6">
            <label for="inputPassword4">Last Name</label>
            <input type="lName" className="form-control" name="lName" value={this.state.lName} onChange={(e)=>this.handleLname(e)}/>
            </div>
            <div className="form-group col-md-6">
            <label for="inputPassword4">Age</label>
            <input type="age"  className="form-control" name="email" value={this.state.age} onChange={(e)=>this.handleAge(e)}/>
            </div>
            
            </form>
            
            <button type="submit" class="btn btn-primary">Submit</button>
            
        </div>
        );
    }
}

export default ClassComponent;