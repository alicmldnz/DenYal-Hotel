import React from "react";
import { useState } from "react";
import MainLayout from "../layout/MainLayout";
import { Input, Stack, Flex, Container } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { PasswordInput, Button } from "@mantine/core";

function GirisYap() {
    const [value, setValue] = useState("");
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
                        <h1>Giriş Yapın</h1>

                        <Input
                            style={{ width: "500px" }}
                            size="lg"
                            icon={<IconAt />}
                            placeholder="E-Mailinizi giriniz"
                        />

                        <PasswordInput
                            placeholder="Şifrenizi giriniz"
                            style={{ width: "500px" }}
                            size="lg"
                            value={value}
                            onChange={(event) =>
                                setValue(event.currentTarget.value)
                            }
                        />

                        <Button size="md"> Giriş Yap</Button>
                    </Flex>
                </Container>
            </Stack>
        </MainLayout>
    );
}
export default GirisYap;
