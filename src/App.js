import React from 'react';
import CardList from './Components/CardList';
import SearchBox from './Components/SearchBox'
import './css/App.css';
import Scroll from './Components/Scroll'

class App extends React.Component{
    constructor(){
        super();
        this.state={
            robots:[],
            searchField:''
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response=>{
                    return response.json();
            })
            .then(
                users=>{
                    return this.setState({robots:users});
            })
    }
    onSearchChange=(event)=>{
        this.setState({searchField:event.target.value});
    }
    render(){
        const filteredRobots=this.state.robots.filter(r=>{
            return r.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        return(
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
    }
};

export default App;