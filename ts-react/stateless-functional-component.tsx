import React from 'react';

type Person = {
  name: string;
  age: number;
};

const PersonDetails: React.SFC<Person> = person => (
  <div>
    <h1>{person.name}</h1>
    <p>{person.age}</p>
  </div>
);

const jared = { name: 'Jared', age: 40 };

const UsePerson = () => {
  // return <PersonDetails foo="bar" />; // !! <-- error!
  return <PersonDetails {...jared} />;
};

const GreetPerson: React.SFC<{ person: Person }> = props => (
  <h1>
    Hello {props.person.name}, you are {props.person.age} years old!
  </h1>
);

const UseGreetPerson = () => <GreetPerson person={jared} />;
