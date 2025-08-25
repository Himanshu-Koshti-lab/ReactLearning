import React, { version } from 'react'

export default function UserCard() {

    let name = "Himanshu Koshti";

    let explist = [
        {skill: 'Java', version: 21},
        {skill: 'Springboot', version: 3},
        {skill: 'React', version: 19},
        {skill: 'Js', version: 0},
    ]

    const listItems = explist.map(title => 
        <li key={title.skill}> {title.skill} with version {title.version}</li>
    )

  return (
    <div className='card'>
        <p>User {name}</p>
        <p>List of skills with their experience</p>
        <ul>{listItems}</ul>
    </div>
  )
}
