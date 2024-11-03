// import { application } from 'express';
import './App.css'
import { useForm } from 'react-hook-form';
function App() {
  const { register, handleSubmit, watch, setError,formState: { errors,isSubmitting } } = useForm();
  const delay=(d)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve();
      },d*1000)
    })
  }
  const onSubmit = async (data)=> {
    await delay(0);
    let r= await fetch("http://localhost:3000/",{method:"POST", headers:{"Content-Type":"application/json"},body:JSON.stringify({data:data })});
    let res=await r.text();
    // if(data.username !== "Hadi Ahmed"){
    //   setError("formError",{message:"Invalid Credentials"})
    // }
    console.log(data,res);
  }
  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("username",
          {required:true,minLength:{value:5,message:"To short"},
          maxLength:{value:16,message:"Too Long"}})} type='text' placeholder='user name'/>
          {errors.username && <div>Invalid Username:{errors.username.message}</div>}
          <input {...register("pasword")} type="text" placeholder='password'/>
          <input disabled={isSubmitting} type="submit" value="Submit" name="email" id=''/>
        </form>
      </div>
      {isSubmitting && <div>Loading</div>}
      {/* {errors.formError && <div>{errors.formError.message}</div>} */}
    </>
  )
}

export default App
