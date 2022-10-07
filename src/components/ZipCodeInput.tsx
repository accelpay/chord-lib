import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';

const ZipCodeInput = ({ submitZip }: any) => {
  const [zip, setZip] = useState<string>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitZip(zip);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setZip(e.currentTarget.value)
        }
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ZipCodeInput;
