import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

interface TProps {
    type: 'up' | 'down';
}

interface BProps {
    isActive: boolean;
    type: 'up' | 'down';
}

export const Container = styled.View<BProps>`
    width: 100%;

    border: ${({ isActive }) => isActive ? 0 : 1.5}px ${({ theme }) => theme.colors.text};
    border-radius: 5px;
    flex-direction: row;
    align-items: center;

    ${({ isActive, type }) => isActive && type === 'up' && css`
        background-color: ${({ theme }) => theme.colors.success_light};
        border: 1.5px solid ${({ theme }) => theme.colors.success};
    `}

    ${({ isActive, type }) => isActive && type === 'down' && css`
        background-color: ${({ theme }) => theme.colors.attention_light};
        border: 1.5px solid ${({ theme }) => theme.colors.attention};
    `}
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Button = styled(RectButton)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 16px;

`;

export const Icon = styled(Feather) <TProps>`
    font-size: ${RFValue(24)}px;
    margin-right: 12px;
    color: ${({ theme, type }) => type === 'up' ? theme.colors.success : theme.colors.attention}
`;