import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextField, Button, Box, Typography, Container } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';





const Registration = ({ expired }) => {

  const schema = yup.object().shape({
    firstName: yup.string().required("first name is required"),
    lastName: yup.string().required("last name is required"),
    childBirthday: yup.date().required("Please enter you child's date of birth"),
    email: yup.string().email("Enter a valid email").required("Email is required"),
    age: yup.number().positive().integer().min(18, "Must be at least 18").required("Age is required"),
    password: yup.string().min(4, "Min 4 characters").max(20, "Max 20 characters").required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords don't match")
      .required("Confirm your password"),
  })

  const { control, register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      {/* Header */}
      <header
        className="relative text-center py-8 shadow-2xl"
        style={{
          background: `linear-gradient(135deg, #957FEF 0%, #7161EF 50%, #150946 100%)`,
          color: '#FFF1EA'
        }}
      >
        <div className="animate-fadeIn">
          <h1
            className="text-4xl font-bold mb-4 drop-shadow-2xl"
            style={{ fontFamily: 'Belanosima, sans-serif' }}
          >
            Registration
          </h1>
          <div
            className="w-32 h-1 mx-auto rounded-full shadow-lg"
            style={{ background: 'linear-gradient(90deg, #B79CED, #DEC0F1)' }}
          ></div>
        </div>
      </header>

      {expired ? (
        <Typography align="center" sx={{ mt: 4 }}>
          Registrations are closed. The enrollment date for next semester will be announced soon.
          Please visit the website for updates. Thank you!
        </Typography>
      ) : (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
          <Typography variant="h4"  align="center" gutterBottom>
            Register for Fall 2025
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >

            <Typography variant="h4" align="center" gutterBottom>
              Child's Information
            </Typography>

            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              {...register("firstName")}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />

            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              {...register("lastName")}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />

            <Typography variant="h5" align="center" gutterBottom>
              Child's Date of Birth
            </Typography>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Controller
              name="childBirthday"
              control={control}
              render={({field }) => (
                 <DatePicker
                  label="Date of Birth"
                  {...field}
                />
              )}>

              

               
              </Controller>

            </LocalizationProvider>


            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <TextField
              label="Age"
              type="number"
              variant="outlined"
              fullWidth
              {...register("age")}
              error={!!errors.age}
              helperText={errors.age?.message}
            />

            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />

            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              {...register("confirmPassword")}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />

            <Button
              variant="contained"
              type="submit"
              sx={{
                mt: 2,
                background: "linear-gradient(90deg, #B79CED, #DEC0F1)",
                color: "#150946",
                fontWeight: "bold",
                borderRadius: "12px",
                py: 1.5,
              }}
            >
              Submit
            </Button>
          </Box>
        </Container>
      )}
    </>
  )
}

export default Registration
