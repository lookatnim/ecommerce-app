import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, Typography } from '@mui/material';

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().min(2, 'Too Short!').required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const Register = () => {
  const { register } = useAuth();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      marginTop={12}
    >
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          register(values.email);
          setSubmitting(false);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <Box display="flex" flexDirection="column" gap={2} width="300px">
              {/* Name Field */}
              <Field
                as={TextField}
                name="name"
                label="Name"
                variant="outlined"
                fullWidth
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />

              {/* Email Field */}
              <Field
                as={TextField}
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />

              {/* Password Field */}
              <Field
                as={TextField}
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                fullWidth
              >
                Register
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Register;
