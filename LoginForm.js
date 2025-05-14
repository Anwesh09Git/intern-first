import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const LoginForm = ({ role, switchForm }) => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleLogin = (values) => {
    console.log('Login as', role, values);
    // Dummy API call
    // await fetch("https://dummyapi.io/login", { method: "POST", body: JSON.stringify(values) })
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={handleLogin}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View>
          <Text>Phone Number or Email ID</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text>}

          <Text>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          {errors.password && touched.password && <Text style={styles.error}>{errors.password}</Text>}

          <Button onPress={handleSubmit} title="Login" />
          <Text style={styles.link} onPress={switchForm}>New to Smile2Steps? Register ({role})</Text>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  error: { color: 'red', marginBottom: 5 },
  link: { marginTop: 10, color: 'blue', textAlign: 'center' },
});

export default LoginForm;
