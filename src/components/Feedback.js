import React, { useState } from 'react';


const Feedback = () => {

    const [formData, setFormdata] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        address: '',
        phoneNumber: '',

    });
    // const [isvalidPhoneNum,setIsValidPhoneNum]=useState(true);
    // const [isValidEmail,setIsValidEmail] =useState(true);

    // const handlePhoneNum=(e)=>{
    //     setIsValidPhoneNum()
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Feedback submitted", formData);
        setFormdata({
            firstName: '',
            lastName: '',
            email: '',
            country: '',
            address: '',
            phoneNumber: '',
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formData, [name]: value });
    }

    return (
        <div className='feedback-form'>
            <h3>Thankyou so much for taking the time!</h3>
            <h5>Please Provie the below details </h5>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='firstName'>First name :</label>
                    <div>
                    <input
                        type='text'
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    </div>
               
                </div>

                <div className='form-group'>
                    <label htmlFor='LastName'>Last name :</label>
                    <div>
                    <input
                        type='text'
                        name='LastName'
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    </div>
                 
                </div>

                <div className='form-group'>
                    <label htmlFor='address'>Address :</label>
                    <div>
                    <textarea
                        type='text'
                        name='Address'
                        value={formData.address}
                        onChange={handleChange}
                    />
                    </div>
                
                </div>
                <div className='form-group'>
                    <label htmlFor='country'>Country:</label>
                    <div>
                    <input
                        type='text'
                        name='country'
                        value={formData.country}
                        onChange={handleChange}
                    />
                    </div>
               
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email Id:</label>

                    <div>  
                          <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                    /></div>
                
                </div>
                <div className='form-group'>
                    <label htmlFor='phoneNumber'>Phone :</label>
                    <div>
                    <input
                        type='tel'
                        name='phoneNumber'
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                    </div>
            
                </div>
                <div>
                <button type='submit'>submit</button>
                </div>
             
            </form>
        </div>
    )
}
export default Feedback;