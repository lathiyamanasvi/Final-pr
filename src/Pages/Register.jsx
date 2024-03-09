import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'


function Register() {

  const [Firstname, setFirstname] = useState('')
  const [Lastname, setLastname] = useState('')
  const [Email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const navigate = useNavigate();
  let URL = `http://localhost:8000/user`;

  const submit = async (e) => {
    e.preventDefault()
    try {
      let { data } = await axios.post(`${URL}`, {
        Firstname: Firstname,
        Lastname: Lastname,
        Email: Email,
        password: password,
        role : 'user'
      });
      alert('user succesfully insert');
      setFirstname('');
      setLastname('');
      setEmail('');
      setpassword('');
      navigate('/');
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  return (
    <>
    <Header/>
      <div>
        <div className="form_wrapper">
          <div className="form_container">
            <div className="title_container">
              <h2>Registration Form</h2>
            </div>
            <div className="row clearfix">
              <div className>
                <form>
                  <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope" /></span>
                    <input type="text" name="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} value={Email} />
                  </div>
                  <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock" /></span>
                    <input type="password" name="password" placeholder="Password" required onChange={(e) => setpassword(e.target.value)} value={password} />
                  </div>
                  <div className="row clearfix">
                    <div className="col_half">
                      <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user" /></span>
                        <input type="text" name="name" placeholder="First Name" onChange={(e) => setFirstname(e.target.value)} value={Firstname} />
                      </div>
                    </div>
                    <div className="col_half">
                      <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user" /></span>
                        <input type="text" name="name" placeholder="Last Name" required onChange={(e) => setLastname(e.target.value)} value={Lastname} />
                      </div>
                    </div>
                  </div>
                  <div className="input_field radio_option">
                    <input type="radio" name="radiogroup1" id="rd1" />
                    <label htmlFor="rd1">Male</label>
                    <input type="radio" name="radiogroup1" id="rd2" />
                    <label htmlFor="rd2">Female</label>
                  </div>
                  <div className="input_field select_option">
                    <select>
                      <option>Select a country</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                    </select>
                    <div className="select_arrow" />
                  </div>
                  <div className="input_field checkbox_option">
                    <input type="checkbox" id="cb1" />
                    <label htmlFor="cb1">I agree with terms and conditions</label>
                  </div>
                  <input className="button" type="button" onClick={submit} defaultValue="submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Register
