import React from 'react';

class Search extends React.Component{
    state ={
        search:'',
        selectedType:'all',

    }

    handleOnChange = (event)=>{
        this.setState({search:event.target.value})
    }

    handleOnKeyDown = (event)=>{
        if (event.key === 'Enter'){
            this.props.fn(this.state.search)
        }
    }

    handleOnClick = ()=>{
      this.props.fn(this.state.search)
    }

    handleCheckType = (event)=>{
      this.setState({selectedType:event.target.alt})
      this.props.setTypeFn(event.target.alt)
        
    }

    render(){

        return<div className="row">
        
          <div className="row">
            <div className="input-field col s12">
              <input 
              id="search" 
              type="text" 
              className="validate" 
              placeholder="Search"
              value={this.state.search}
              onChange={this.handleOnChange}
              onKeyDown={this.handleOnKeyDown}
              />
              <button className="btn search-btn" onClick={this.handleOnClick}>Search</button>

              <span className="helper-text input-field" data-error="wrong" data-success="right">
                <form action="!#" >
                  <p className="chip">
                    <label>
                      <input name="group1" type="radio" alt="all" data-type="movie"
                      checked ={this.state.selectedType==='all'}
                      onChange={this.handleCheckType}/>
                      <span>All</span>
                    </label>
                  </p>
                  
                  <p className="chip">
                    <label>
                      <input name="group1" type="radio" alt="movie" data-type="movie"
                      checked ={this.state.selectedType==='movie'}
                      onChange={this.handleCheckType} />
                      <span>Movie</span>
                    </label>
                  </p>
                  <p className="chip">
                    <label>
                      <input  name="group1" type="radio" alt="series" data-type="series"
                      checked ={this.state.selectedType==='series'}
                      onChange={this.handleCheckType}  />
                      <span>Series</span>
                    </label>
                  </p>
                  <p className="chip">
                    <label>
                      <input name="group1" type="radio" alt="episode" data-type="episode"
                      checked ={this.state.selectedType==='episode'}
                      onChange={this.handleCheckType} />
                      <span>Episode</span>
                    </label>
                  </p>
                </form>
              </span>
            </div>
          </div>
        
      </div>
    }
}

export {Search}