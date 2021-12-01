import React, {Component} from 'react';
import styled from 'styled-components'
class Search extends Component {
    constructor(props) {
        super(props);
    }
    state={
        search:'supermen',
        type:'all',
    }
    handleKey = (e)=>{
        if(e.key === 'Enter'){
            this.props.search(this.state.search,this.state.type)
        }
    }
    handleFilter = (e)=>{
        this.setState(()=>({type:e.target.dataset.type}),()=>{
            this.props.search(this.state.search,this.state.type)
        })
    }
    render() {
        return (
            <>
            <div className="row">
                <div className="input-field col s12">
                    <input
                        id="password"
                        type="search"
                        placeholder={'Search'}
                        className="validate"
                        name={'search'}
                        value={this.state.search}
                        onChange={e=>this.setState({search:e.target.value})}
                        onKeyDown={this.handleKey}
                    />
                </div>
                <button className={'btn'} onClick={()=> this.props.search(this.state.search,this.state.type)}>Search Movies</button>
            </div>
            <div>
                <Label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="all"
                        onChange={this.handleFilter}
                        checked={this.state.type ==='all'}
                    />
                    <span>All</span>
                </Label>
                <Label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="movie"
                        onChange={this.handleFilter}
                        checked={this.state.type ==='movie'}
                    />
                    <span>Movies Only</span>
                </Label>
                <Label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="series"
                        onChange={this.handleFilter}
                        checked={this.state.type ==='series'}
                    />
                    <span>Series Only</span>
                </Label>
            </div>
            </>
        )
    }
}
const Label = styled.label`
  &:not(:last-child){
    margin-right: 40px;
  }
`
export default Search;