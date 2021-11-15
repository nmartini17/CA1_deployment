import React, { useState } from "react";

const ContactForm = () => {
  const initialState = { name: "", age: null, email: "" };

  const [person, setPerson] = useState(initialState);

  const handleSubmit = (evt) => {
    alert(JSON.stringify(person));
  };

  const handleInput = (event) => {
    const target = event.target;
    const id = target.id;
    const value = target.value;
    setPerson({ ...person, [id]: value });
  };

  return (
    <div style={{ marginTop: 25 }}>
      <form onSubmit={handleSubmit} onChange={handleInput}>
        <input id="name" type="text" placeholder="Name" value={person.name} />
        <br />
        <input id="age" type="number" placeholder="Age" value={person.age} />
        <br />
        <input
          id="email"
          type="text"
          placeholder="email"
          value={person.email}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      Indhold af person objekt: {JSON.stringify(person)}
    </div>
  );
};

export default ContactForm;
