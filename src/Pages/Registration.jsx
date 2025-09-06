import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const Registration = ({ expired }) => {

  const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null],"Passwords Don't Match")
      .required(),

  });


  const { register, handleSubmit, formState: { errors } } = useForm(
    { resolver: yupResolver(schema), }
  );


  const onSubmit = (data) => {
    console.log(data)
  }




  return <>

    {expired ? <div> Registrations  are closed. The enrollment date for next semester will be announced soon. Please visit the website for updates. Thank you!</div> :
      <div>
        <h2 className='flex justify-center m-4'>Registration Form</h2>

        <form className=" tutorial flex flex-col gap-2 w-50 justify-self-center text-left " onSubmit={handleSubmit(onSubmit)}>
          <input className='registerFormField' type="text" placeholder="Full Name..." {...register("fullName")} />
          <p className='text-red-600'>{errors.fullname?.message}</p>

          <input className='registerFormField' type="text" placeholder="Email..." {...register("email")} />
          <p className='text-red-600'>{errors.email?.message}</p>


          <input className='registerFormField' type="number" placeholder="Age..." {...register("age")} />
          <p className='text-red-600'>{errors.age?.message}</p>

          <input className='registerFormField' type="password" placeholder="Password..." {...register("password")} />
          <p className='text-red-600'>{errors.password?.message}</p>

          <input className='registerFormField' type="password" placeholder="Confirm Password... " {...register("confirmPassword")}
          />
          <p className='text-red-600'>{errors.confirmPassword?.message}</p>

          <button className=" registerSubmit bg-lightpurple text-darkblue" type="submit" >Submit</button>

        </form>





      </div>}
  </>
}

export default Registration