import React from 'react';
import { HStack, IStackProps } from '../../primitives';
import { useThemeProps } from '../../../hooks';

const AppBarRight = ({ ...props }: IStackProps) => {
  const { color } = useThemeProps('AppBar', props);
  return (
    <HStack
      alignItems="center"
      justifyContent="flex-end"
      color={color}
      {...props}
    />
  );
};

export default AppBarRight;
