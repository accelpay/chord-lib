import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button({
  backgroundColor: '#333',
  color: '#fff',
  borderRadius: '4px',
});

export default (props: any) => <Button {...props}>{props.children}</Button>;
