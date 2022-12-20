import React from "react";

class Search extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            seacrh:'',
        }

    }

    handleKey =(event)=>{
        if (event.key === 'Enter'){
            this.props.cb(this.state.seacrh)
        }
    }

    render(){
        
        return<div className="row">

            <div className="input-field ">
              <input 
              className="validate" 
              type="text" 
              id="icon_prefix" 
              placeholder="Search"
              value={this.state.seacrh}
              onChange={(ev)=>this.setState({seacrh:ev.target.value})} 
              onKeyDown={this.handleKey}
              />
              <button className="btn search-btn"
              onClick={()=> this.props.cb(this.state.seacrh)}
              >Search</button>
            </div>

      </div> 
    }
}

export {Search}