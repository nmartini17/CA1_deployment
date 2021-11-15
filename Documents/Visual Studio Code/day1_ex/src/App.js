import logo from './logo.svg';
import './App.css';
import upper, {text1,text2, text3} from "./file1";
import person from "./file2";
import {males} from "./file2";
import {females} from "./file2";
import {objv2} from './file2';
import {Welcome} from './file3';
import {MultiWelcome} from './file3';


function App() {
const {firstName, email} = person;
const alleSammen = [...males,"Kurt", "Helle", ...females, "Tina"]
console.log(alleSammen)
console.log(objv2)



  return (
    <div className="App">
      <h2>Ex 1</h2>
      <p>{upper("Please uppercase me")}</p>
      <p>{upper(text1)}</p>
      <p>{upper(text2)}</p>
      <p>{upper(text3)}</p>

      <h2>Ex 2</h2>
      <p>{firstName}</p>
      <p>{email}</p>

      <h2>Ex 3</h2><MultiWelcome/>
      
    </div>
  );
}
export default App;
