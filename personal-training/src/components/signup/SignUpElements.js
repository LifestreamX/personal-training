import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #aa0108;

  @media screen and (max-width: 480px) {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  } ;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 440px) {
    height: 80%;
    margin-top: 30px;
  } ;
`;

export const Icon = styled(LinkRouter)`
  margin-left: 32px;
  margin-right: 32px;
  margin-top: 32px;

  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 1);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  } ;
`;

export const FormH1 = styled.h1`
  color: #fff;
  margin-bottom: 40px;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  color: #fff;
  font-size: 14px;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  outline: none;
`;

export const FormButton = styled.button`
  background: #aa0108;
  padding: 16px 0;
  border: none;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
`;

export const Text = styled(LinkRouter)`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
  text-decoration: none;
`;
