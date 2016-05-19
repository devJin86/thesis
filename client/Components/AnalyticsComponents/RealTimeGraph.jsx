import React from 'react';
<<<<<<< HEAD
import d3 from '../../../node_modules/d3/d3.v4.0.0-alpha.33.min.js';
import graph from './visualizations/RealTimeGraphD3.js';

=======
import graph from './visualizations/RealTimeGraphD3.js';
>>>>>>> parent of e693d49... ready to push real time data visualization

export default class RealTimeGraph extends React.Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.graph = graph(this.props.data);
<<<<<<< HEAD
    window.addEventListener('resize', this.chart.resize);
  }

  shouldComponentUpdate(nextProps) {
    this.graph.update(nextProps.data);
    return false;
  }

=======
    // this.graph.update(this.props.data);
    window.addEventListener('resize', this.chart.resize);
  }


>>>>>>> parent of e693d49... ready to push real time data visualization
  render() {
    let style = {
<<<<<<< HEAD
      width: '80%',
      height: '100%',
      'left': '300px',
=======
      width: '700px',
      height: '500px',
      position: 'absolute',
      left: 300,
>>>>>>> parent of e693d49... ready to push real time data visualization
    }
    return (

      <div>
        <canvas id='graph' style={style}>
          {this.graph}
        </canvas>
      </div>
    );
  }
}
