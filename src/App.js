import React,{Component} from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Content from './Content/Content'
class App extends Component {

  state= {
    statistics : [
      {num : "100k+", text : "Total Downloads"},
      {num : "10k+", text : "Postive Reviews"},
      {num : "50k+", text : "Daily Visitors"},
      {num : "0.02%", text : "Uninstallation Rate"},
      {num : "15k+", text : "Pro Users"}
    
    ]
  }

  randomNum = () => {
    let random= Math.floor(Math.random()*100);
    return random;
  }

  randomNumberHandler = () => {
    this.setState(
      {num : this.randomNum()},
      {num : this.randomNum()},
      {num : this.randomNum()},
      {num : "0.02%"},
      {num : this.randomNum()}
    )
  }

  render () {
    return (
      <div>
        <Navbar />
        <button onClick = {this.randomNumberHandler}>Switch</button>
        <Content 
          num1={this.state.statistics[0].num} text1 = {this.state.statistics[0].text} 
          num2={this.state.statistics[1].num} text2 = {this.state.statistics[1].text}
          num3={this.state.statistics[2].num} text3 = {this.state.statistics[2].text}
          num4={this.state.statistics[3].num} text4 = {this.state.statistics[3].text}
          num5={this.state.statistics[4].num} text5 = {this.state.statistics[4].text}
        />
      </div>
  );
}
}
export default App;
