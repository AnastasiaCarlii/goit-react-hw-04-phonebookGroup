import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormWrap = styled(Form)`
  padding: 15px 25px 30px;
  border: none;
`;

export const FormInput = styled(Field)`
  font-size: 14px;
  color: black;
`;
export const InputName = styled.label`
  display: flex;
  margin-bottom: 10px;

  flex-direction: column;
  font-size: 18px;
  color: black;
`;

export const SubmitBtn = styled.button`
  font-size: 20px;
  margin-top: 20px;
  border-radius: 5px;
  border: none;
  background-color: white;
  cursor: pointer;
  align-items: center;
  appearance: none;
  background-color: #fcfcfd;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395a;
  cursor: pointer;
  display: inline-flex;
  font-family: 'JetBrains Mono', monospace;
  height: 20px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;

  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const ErrMessage = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  font-size: 14px;
  color: red;
`;
