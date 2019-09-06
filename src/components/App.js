import React from 'react';
import SearchBar from './SearchBar';
import YoutubeAPI from '../api/youtube';

class App extends React.Component{
    onSearchSubmit=async (term)=>{
        const response=await YoutubeAPI.get('/search',{params:{q:term}});
        console.log(response);
    }
    render(){
        return(
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
            </div>
        )
    }
}

export default App;