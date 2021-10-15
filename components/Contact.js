import { css } from '@emotion/react';
import { useState } from 'react';

const formStyle = css`
  background-image: url('/pictures/flowers.png');

  h2 {
    text-align: center;
    font-size: 40px;
    margin-bottom: 50px;
    margin-top: 90px;
  }
  span {
    color: #dc3545;
  }
`;

const formWraper = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    padding: 15px 55px;
    outline: none;
    border: none;
    border-radius: 30px;
    border: 1px solid #dc373d;
    color: #fff;
    font-weight: bold;
    margin: 0 auto;
    background-color: #dc373d;
    margin-top: 50px;
    margin-bottom: 50px;
    cursor: pointer;

    &:hover {
      color: #dc373d;
      background-color: transparent;
    }
  }
`;

const inputStyle = css`
  border: 0;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 25px;
  padding-left: 25px;
  width: 100%;

  border: 1px solid #bbbbbb;
  outline: none;
  color: #101010;

  &:last-of-type {
    height: 100px;
  }
`;

const formContainer = css`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 15px;
`;
export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [textarea, setTextarea] = useState('');
  return (
    <div css={formStyle}>
      <div css={formContainer}>
        <h2>
          Contact <span>US</span>
        </h2>
        <form css={formWraper}>
          <input
            css={inputStyle}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
            name="firstName"
            required
          />
          <input
            css={inputStyle}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            name="lastName"
            required
          />
          <input
            css={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            type="email"
            name="email"
            required
          />
          <input
            css={inputStyle}
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
            placeholder="Enter your message here"
            name="textarea"
            required
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
