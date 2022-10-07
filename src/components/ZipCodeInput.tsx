import React, { useState } from 'react';
import styled from '@emotion/styled';
import Button from './Button';
import Input from './Input';

const Form = styled.form({
  display: 'flex',
  margin: '20px 0',
  width: '100%',
});

const ZipCodeInput = ({ submitZip }: any) => {
  const [zip, setZip] = useState<string>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitZip(zip);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setZip(e.currentTarget.value)
        }
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default ZipCodeInput;
