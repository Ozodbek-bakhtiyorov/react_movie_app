import styled from 'styled-components';
import React from 'react';
import Movies from "../components/Movies";
import Loader from "../components/Loader";
import Search from "../components/Search";
export default class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            movies:[],
            total: 0
        }
    }
    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=a9266e7d&s=supermen`)
            .then(response=> response.json())
            .then((data) => this.setState({movies:data.Search, total:data.totalResults, loading:false}))
    }
    searchMovies = (str, type='all')=>{
        this.setState({loading:true});
        fetch(`https://www.omdbapi.com/?apikey=a9266e7d&s=${str}${type!=='all' ? `&type=${type}`:''}`)
            .then(response=> response.json())
            .then((data) => this.setState({movies:data.Search,total:data.totalResults, loading:false}))
    }
    render(){
         return(
            <MainContent className="container">
                 <Search search={this.searchMovies}/>
                {!this.state.loading? (<>{this.state.total && <h1>Total:{this.state.total}</h1>}<Movies movies={this.state.movies}/></>) : <Loader/>}
            </MainContent>
        )
    }
}


const MainContent = styled.div`
     min-height: calc(100vh - 140px);
    `