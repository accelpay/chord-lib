import React from 'react';
import styled from '@emotion/styled';

const Input = styled.input({
  borderStyle: 'none',
  border: '1px solid #333',
  borderRadius: '4px',
});

export default (props: any) => <Input {...props} />;
