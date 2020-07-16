// import React from 'react';
// import './App.css';
// import Plant from './Plant'

// class App extends React.Component {
//   state = {
//     plants: [],
//     plantUrl: '',
//     plant: []
//   }

//   async componentDidMount(){
//     const apiKey = "QlpFSHNxR0JMcjM3ZDd0THNJaTZEQT09";
//     try{
//       const res = await fetch("https://cors-anywhere.herokuapp.com/https://trefle.io/api/plants?page_size>=5", {
//             method: "GET",
//             headers: {
//               Accept: "application/json",
//               "Content-Type": "application/json",
//               Authorization: "Bearer " + apiKey
//             }
//           })
//           const data = await res.json();
//           this.setState({
//             plants: data
//           })
//           const fullPlantList = [];
//           for(let p of data){
//             const plantRes = await fetch(`https://cors-anywhere.herokuapp.com/${p.link}`,{
//               method: "GET",
//               headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//                 Authorization: "Bearer " + apiKey
//               }
//             });
//             const plantData = await plantRes.json()
//             fullPlantList.push(plantData)
//             this.setState({
//               plant:fullPlantList
//             })
//           }
//     }catch(e){
//       console.log(e)
//     }
//   }

//   renderPlants = () => {
//     return this.state.plant.map(p=>{
//       return <Plant key={p.id} plant={p} />
//     })
//   }

//   render(){
//   return (
//     <div>
//       <h1>Hello World</h1>
//       {this.renderPlants()}
//     </div>
//   );
// }}

// export default App;
import React from 'react';
import SessionStatus from "./components/SessionStatus"
import Routes from './components/Routes';


function App() {
  return (
    <div className="App">
      <SessionStatus />
      <Routes />
    </div>
  );
}

export default App;