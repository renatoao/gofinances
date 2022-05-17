import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title, Icon, Button } from "./styles";

const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle'
}

interface TBProps extends RectButtonProps {
    title: string;
    type: 'up' | 'down';
    isActive: boolean;
}

export const TransactionTypeButton = ({ title, type, isActive, ...rest }: TBProps) => {
    return (
        <Container type={type} isActive={isActive}>
            <Button {...rest}>
                <Icon name={icons[type]} />
                <Title>{title}</Title>
            </Button>
        </Container>
    )
}