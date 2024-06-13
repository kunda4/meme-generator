import { useState } from "react"

export const FormSubmit = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        passwordConfirm: "",
        joinedDukundeKiliziya: true
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        if(formData.password === formData.passwordConfirm){
            console.log("Successfully sidned up")
        }
        else{
            console.log("Passwords do not match")
            return
        }
        if(formData.joinedDukundeKiliziya){
            console.log("Thanks for joining Dukunde Kiliziya")
        }
    }
    const handleChange = (event) => {
        const {name, value, type, checked} = event.target
        setFormData( prevFormData => ({
            ...prevFormData,
            [name]:type === "checkbox" ? checked : value
        }))
    }
  return (
    <div className="form-container">
        <form action="" className="form" onSubmit={handleSubmit}>
            <input 
                type="email" 
                placeholder="Email Address"
                className="form--input"
                name="email"
                onChange={handleChange} 
                value={formData.email}
            />
            <input 
                type="password"
                placeholder="Password"
                className="form--input"
                name="password"
                onChange={handleChange} 
                value={formData.password}
            />
            <input 
                type="password" 
                placeholder="Confirm Password"
                className="form--input"
                name="passwordConfirm"
                onChange={handleChange}
                value={formData.passwordConfirm} 
            />
            <div className="form--marketing">
            <input 
                id="okayToEmail"
                type="checkbox"
                name="joinedDukundeKiliziya"
                onChange={handleChange} 
                checked= {formData.joinedDukundeKiliziya}
            />
            <label htmlFor="okayToEmail">I want to join Dukunde Kiliziya</label>
            </div>
            <button className="form--submit">
                Sign up
            </button>
        </form>
    </div>
  )
}
