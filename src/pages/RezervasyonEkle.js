import React from "react";
import { useState } from "react";
import MainLayout from "../layout/MainLayout";
import {
    Input,
    Stack,
    Flex,
    Container,
    NumberInput,
    Center,
} from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { PasswordInput, Button } from "@mantine/core";
import { useId } from "@mantine/hooks";
import { NativeSelect } from "@mantine/core";
import "../App.css";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

function RezervasyonEkle() {
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
                        <h1>Rezervasyon Ekleyin</h1>

                        <NativeSelect
                            className="inputs"
                            data={["Suit", "Ekonomik", "Standart"]}
                            label="Oda türü seçiniz."
                            size="lg"
                            withAsterisk
                        />
                        <Input.Wrapper id={id} label="Adı">
                            <Input
                                className="inputs"
                                size="lg"
                                id={id}
                                placeholder="Rezervasyon sahibinin adını giriniz"
                            />
                        </Input.Wrapper>
                        <Input.Wrapper id={id} label="Soyadı:">
                            <Input
                                className="inputs"
                                size="lg"
                                id={id}
                                placeholder="Rezervasyon sahibinin soyadını giriniz"
                            />
                        </Input.Wrapper>

                        <RangePicker className="inputs" />

                        <NumberInput
                            className="inputs"
                            placeholder="Yetişkin Sayısı"
                            max={120}
                            min={0}
                        />

                        <NumberInput
                            className="inputs"
                            placeholder="Çocuk Sayısı"
                            min={0}
                        />

                        <Button size="md">Rezervasyon Oluştur</Button>
                    </Flex>
                </Container>
            </Stack>
        </MainLayout>
    );
}
export default RezervasyonEkle;
