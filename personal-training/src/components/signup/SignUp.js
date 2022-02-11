import React from 'react';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from './SignUpElements';

const SignUp = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>FitForAll</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Account sign up page</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput
                type='email'
                required
                placeholder='Please enter your email...'
              />
              <FormLabel>Password</FormLabel>
              <FormInput
                type='password'
                placeholder='Please enter your password...'
              />
              <FormLabel>Confirm Password</FormLabel>
              <FormInput
                type='password'
                placeholder='Please enter your password...'
              />
              <FormButton type='submit'>Continue</FormButton>
                <Text to='/signin'>Already have a account?</Text>
             
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;
