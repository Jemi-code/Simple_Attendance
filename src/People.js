import React from "react";

const People = (props) => {
    let peopleDatas = props.characterData.map((person, index) => {
              return <div className="one" key={index}>
                   <h2>{person.name}</h2>
                   <h3>{person.title}</h3>
                   <p>{person.department}</p>
                   <small>{person.id}</small>
                   <button onClick={() => props.removeData(index)}>Remove</button>
                 </div>
           });

    let peopleData = props.characterData ? peopleDatas : null;
  return (
    <div className="people">
      {peopleData}
    </div>
  );
};

export default People;
