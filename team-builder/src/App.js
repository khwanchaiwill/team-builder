import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Form'
import {v4 as uuid} from 'uuid'

const initialMemberList = [
  {
    id: uuid(),
    username: "Khwanchai Phaipha",
    email: "porpan00@hotmail.com",
    role: "Full stack Student",
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
    event.preventDefault()
    if(!formValues.username || !formValues.email || !formValues.role){
      setError('You need to fill the right info')
      return 
    }
    const newMember = {...formValues, id: uuid()}
    setMember(member =>[newMember, ...member])
    setFormValues(initailFormValues)
    
  }

 
  const makeStyle = (m, b, w,) =>{
   return {
     div: {
       margin: m,
       border: b,
       width: w,
     }
   }
 }
 
 const Member = ({list}) =>(
      <div className="member-container">
        
        <h3>{list.username}</h3>
        <p>
          <span className="member-container-span">Email:</span> {list.email} 
        </p>
        <p> <span className="member-container-span">Role:</span> {list.role} </p>
        <button >Edit</button>
      </div>
      
 )

  useEffect(() =>{
    console.log('clean after first')
    
  }, [])
  useEffect(() =>{
    console.log()
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Member</h1>     
        <span style={{color:'red'}}>{error} </span>
      </header>
      <div className="container">
        <div className="form-container">
          <Form 
            value={formValues}
            onInputChange={onInputChange}
            onSubmit={onSubmit}
        
          />
        </div> 
        <div style={makeStyle( '0% 10%','70%', 'solid', 'flex', 'wrap').div} >
          <h3>Member List</h3>
          {
            member.map(mem =>{
             return <Member key={mem.username} list={mem}  
            />

            })
          } 
        
        </div>
      </div>
    </div>
    
  );
}

export default App;
