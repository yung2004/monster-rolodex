import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'


class App extends Component {
  constructor() {
    super();
    this.state = { 
      monsters: [],
      searchField: ''
    };
    //this.handleChange = this.handleChange.bind(this);
  }

  //handleChange(e) {
  handleChange = e => {
    this.setState({searchField: e.target.value });
  }

  componentDidMount() {
    console.log("call fetch")
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users })  );
  }


  render() {
    const { monsters, searchField } = this.state;   // js destructuring
    const filteredmonsters = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox  placeholder='search monsters' handleChange={this.handleChange}  />
        <CardList monsters={filteredmonsters}>
        </CardList>        
      </div>
    ); 
  }
}
export default App;
