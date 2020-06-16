import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'

const initialMemberList = [
  {
    username: "",
    email: "",
    role: "",
  },
]

const initailFormValues = {
  username: "",
  email: "",
  role: "",
}
function App() {
  const [member, setMember] = useState(initialMemberList)
  const [formValues, setFormValues] = useState(initailFormValues)
  const [error, setError] = useState('')

  const onInputChange = event =>{
    const {name, value} = event.target
    setFormValues({
      ...formValues,
      [name]: value,
    })

  }
  const onSubmit = event =>{
    event.preventDefault();
    if(!formValues.username || !formValues.email || !formValues.role){
      setError('You need to fill the right info')
      return
    }
    const newMember = {...member}
    setMember(member =>[newMember, ...member]
    )
  }

  const Member = ({list}) =>(
    <div className="member-container">
      <h3>{list.username}</h3>
      <p>Email:{list.email} </p>
      <p>Role: {list.role} </p>
    </div>
  )

  return (
    <div className="App">
      <header className="App-header">
        <h1>Member App</h1>     
        <span style={{color:'red'}}>{error} </span>
      </header>
      <div className="container">
        <div>
          <Form 
            value={formValues}
            onInputChange={onInputChange}
            onSubmit={onSubmit}
          />
        </div>
        <div className="member-container">
          <h3>Member List</h3>
          {
            member.map(mem =>{
              console.log (mem)
             return <Member key={mem.username} list={mem} />
            })
          }
          
        </div>

      </div>
    </div>
    
  );
}

export default App;
