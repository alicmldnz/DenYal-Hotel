import React from "react";
import MainLayout from "../layout/MainLayout";
import { Input, Stack, Flex, Container, Button } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { IMaskInput } from "react-imask";
import { useId } from "@mantine/hooks";
import { NativeSelect } from "@mantine/core";
import "../App.css";

function KullanıcıEkle() {
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
                        <h1>Kullanıcı Ekleyin</h1>
                        <NativeSelect
                            className="inputs"
                            data={["Çalışan", "Misafir"]}
                            label="Kullanıcı türü seçiniz."
                            size="lg"
                            withAsterisk
                        />
                        <Input.Wrapper id={id} label="Adı">
                            <Input
                                className="inputs"
                                size="lg"
                                id={id}
                                placeholder="Kullanıcı adını giriniz"
                            />
                        </Input.Wrapper>
                        <Input.Wrapper id={id} label="Soyadı">
                            <Input
                                className="inputs"
                                size="lg"
                                id={id}
                                placeholder="Kullanıcı soyadını giriniz"
                            />
                        </Input.Wrapper>
                        <Input
                            className="inputs"
                            size="lg"
                            icon={<IconAt />}
                            placeholder="E-Mailinizi giriniz"
                            required
                        />{" "}
                        <Input.Wrapper id={id} label="Numara">
                            <Input
                                className="inputs"
                                size="lg"
                                component={IMaskInput}
                                mask="+90 (000) 000-00-00"
                                id={id}
                                placeholder="Kullanıcı telefon numarasını giriniz"
                            />
                        </Input.Wrapper>
                        <Button size="md">Kullanıcı Oluştur</Button>
                    </Flex>
                </Container>
            </Stack>
        </MainLayout>
    );
}
export default KullanıcıEkle;
