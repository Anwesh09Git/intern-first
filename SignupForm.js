import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignupForm = ({ role, switchForm }) => {
  const SignupSchema = Yup.object().shape({
    phone: Yup.string().required('Required'),
    email: Yup.string().email().required('Required'),
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Required'),
  });

  const handleSignup = (values) => {
    console.log('Signup as', role, values);
    // Dummy API call
  };

  return (
    <Formik
      initialValues={{
        phone: '', email: '', firstName: '', lastName: '',
        password: '', confirmPassword: '', 
        RelationshipWithChild: '', Address: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={handleSignup}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          <Text style={styles.heading}>Register as {role}</Text>

          <Text>Phone Number</Text>
          <TextInput style={styles.input} onChangeText={handleChange('phone')} value={values.phone} />

          <Text>Email</Text>
          <TextInput style={styles.input} onChangeText={handleChange('email')} value={values.email} />
          <Text>First Name</Text>
          <TextInput style={styles.input} onChangeText={handleChange('firstName')} value={values.firstName} />
          <Text>Last Name</Text>
          <TextInput style={styles.input} onChangeText={handleChange('lastName')} value={values.lastName} />
          <Text>Relationship with Child</Text>
          <TextInput style={styles.input} onChangeText={handleChange('RelationshipwithChild')} value={values.RelationshipWithChild} />
          <Text>Address</Text>
          <TextInput style={styles.input} onChangeText={handleChange('Address')} value={values.Address} />
          <Text>Password</Text>
          <TextInput style={styles.input} secureTextEntry onChangeText={handleChange('password')} value={values.password} />
          <Text>Confirm Password</Text>
          <TextInput style={styles.input} secureTextEntry onChangeText={handleChange('confirmPassword')} value={values.confirmPassword} />

          <Button onPress={handleSubmit} title="Sign Up" />
          <Text style={styles.link} onPress={switchForm}>Already have an account? Login ({role})</Text>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 15,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
  },
  link: {
    marginTop: 10,
    color: 'blue',
    textAlign: 'center',
  },
});

export default SignupForm;

