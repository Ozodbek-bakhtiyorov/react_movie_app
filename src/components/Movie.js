import styled from 'styled-components';
export default  function Movie(props){
    const {Title, Year, imdbID, Type, Poster} = props;
    return (
            <MovieContent key={imdbID} className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={Poster}/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{Title}<i
                        className="material-icons right">more_vert</i></span>
                    <p>{Year}<a href="#" className={'right'}>{Type}</a></p>
                </div>
            </MovieContent>

    )
}
const MovieContent = styled.div`
    
    `;