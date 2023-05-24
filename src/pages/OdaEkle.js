import React from "react";
import MainLayout from "../layout/MainLayout";
import {
    Input,
    Stack,
    Flex,
    Container,
    NumberInput,
    Button,
} from "@mantine/core";

import { useId } from "@mantine/hooks";
import "../App.css";

function OdaEkle() {
    const id = useId();
    return (
        <MainLayout>
            <Stack
                style={{ paddingTop: "100px" }}
                ustify="flex-start"
                spacing="xs"
                h={800}
                sx={(theme) => ({
                    backgroundColor:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                })}
            >
                <Container>
                    <Flex
                        height={500}
                        gap="md"
                        justify="flex-start"
                        align="center"
                        direction="column"
                        wrap="nowrap"
                    >
                        <h1>Oda Ekleyin</h1>

                        <Input.Wrapper id={id} label="Oda Türü">
                            <Input
                                className="inputs"
                                size="lg"
                                id={id}
                                placeholder="Oda türünü giriniz"
                            />
                        </Input.Wrapper>

                        <NumberInput
                            className="inputs"
                            placeholder="Oda kaç kişilik?"
                            max={120}
                            min={0}
                        />

                        <Button size="md">Oda oluştur</Button>
                    </Flex>
                </Container>
            </Stack>
        </MainLayout>
    );
}
export default OdaEkle;
