import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons';

export const Container = styled(RectButton).attrs({
    activeOpacity: 0.7
})`
    background-color: ${({ theme }) => theme.colors.shape};
    width: 100%;
    padding: 18px 16px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    border-radius: 5px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text_dark};
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.text};
`;