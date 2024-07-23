import img from '../imgs/40c007c647ea8034751aec3d7d283fa4.png';
import './login.css'
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

import { login } from './Apiservice'; // Adjust the import path as needed
import React, { useState } from 'react';


// function Login(){
//     const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleCreateAccountClick = () => {
//     navigate('/create-account'); // Navigate to the CreateAccount route
//   };

//   const handleForgotPasswordClick = () => {
//     navigate('/forgot-password'); // Navigate to the ForgetPassword route
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log('Form submitted with:', { email, password });
//     try {
//       const response = await login(email, password);
//       console.log('API response:', response);
//       if (response.success) {
//         localStorage.setItem('token', response._token);
//         console.log('Token saved to localStorage');
//         navigate('/dashboard'); // Adjust the path as needed
//       }
//     } catch (error) {
//       console.error('Login failed:', error.message);
//       setError(error.message);
//     }
//   };

// const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log('Form submitted with:', { email, password });
//     try {
//       const response = await login(email, password);
//       console.log('API response:', response);
//       if (response.success) {
//         localStorage.setItem('token', response._token);
//         console.log('Token saved to localStorage');
//         navigate('/dashboard'); // Adjust the path as needed
//       }
//     } catch (error) {
//       console.error('Login failed:', error.message);
//       setError(error.response ? error.response.data.faild : 'An unexpected error occurred');
//     }
//   };
  

//     return(
//         <>
//         <div className="container-login">

//             <div className="img-login">
//                 <img src={img} className='background' alt='imgLogin'/>
//             </div>

//             <div className="add-login">
//                 <h1>!مرحبا ياشباب</h1>
//                 <div className='btn-login'>
//                     <button id='create-btn' className='btn' onClick={handleCreateAccountClick}>انشاء حساب </button>
//                     <button id='log-btn' className='btn'>تسجيل دخول</button>
//                 </div>


//                 <div className='input-login'>
//                     <h2>هيا سجل دخولك</h2>
//                     <form onSubmit={handleSubmit}>
//                     <div className='input-name'>
//                         <input type='email' placeholder='الاسم' value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required/>
//                         <input type='password'  placeholder='الرقم السري' value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required/>
//                         <button className='forgetpass-btn' onClick={handleForgotPasswordClick}>هل نسيت كلمه المرور؟</button>
//                         {error && <div className="error-message">{error}</div>}
//                         <button className='submit-btn'>تسجيل الدخول</button>

//                     </div>
//                     </form>
//                 </div>

//             </div>
//         </div>
//         </>

//     );
// }

// export default Login;


import './login.css';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login(email, password);
      if (response.success) {
        localStorage.setItem('token', response._token);
        navigate('/navbar'); // Adjust the path as needed
      } else {
        setError('Login failed: ' + (response.faild || 'Unknown error'));
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="container-login">
        <div className="img-login">
          <img src={img} className='background' alt='imgLogin'/>
        </div>
        <div className="add-login">
          <h1>!مرحبا ياشباب</h1>
          <div className='btn-login'>
            <button id='create-btn' className='btn' onClick={() => navigate('/create-account')}>انشاء حساب</button>
            <button id='log-btn' className='btn'>تسجيل دخول</button>
          </div>
          <div className='input-login'>
            <h2>هيا سجل دخولك</h2>
            <div className='input-name'>
              <input
                type='text'
                placeholder='البريد الالكتروني'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type='password'
                placeholder='الرقم السري'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className='forgetpass-btn' onClick={() => navigate('/forgot-password')}>هل نسيت كلمه المرور؟</button>
              <button className='submit-btn' onClick={handleSubmit}>تسجيل الدخول</button>
              {error && <p className="error-message">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;