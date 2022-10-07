import React from 'react';
import styled from '@emotion/styled';

const Input = styled.input({
  borderStyle: 'none',
  border: '2px solid #181e22',
  borderRadius: '4px',
  padding: '12px',
  fontFamily: 'Roboto,system-ui,sans-serif',
  fontSize: '16px',
  width: 'calc(100% - 90px)',
  height: '45px',
  marginRight: '10px',
  fontWeight: 'bolder',
});

export default (props: any) => <Input {...props} />;
