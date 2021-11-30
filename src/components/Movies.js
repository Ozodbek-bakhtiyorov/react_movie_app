import Movie from "./Movie";
import styled from 'styled-components'
import React from 'react';
export default  class Movies extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {movies = []} = this.props;
        return (
            <MoviesContent>{movies.length ? movies.map(movie=>(
                    <Movie key={movie.imdbID} {...movie}/>
                )):<h2 style={{width:'400px',color:'red',textAlign:'center'}}>404 EROR!!! OOPS NOTHING FOUND </h2>
            }
            </MoviesContent>
        )
    }
}
const MoviesContent = styled.div`
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      grid-gap: 30px;
    
    `