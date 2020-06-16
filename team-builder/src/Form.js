import React from 'react'


function Form(props) {
    const {
        values,
        onInputChange,
        onSubmit,
    } = props


return (
    
    <form className="form-member-container" onSubmit={onSubmit}>
        <div className="member-submit">
            <h2> Add Member</h2>
            <button>Submit</button>
        </div>
        <div className="member-input">
            <h4>Information</h4>
            <label>Name:&nbsp;
                <input 
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={onInputChange}
                    maxLength='100'
                />
            </label>
            <label htmlFor='emailInput'>Email:&nbsp;
                <input 
                    type="email"
                    name="email"
                    placeholder="email@example"
                    value={values.email}
                    onChange={onInputChange}
                />
            </label>

            <label>Role:&nbsp;
                <select 
                    name="role"
                    value={values.role}
                    onChange={onInputChange}
                >
                    <option value="Select Role">--Select--</option>
                    <option>
                        Computer Engineer
                            <option> Full Stack WebDeveloper</option>
                            <option> Backend Engineer</option>
                            <option> FrontEnd Engineer</option>
                            <option> Web Designer</option>
                            <option> Data Science</option>
                            <option> iOS Development</option>
                    </option>
                    <option>Doctor</option>
                    <option>Teacher</option>
                    <option>Finacial Manager</option>

                </select>

            </label>


        </div>
    </form>
)
   
}
export default Form;
