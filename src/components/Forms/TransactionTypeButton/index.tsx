import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title, Icon } from "./styles";

const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle'
}

interface TBProps extends TouchableOpacityProps {
    title: string;
    type: 'up' | 'down';
    isActive: boolean;
}

export const TransactionTypeButton = ({ title, type, isActive, ...rest }: TBProps) => {
    return (
        <Container type={type} {...rest} isActive={isActive}>
            <Icon name={icons[type]} />
            <Title>{title}</Title>
        </Container>
    )
}