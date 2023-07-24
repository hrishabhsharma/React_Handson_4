import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Student = () => {
    const [Data] = useState([
        {
            Name : 'John',
            Age: 24,
            Course : 'MERN',
            Batch : 'October',
            Change : 'Edit',
        },
        {
            Name : 'Doe',
            Age: 25,
            Course : 'MERN',
            Batch : 'November',
            Change : 'Edit',
        },
        {
            Name : 'Biden',
            Age: 26,
            Course : 'MERN',
            Batch : 'September',
            Change : 'Edit',
        },
        {
            Name : 'Barar',
            Age: 22,
            Course : 'MERN',
            Batch : 'September',
            Change : 'Edit',
        },
        {
            Name : 'Christ',
            Age: 23,
            Course : 'MERN',
            Batch : 'October',
            Change : 'Edit',
        },
        {
            Name : 'Elent',
            Age: 24,
            Course : 'MERN',
            Batch : 'November',
            Change : 'Edit',
        }
    ])
  return (
        <main>
            <div id='Caption'>
                <h1>Students Details</h1>
                <p id='AddNew'>Add New Student</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Course</td>
                        <td>Batch</td>
                        <td>Change</td>
                    </tr>
                </thead>
                <tbody>
                {
                    Data.map((item,index) =>{
                        return(
                            <tr key={index} className='DataTable'>
                                <td>{item.Name}</td>
                                <td>{item.Age}</td>
                                <td>{item.Course}</td>
                                <td>{item.Batch}</td>
                                <td><NavLink exact to="#" >{item.Change}</NavLink>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </main>
  )
}

export default Student



