import React from 'react';
import { Input, FormControl } from 'native-base';

interface InputProps {
    label?: string;
    placeholder: string;
    secureTextEntry?: boolean;
    leftIcon?: React.ReactNode;
}

export function Inputs({ label, placeholder, secureTextEntry = false }: InputProps): JSX.Element {
    return (
        <FormControl marginTop={3}>
            {label && <FormControl.Label>{label}</FormControl.Label>}
            <Input
                placeholder={placeholder}
                size="lg"
                width="80%"
                borderRadius="lg"
                bgColor="#424242"
                padding={3}
                margin={2}
                secureTextEntry={secureTextEntry}
                shadow={3}
            />
        </FormControl>
    );
}
