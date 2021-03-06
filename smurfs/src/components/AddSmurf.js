import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs, addSmurf } from "../actions";

class AddSmurf extends Component {
    constructor() {
        super() 
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }

    handleAdd = (smurf) => {
        this.props.addSmurf(smurf);
        this.props.getSmurfs();
    }

    render() {
        const { name, age, height } = this.state;
        return (
            <div className="add-smurf">
                <form>
                    <h3>Add a Smurf</h3>
                    <input name="name" placeholder="name" value={name} onChange={(e) => this.handleChange(e)}/>
                    <input name="age" placeholder="age" value={age} onChange={(e) => this.handleChange(e)}/>
                    <input name="height" placeholder="height" value={height} onChange={(e) => this.handleChange(e)}/>
                    <button onClick={() => this.handleAdd(this.state)}>Add a Smurf</button>
                </form>   
            </div>
        );
    }
}

export default connect(null, { getSmurfs, addSmurf })(AddSmurf);