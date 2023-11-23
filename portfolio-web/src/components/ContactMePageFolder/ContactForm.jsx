import React, {useState} from 'react'

const ContactForm = () => {
    // // Using state to record changes in input to give form functionality
    // const [inputs, setInputs] = useState({
    //     name: '',
    //     message: '',
    //     email:'',
    //     subject:''
  
    //   });
  
    // const [errors, setErrors] = useState({}); // State to store validation errors
    // const [sentEmail, setSentEmail] = useState(false)
  
    //       //Stores information submitted from form as an object
    //   const handleChange = (e) => {
    //     const { name, value} = e.target;

    //     setInputs({ ...inputs, [name]: value });
    //     };
  
    //   const validateForm = (inputs) => {
    //     const newErrors = {};
  
    //     if (!inputs.name.trim()) {
    //       newErrors.name = 'Please enter your name';
    //     }
    
    //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     if (!inputs.email.trim()) {
    //       newErrors.email = 'Please enter your email address';
    //     } else if (!emailPattern.test(inputs.email.trim())) {
    //       newErrors.email = 'Invalid email format';
    //     }
    
    //     if (!inputs.message.trim()) {
    //       newErrors.message = 'Please enter a message';
    //     }

    //     setErrors(newErrors); // Update the validation errors state
  
    //     // Check if there are any errors in the newErrors object
    //     return Object.keys(newErrors).length === 0;
    
    //   };

    //   const handleSubmit = async (e) => {
    //       e.preventDefault();
  
    //     // Perfoming input validation, if fields are not empty
    //     //and the correct format will send email else asks you to re-enter information
    //   if (!validateForm(inputs)) {
  
    //     try {
    //       const response = await fetch('/send-email', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(inputs),
    //       });
    
    //       if (response.ok) {
    //         alert('Email sent successfully');
    //         // Reset the form or show a success message
    //       } else {
    //         alert('Failed to send email');
    //         // Handle the error, show an error message, etc.
    //       }
    //     } catch (error) {
    //       console.error('Error:', error);
    //       // Handle network errors, if any
    //     }
  
    //     console.log('Your form has been submitted');
    //   } else {  
    //     console.log('Form validation failed');
    //   }         
    //     };
  
  
  
  return (
    <form className='contact-form' netlify
    // onSubmit={handleSubmit}
    >
            <input type="text" placeholder='Email' name='email' value={inputs.email} onChange={handleChange}/>

            {/* Conditonally renders a message telling you to enter valid input if the form field fails validation */}
            {errors.email && <div className="error">{errors.email}</div> }

            <input type="text" name='name' placeholder='Name' value={inputs.name} onChange={handleChange}/>
            {errors.name && <div className="error">{errors.name}</div> }

            <input type="text" placeholder='Subject' name='subject' value={inputs.subject} onChange={handleChange}/>
            <textarea type="longInput" id="" cols="30" rows="10" placeholder='Message'
            name='message' value={inputs.message} onChange={handleChange}></textarea>
            {errors.message && <div className="error">{errors.message}</div> }

            <button type='submit'>Send</button>

    </form>
  )
}

export default ContactForm
