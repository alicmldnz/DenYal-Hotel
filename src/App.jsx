import "./App.css";
import moment from "moment";
import {
    Center,
    Stack,
    Grid,
    rem,
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

            <Container className="odalarımız-container" size="xl" px="lg">
                <Grid className="odalarımız-baslık">
                    <Grid.Col span={12}>
                        <Center>
                            <h1>Odalarımız</h1>
                        </Center>
                        <Center>
                            <p>
                                Herkese uygun, kendinizi evinizde hissedeceğiniz
                                konforlu odalarımızla hizmetinizdeyiz.
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
                                Odanızın yanı başında güneşlenebilir, serin suya
                                kendinizi bırakabilirsiniz.
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
                            <h2 className="hizmetler-baslık">Formda Kalın</h2>
                            <p className="hizmetler-metin">
                                Fitness Salonumuz ile spor yapmaya ara vermeden
                                tatilinizi yapabilirsiniz.
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

            <Stack
                justify="flex-start"
                spacing="xs"
                h={600}
                sx={(theme) => ({
                    backgroundColor: theme.colors.dark[3],
                })}
            >
                <Container size="xl" px="lg">
                    <h1>Bize Ulaşın</h1>
                    <Grid>
                        <Grid.Col span={6}>
                            <h3>İletişim Bilgileri</h3>
                            <p>
                                <strong>Telefon:</strong> +90 (252) 426 59 33
                            </p>
                            <p>
                                <strong>E-Posta:</strong>{" "}
                                info@denyalhotelbodrum.com
                            </p>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <h3>Adres Bilgileri</h3>
                            <p>
                                Gürbet Mahallesi, Orgeneral Kemal Kayacan Cd.
                                No:25, 23424 Bodrum/MUĞLA
                            </p>
                        </Grid.Col>
                    </Grid>
                </Container>
            </Stack>
        </div>
    );
}

export default App;
