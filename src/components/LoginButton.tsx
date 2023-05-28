import React from 'react';
import { Button, IButtonProps } from 'native-base';
import { ReactNode } from 'react';

interface ButtonProps extends IButtonProps {
    children: ReactNode;
    autoSize?: boolean;
    color?: string;
}

export function LoginButton({ children, autoSize = false, color, ...rest }: ButtonProps) {
    return (
        <Button
            width={autoSize ? 'auto' : '50%'}
            backgroundColor={color || '#4d94ff'}
            marginTop={10}
            fontSize={20}
            fontWeight="bold"
            borderRadius="lg"
            _text={{ color: 'white' }}
            {...rest}>
            {children}
        </Button>
    );
}
