import React from "react";
import { useState } from "react";
import MainLayout from "../layout/MainLayout";
import { Input, Stack, Flex, Container } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { PasswordInput, Button } from "@mantine/core";
import { useId } from "@mantine/hooks";

function KayıtOl() {
    const [value, setValue] = useState("");
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
                        <h1>Kayıt Olun</h1>

                        <Input.Wrapper id={id} label="Adı">
                            <Input
                                style={{ width: "500px" }}
                                size="lg"
                                id={id}
                                placeholder="Adınızı giriniz"
                            />
                        </Input.Wrapper>
                        <Input.Wrapper id={id} label="Soyadı:">
                            <Input
                                style={{ width: "500px" }}
                                size="lg"
                                id={id}
                                placeholder="Soyadınızı giriniz"
                            />
                        </Input.Wrapper>
                        <Input
                            style={{ width: "500px" }}
                            size="lg"
                            icon={<IconAt />}
                            placeholder="E-Mailinizi giriniz"
                            required
                        />

                        <PasswordInput
                            placeholder="Şifrenizi giriniz"
                            style={{ width: "500px" }}
                            size="lg"
                            value={value}
                            onChange={(event) =>
                                setValue(event.currentTarget.value)
                            }
                            required
                        />

                        <Button size="md">Kayıt Ol</Button>
                    </Flex>
                </Container>
            </Stack>
        </MainLayout>
    );
}
export default KayıtOl;
