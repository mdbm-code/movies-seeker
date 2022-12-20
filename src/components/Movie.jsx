function Movie(props){

    const {
        Title:title,
        imdbID:id,
        Poster:poster,
        Year:year,
        } = props

    return<div className="card">
    <div className="card-image waves-effect waves-block waves-light">
        {
            poster === 'N/A' ?
                <img alt={id} className="activator" src={`https://via.placeholder.com/300x400?text=${title}`}/>
            :
                <img alt={id} className="activator" src={poster} />     
        }
    </div>
    <div className="card-content">
        <p> <span>{year}</span></p>
        <span className="card-title activator grey-text text-darken-4">{title}</span>      
    </div>
    
  </div>
}

export {Movie}