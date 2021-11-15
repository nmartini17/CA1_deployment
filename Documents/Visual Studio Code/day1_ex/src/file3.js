import "./index"
import { persons } from "./file2";

export function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

export function WelcomePerson(props) {
    const { firstName, lastName, email} = props.person

    return <div>
        <h1>{firstName}</h1>
        <h1>{lastName}</h1>
        <h1>{email}</h1>
        </div>
}

export function MultiWelcome() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edith" />
        {persons.map((p)=><WelcomePerson person = {p}/>)}
      </div>
    );
  }  