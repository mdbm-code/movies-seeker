import {Movie} from './Movie'

function Movies(props){
    const {movies = []} = props

    return <div className='movies'>
        {
           movies.length>0 ? movies.map((item)=>(<Movie key={item.imdbID} {...item} />))
           : <h4>Nothing found</h4>
        }
    </div>
}

export {Movies}