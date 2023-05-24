import "./App.css";
import {
    Center,
    Stack,
    Grid,
    Container,
    Button,
    Image,
    NumberInput,
} from "@mantine/core";
import React from "react";
import MainLayout from "./layout/MainLayout";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

function App() {
    return (
        <div>
            <MainLayout>
                <Stack
                    className="header"
                    justify="flex-start"
                    spacing="xs"
                    h={1100}
                    sx={(theme) => ({
                        backgroundColor:
                            theme.colorScheme === "dark"
                                ? theme.colors.dark[8]
                                : theme.colors.gray[0],
                    })}
                >
                    <h3 className="hero-sub">
                        Sadece bir tıkla Bodrum'un güzelliğiyle iç içe keyifli
                        bir tatile başlayın. Kolayca rezervasyonunuzu hemen
                        yapın
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
                    h={200}
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

                                <NumberInput
                                    placeholder="Çocuk Sayısı"
                                    min={0}
                                />
                            </Center>
                        </Grid.Col>
                        <Grid.Col span={2}>
                            <Center maw={400} h={100} mx="auto">
                                <Button>Rezervasyon Yap</Button>
                            </Center>
                        </Grid.Col>
                    </Grid>
                </Stack>

                <Container className="odalarımız-container" size="xl" px="lg">
                    <Grid className="odalarımız-baslık">
                        <Grid.Col span={12}>
                            <Center>
                                <h1>Odalarımız</h1>
                            </Center>
                            <Center>
                                <p>
                                    Herkese uygun, kendinizi evinizde
                                    hissedeceğiniz konforlu odalarımızla
                                    hizmetinizdeyiz.
                                </p>
                            </Center>
                        </Grid.Col>
                    </Grid>
                    <Grid>
                        <Grid.Col span={4}>
                            <Image
                                width={410}
                                height={400}
                                mx="auto"
                                radius="md"
                                src="assets/images/cift-kisilik-oda.jpg"
                                alt="cift kisilik oda"
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <Image
                                width={410}
                                height={600}
                                mx="auto"
                                radius="md"
                                src="assets/images/suit-oda.jpg"
                                alt="cift kisilik oda"
                            />
                        </Grid.Col>

                        <Grid.Col span={4}>
                            <Image
                                width={410}
                                height={500}
                                mx="auto"
                                radius="md"
                                src="assets/images/cift-kisilik-büyük.jpg"
                                alt="cift kisilik oda"
                            />
                        </Grid.Col>
                    </Grid>
                    <Center className="odalarımız-incele">
                        <Button
                            variant="outline"
                            color="orange"
                            radius="md"
                            size="md"
                        >
                            İncele
                        </Button>
                    </Center>
                </Container>

                <Stack
                    justify="flex-start"
                    spacing="xs"
                    h={1460}
                    sx={(theme) => ({
                        backgroundColor:
                            theme.colorScheme === "dark"
                                ? theme.colors.dark[8]
                                : theme.colors.gray[0],
                    })}
                >
                    <Container size="xl" px="lg">
                        <Center className="hizmetler">
                            <h1>Hizmetler</h1>
                        </Center>
                        <Grid>
                            <Grid.Col span={6}>
                                <Image
                                    width={510}
                                    height={400}
                                    mx="auto"
                                    radius="md"
                                    src="assets/images/havuz.jpg"
                                    alt="havuz"
                                />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <h2 className="hizmetler-baslık">Serinleyin</h2>
                                <p className="hizmetler-metin">
                                    Odanızın yanı başında güneşlenebilir, serin
                                    suya kendinizi bırakabilirsiniz.
                                </p>
                                <Button
                                    variant="outline"
                                    color="gray"
                                    radius="md"
                                    size="md"
                                >
                                    İncele
                                </Button>
                            </Grid.Col>
                        </Grid>
                        <Grid>
                            <Grid.Col span={6}>
                                <h2 className="hizmetler-baslık">Yenilenin</h2>
                                <p className="hizmetler-metin">
                                    Spa ve Masaj hizmetlerimizle rahatlayın ve
                                    tatile yeni biri olarak başlayın.
                                </p>

                                <Button
                                    variant="outline"
                                    color="gray"
                                    radius="md"
                                    size="md"
                                >
                                    İncele
                                </Button>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Image
                                    width={510}
                                    height={400}
                                    mx="auto"
                                    radius="md"
                                    src="assets/images/spa.jpg"
                                    alt="havuz"
                                />
                            </Grid.Col>
                        </Grid>
                        <Grid>
                            <Grid.Col span={6}>
                                <Image
                                    width={510}
                                    height={400}
                                    mx="auto"
                                    radius="md"
                                    src="assets/images/fitness.jpg"
                                    alt="havuz"
                                />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <h2 className="hizmetler-baslık">
                                    Formda Kalın
                                </h2>
                                <p className="hizmetler-metin">
                                    Fitness Salonumuz ile spor yapmaya ara
                                    vermeden tatilinizi yapabilirsiniz.
                                </p>
                                <Button
                                    variant="outline"
                                    color="gray"
                                    radius="md"
                                    size="md"
                                >
                                    İncele
                                </Button>
                            </Grid.Col>
                        </Grid>
                    </Container>
                </Stack>
            </MainLayout>
        </div>
    );
}

export default App;
