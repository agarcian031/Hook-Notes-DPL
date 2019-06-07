import React, { useState, Fragment  } from 'react'
import '../App.css'

// const User = () =>  {
//   // When turning a class into a function, you can't use this. You can still have functional methods inside like a toggleForm() method but it has to be assigned to a variable and you won't need to use this or a callback() when passing it into props. You just call the variable name because you are storing a method into a variable. 

  
//   // Original 
//   // state = { users: [], toggle: false, title: 'string'}

//   // Using hooks. You can you more than one useState (hook) per variable or piece of state that you may need. 
//   // don't need a component did mount. 
//     const [ users, setUsers] = useState([])
//     // const [ toggle, setToggle] = useState(false)
//     // const [ title, setTitle] = useState('string')

//     const updateUsers = () => {
//       setUsers(someData)
//     }




//   // How react would interact with rails via axios api fetch 
//   // will make a http request to the rails routes and populate the user object with data. 
//   // componentDidMount() {
//   //   axios.get('/api/rails_user_end_point')
//   //   .then( res => {
//   //     this.setState({ users: res.data })
//   //   }) 
//   // }
//     return (
//       <Fragment>
//        <ul>
//          {users.map( user => {
//            <li>{user.name}</li>
//          })}
//        </ul>
//       </Fragment>
//     )
// }

// export default User

// Called state because it will demonstrate the useState component. 

const State = (props) => {
  // built in goBack function given through react router. 
  const goBack = () => props.history.goBack()

  return ( 
  <div className="App">
      <header className="App-header">
        <button onClick={() => goBack()}>Go Back</button>

      </header>
  </div>
)
}

export default State; 