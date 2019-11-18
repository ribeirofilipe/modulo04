import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component {
  state = {
    newTech: '',
    techs: []  
  }

  componentDidMount() {
    const techs = JSON.parse(localStorage.getItem('techs'));

    if (techs) {
      this.setState({ techs: techs});
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }

  componentWillUnmount() {

  }

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ 
      techs: [ ...this.state.techs, this.state.newTech ],
      newTech: '',
    })  
  }

  handleDelete = tech => {
    this.setState({techs: this.state.techs.filter(x => x !== tech)})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
        </ul> 
        <input 
          type="text" 
          onChange={this.handleInputChange} 
          value={this.state.newTech} 
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;