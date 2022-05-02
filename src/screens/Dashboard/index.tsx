import React from "react";

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionList
} from "./styles";

import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";

export interface DataListProps extends TransactionCardProps {
    id: string;
}



export const Dashboard = () => {

    const data: DataListProps[] = [
        {
            id: '1',
            type: "entrada",
            title: "Desenvolvimento de Site",
            amount: "R$ 12.000,00",
            date: "22/06/2022",
            category: {
                name: 'Vendas',
                icon: 'dollar-sign'
            }
        },
        {
            id: '2',
            type: "saida",
            title: "Pizza Burguer",
            amount: "R$ 85,50",
            date: "22/06/2022",
            category: {
                name: 'Alimentação',
                icon: 'coffee'
            }
        },
        {
            id: '3',
            type: "saida",
            title: "Aluguel do apartamento",
            amount: "R$ 12.000,00",
            date: "22/06/2022",
            category: {
                name: 'Casas',
                icon: 'shopping-bag'
            }
        },
    ]


    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/3315881?v=4' }} />
                        <User>
                            <UserGreeting>Ola, </UserGreeting>
                            <UserName>Renato</UserName>
                        </User>
                    </UserInfo>

                    <Icon name="power" />
                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightCard type="up" title="Entradas" amount="R$ 17.400,00" lastTransaction="Última entrada dia 13 de abril" />
                <HighlightCard type="down" title="Saídas" amount="R$ 5.250,00" lastTransaction="Última entrada dia 13 de abril" />
                <HighlightCard type="total" title="Total" amount="R$ 85.400,00" lastTransaction="Última entrada dia 13 de abril" />
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>
                <TransactionList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}

                />
            </Transactions>
        </Container >
    )
}