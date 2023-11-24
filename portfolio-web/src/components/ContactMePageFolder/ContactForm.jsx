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
    <form  name='contactForm' className='contact-form' netlify>
            <input type="hidden" name="form-name" value="contactForm" />
            {/* The hidden input is needed so this form can work with netlify */}

            <input type="text" placeholder='Email' name='email'  />

            <input type="text" name='name' placeholder='Name' />
            <input type="text" placeholder='Subject' name='subject'  />

                <textarea type="longInput" id="" cols="30" rows="10" placeholder='Message'
                name='message' ></textarea>
  

            <button type='submit'>Send</button>

    </form>
  )
}

export default ContactForm
