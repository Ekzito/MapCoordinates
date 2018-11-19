import React, { Component } from 'react';
import './App.css';

import AddPointForm from './components/AddPointForm';
import PointsList from './components/PointsList'
import MapFrame from './components/MapFrame'


class App extends Component {
  constructor() {
    super()
    this.key = 0
  }
  state = {
    points: []
  }

  getKey() {
    return this.key++
  }

  pointAdd(coordinates) {
    let points = [...this.state.points, {coordinates: coordinates, key:this.getKey()}];

    this.setState({points})
  }

  deletePoint(key) {
    let points = this.state.points.filter((point) => point.key !== key);

    this.setState({points})
  }

  render() {
    return (
      <div className="App">
      <div className='app-points-container'>
        <AddPointForm pointAdd={this.pointAdd.bind(this)}></AddPointForm>
        <PointsList deletePoint={this.deletePoint.bind(this)} points={this.state.points}></PointsList>
      </div>
        <MapFrame lastPoint={this.state.points[this.state.points.length - 1]} points={this.state.points}></MapFrame>
      </div>
    );
  }
}

export default App;
