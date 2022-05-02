import React from "react";
import { Control, Controller } from "react-hook-form";

import { TextInputProps } from "react-native";

import { Input } from '../Input';
import { Container } from './styles';

interface Props extends TextInputProps {
    control: Control;
    name: string;
}

export const InputForm = ({ control, name, ...rest }: Props) => {
    return (
        <Container>
            <Controller
                control={control}
                rules={{
                    required: true
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        {...rest}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name={name}
            >
            </Controller>
        </Container>
    )
}