import React from 'react';
import { Input, FormControl } from 'native-base';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

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
                size="xl"
                width="80%"
                borderRadius="lg"
                bgColor="#424242"
                paddingLeft={19}
                margin={2}
                secureTextEntry={secureTextEntry}
                shadow={3}
            />
        </FormControl>
    );
}
