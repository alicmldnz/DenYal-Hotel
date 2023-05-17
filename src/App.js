import "./App.css";
import moment from "moment";
import {
    Center,
    Stack,
    Grid,
    Container,
    Flex,
    SimpleGrid,
    Button,
    Image,
    NumberInput,
} from "@mantine/core";
import React, { useState } from "react";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

function App() {
    const [dates, setDates] = useState([]);
    console.log(dates);
    return (
        <div>
            <Stack
                className="header"
                justify="flex-start"
                spacing="xs"
                h={800}
                sx={(theme) => ({
                    backgroundColor:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                })}
            >
                <Grid className="top-menu">
                    <Grid.Col span={2}>
                        <h1 className="left-head">DenYal Hotel</h1>
                    </Grid.Col>
                    <Grid.Col span={8}>
                        <Flex
                            mih={100}
                            gap="md"
                            justify="center"
                            align="center"
                            direction="row"
                            wrap="wrap"
                        >
                            <Button>Ana Sayfa</Button>
                            <Button>Hizmetlerimiz</Button>
                            <Button>Odalar</Button>
                            <Button>Spa & Fitness</Button>
                            <Button>Kurumsal</Button>
                            <Button>İletişim</Button>
                        </Flex>
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <Flex
                            mih={100}
                            gap="md"
                            justify="flex-end"
                            align="center"
                            direction="row"
                            wrap="wrap"
                        >
                            <Button>Kayıt Ol</Button>
                            <Button>Giriş Yap</Button>
                        </Flex>
                    </Grid.Col>
                </Grid>
                <h3 className="hero-sub">
                    Sadece bir tıkla Bodrum'un güzelliğiyle iç içe keyifli bir
                    tatile başlayın. Kolayca rezervasyonunuzu hemen yapın
                </h3>
                <Center maw={400} h={100} mx="auto">
                    <Button radius="lg" size="md">
                        Hemen Başla
                    </Button>
                </Center>
            </Stack>
            <Stack
                justify="flex-start"
                spacing="xs"
                h={800}
                sx={(theme) => ({
                    backgroundColor:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                })}
            >
                <Grid>
                    <Center>
                        <Grid.Col span={3}>
                            <h3>Online Rezervasyon</h3>
                        </Grid.Col>
                    </Center>
                    <Grid.Col span={3}>
                        <Center maw={400} h={100} mx="auto">
                            <RangePicker />
                        </Center>
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <Center maw={400} h={100} mx="auto">
                            <NumberInput
                                placeholder="Yetişkin Sayısı"
                                max={120}
                                min={0}
                            />

                            <NumberInput placeholder="Çocuk Sayısı" min={0} />
                        </Center>
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <Center maw={400} h={100} mx="auto">
                            <Button>Rezervasyon Yap</Button>
                        </Center>
                    </Grid.Col>
                </Grid>
            </Stack>
            <Container size="md" px="xs">
                <SimpleGrid cols={2} spacing="xs">
                    <div>
                        <h1>Odalarımız</h1>
                        <p>
                            Herkese uygun, kendinizi evinizde hissedeceğiniz
                            konforlu odalarımızla hizmetinizdeyiz.
                        </p>
                    </div>
                    <div>
                        <Image
                            width={550}
                            height={400}
                            mx="auto"
                            radius="md"
                            src="assets/images/cift-kisilik-oda.jpg"
                            alt="cift kisilik oda"
                        />
                    </div>
                    <div>
                        <Image
                            width={450}
                            height={600}
                            mx="auto"
                            radius="md"
                            src="assets/images/suit-oda.jpg"
                            alt="cift kisilik oda"
                        />
                    </div>
                    <div>
                        <Image
                            width={450}
                            height={500}
                            mx="auto"
                            radius="md"
                            src="assets/images/cift-kisilik-büyük.jpg"
                            alt="cift kisilik oda"
                        />
                    </div>
                </SimpleGrid>
            </Container>

            <Stack
                justify="flex-start"
                spacing="xs"
                h={800}
                sx={(theme) => ({
                    backgroundColor:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                })}
            ></Stack>
        </div>
    );
}

export default App;
