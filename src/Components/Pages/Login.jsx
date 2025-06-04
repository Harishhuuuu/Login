import React from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import toast from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import NavBar from '../NavbarContainer/NavBar';
import Logo from '../NavbarContainer/Logo';
import Menu from '../NavbarContainer/Menu';
import f1 from "../assets/f1.jpeg"

const Login = () => {

    let [Eye,setEye]=useState(false);
    let handleeye=()=>{
      setEye(!Eye);
    }

    const [password, setPassword] = useState('');
    const [username, setusername] = useState('');
    const correctpassword = "07/02/2004";
    const correctusername = "harish";
    let navigate=useNavigate();

    let [loading,setloading]=useState(false);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
      const handleusernameChange = (e) => {
        setusername(e.target.value);
      };


    function checkpassword(){
        // var username = document.getElementById("username").value;
        // var password = document.getElementById("password1").value; 
        if (username==correctusername && password==correctpassword){
            navigate("/Home");
        }
        else if(username==correctusername && password==correctpassword){
            navigate("");
        }
        else{
            alert("wrong password");
        }
    }


  return (
    <div>



    <div className='h-full'>
    <div style={{ backgroundImage:`url("src/Components/assets/f1.jpeg")`,height:"1500px", backgroundSize:"cover",backgroundPosition:"center",Width:"100%",backgroundRepeat:"no-repeat",}} className='w-full h-[100vh] flex items-center justify-center'>
          <img style={{ backgroundImage:`url("src/Components/assets/f1.jpeg")`,height:"100%", backgroundSize:"cover",backgroundPosition:"center",Width:"100%",backgroundRepeat:"no-repeat",}} src={f1} className='w-full h-full relative'/>
  <article className='h-[400px] w-[300px] absolute top-[30%] rounded-md bg-black text-3xl text-[#E9A5F1]'>
      <form onSubmit={checkpassword}>
      <h2 className='font-extrabold text-[#E9A5F1] text-center border-b-4 border-[#E9A5F1] pb-3'>Log In</h2>

      <section className=''>
                <label  className=' text-2xl font-bold pl-6'>UserName</label>
                <section className="flex justify-center"><input value={username} onChange={handleusernameChange}  name='Username' type="text" id="Username" className='border-[#E9A5F1] w-[280px] border-3 '/></section>
            </section>
            <section className=''>
                <label className=' text-2xl font-bold pl-6'>Password</label>
                <section className="flex justify-center relative">
                  <input itemID='password1' value={password} onChange={handlePasswordChange} name='password' type={Eye?"password":"text"} id="password" className='border-[#E9A5F1] w-[280px] z-0 border-3'/>
                  <section className='flex justify-center items-center ml-2 z-10 absolute right-[10%] top-[17%]'>
                    <div onClick={handleeye}>
                      {Eye?<FaEye/>:<FaEyeSlash/>}
                    </div>
                    </section>
                </section>
            </section>
            <section className='flex justify-center w-full mt-6'>
                <button className='border-[#E9A5F1] border-3 rounded-2xl h-[20%] w-[40%] hover:bg-[#E9A5F1] ease-in-out hover:w-[90%] transition-all  duration-[2s] hover:text-[black] text-2xl font-bold' type='submit'>{loading?"...":"Log In"}</button>
            </section>
      </form>
  </article>
</div>
</div>
</div>
  )
}

export default Login