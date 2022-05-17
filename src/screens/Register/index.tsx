import React, { useState } from "react";
import { Keyboard, Modal, Text, TouchableWithoutFeedback } from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useForm } from "react-hook-form";

import { Button } from "../../components/Forms/Button";
import { InputForm } from "../../components/Forms/InputForm";

import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
import { CategorySelectButton } from "../../components/Forms/CategorySelectButton";

import { CategorySelect } from "../CategorySelect";

import { Container, Header, Title, Form, Fields, TransactionsTypes } from "./styles";

interface FormData {
    nome: string;
    valor: string;
}

export const Register = () => {

    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
    });

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            nome: '',
            valor: ''
        }
    });

    const handleTransactionTypeSelect = (type: 'up' | 'down') => {
        setTransactionType(type);
    }

    const handleOpenCategorySelect = () => {
        setCategoryModalOpen(true);
    }

    const handleCloseCategorySelect = () => {
        setCategoryModalOpen(false);
    }

    const handleRegister = (form: FormData) => {
        const data = {
            name: form.nome,
            amount: form.valor,
            transactionType,
            category: category.key
        }

        console.log(data)
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header>
                    <Title>Cadastro</Title>
                </Header>
                <Form>
                    <Fields>
                        <InputForm
                            name="nome"
                            control={control}
                            placeholder="Nome"
                            autoCapitalize="sentences"
                            autoCorrect={false}
                        />
                        {errors.nome && <Text>This is required.</Text>}
                        <InputForm
                            name="valor"
                            control={control}
                            placeholder="Preço"
                            keyboardType="numeric"
                        />
                        {errors.valor && <Text>This is required.</Text>}
                        <TransactionsTypes>
                            <GestureHandlerRootView>
                                <TransactionTypeButton isActive={transactionType === 'up'} title="Entrada" type="up" onPress={() => handleTransactionTypeSelect('up')} />
                            </GestureHandlerRootView>
                            <GestureHandlerRootView>
                                <TransactionTypeButton isActive={transactionType === 'down'} title="Saída" type="down" onPress={() => handleTransactionTypeSelect('down')} />
                            </GestureHandlerRootView>
                        </TransactionsTypes>
                        <GestureHandlerRootView>
                            <CategorySelectButton onPress={handleOpenCategorySelect} title={category.name} />
                        </GestureHandlerRootView>
                    </Fields>
                    <GestureHandlerRootView>
                        <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
                    </GestureHandlerRootView>
                </Form>

                <Modal visible={categoryModalOpen}>
                    <CategorySelect
                        category={category}
                        setCategory={setCategory}
                        closeSelectCategory={handleCloseCategorySelect}
                    />
                </Modal>
            </Container>
        </TouchableWithoutFeedback>
    )
}