import React from 'react'


function Form(props) {
    const {
        value,
        onInputChange,
        onSubmit,
    } = props


return (
    
    <form className="form-member-container" onSubmit={onSubmit}>
        <div className="member-submit">
            <h2> Add Member</h2>
           
        </div>
        <div className="member-input">
            <h4>Information</h4>
            <label>Name:&nbsp;
                <input 
                    type="text"
                    name="username"
                    value={value.username}
                    onChange={onInputChange}
                    placeholder="Firstname-Lastname"
                    maxLength='100'
                />
            </label><br/>
            <label htmlFor='emailInput'>Email:&nbsp;
                <input 
                    type="email"
                    name="email"
                    placeholder="email@example"
                    value={value.email}
                    onChange={onInputChange}
                />
            </label><br/>

            <label>Role:&nbsp;
                <select 
                    name="role"
                    value={value.role}
                    onChange={onInputChange}
                >
                    <option value="Select Role">--Select--</option>
                    <option> Computer Engineer </option>
                    <option> Full Stack WebDeveloper</option>
                    <option> Backend Engineer</option>
                    <option> FrontEnd Engineer</option>
                    <option> Web Designer</option>
                    <option> Data Science</option>
                    <option> iOS Development</option>
                    <option>Doctor</option>
                    <option>Teacher</option>
                    <option>Finacial Manager</option>
                    <option>Technician</option>
                </select>
            </label><br/>
            <button>Submit</button>
        </div>
    </form>
)
   
}
export default Form;
