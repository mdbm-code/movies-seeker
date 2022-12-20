import React from 'react'
import {Movies} from '../components/Movies'
import {Preloader} from '../components/Preloader'
import {Search} from '../components/Search'

class Main extends React.Component{
    state ={
        bd:[],
        searchPhrase:'dark',
      }

    componentDidMount(){
        fetch(`http://www.omdbapi.com/?apikey=2d3e8ade&s=${this.state.searchPhrase}`)
            .then(res=>res.json())
            .then(json=>this.setState({bd:json['Search']}))
            .catch(error=>console.error(error)) 
    }

    handleSearch = (phrase) =>{
        this.setState({searchPhrase:phrase},()=>{
            fetch(`http://www.omdbapi.com/?apikey=2d3e8ade&s=${this.state.searchPhrase}`)
            .then(res=>res.json())
            .then(json=>this.setState({bd:json['Search']}))
            .catch(error=>console.error(error)) 
        })
    }

    render(){

    return <main className="container content">
        <Search cb={this.handleSearch} />
        {
            this.state.bd.length? <Movies movies={this.state.bd} />
            : <Preloader />
        }
        
    </main>

}
}

export default Main;