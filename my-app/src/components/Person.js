import React from 'react'

const Person = ({ person }) => {
    return (
        <>
            <h1>Name: {person.name}</h1>
            <p>Age: {person.age}</p>
        </>
    )
}

export default Person
