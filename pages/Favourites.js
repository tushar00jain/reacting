import React from "react";
import { connect } from 'react-redux';
import 'babel-polyfill'
import {Line as LineChart} from 'react-chartjs';

var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};

class Favourites extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <h1>Favourites</h1>
        <LineChart data={data} height="389" width="778"/>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return state;
}
export default connect(mapStateToProps)(Favourites)

// const Favourites = props => {
//  return (
//    <div>
//      <h1>Favourites</h1>
//    </div>
//  )
// }
//
// export default Favourites;
