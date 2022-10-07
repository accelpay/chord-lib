import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button({
  backgroundColor: '#333',
  color: '#fff',
  borderRadius: '4px',
  height: '45px',
  width: '80px',
  fontSize: '16px',
  fontWeight: 'bolder',
  border: 'none',
  textTransform: 'uppercase',
  cursor: 'pointer',
});

export default (props: any) => <Button {...props}>{props.children}</Button>;
