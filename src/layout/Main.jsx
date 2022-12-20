import React from 'react';
import { Movies } from '../components/Movies';
import {Preloader} from '../components/Preloader';
import {Search} from '../components/Search'

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component{
    state = {
        movies:[],
        type:"all", /* movie, series, episode */
        isLoading:false,
    }

    componentDidMount(){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=osho`)
        .then(response => response.json())
        .then(json => this.setState({movies:json['Search']}))
        .catch(error=>console.log(error))
    }

    newSearch =(keywors)=>{
        this.setState({isLoading:true})
        const typeOfMoviezs = this.state.type;
        let url = '';

        typeOfMoviezs === 'all'?(
            url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${keywors}`
            ):(
            url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${keywors}&type=${typeOfMoviezs}`
         )

        
        fetch(url)
            .then(response => response.json())
            .then(json => this.setState({movies:json['Search'],isLoading:false}))
            .catch(error=>console.log(error))
    }

    setType = (selectedType)=>{
        this.setState({type:selectedType})
    }

    render(){
        const {isLoading, movies} = this.state

        return <div className='content container'>
            <Search fn={this.newSearch}  setTypeFn={this.setType} />
            {
                isLoading ? (<Preloader />):(<Movies movies={movies} />)
            }           
        </div>
    }
}

export {Main}