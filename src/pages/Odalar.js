import React from "react";
import MainLayout from "../layout/MainLayout";
import { Center, Stack, Grid, Container, Button, Image } from "@mantine/core";
function Odalar() {
    return (
        <MainLayout>
            <Stack
                style={{ paddingTop: "100px" }}
                ustify="flex-start"
                spacing="xs"
                h={1600}
                sx={(theme) => ({
                    backgroundColor:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                })}
            >
                <Container size="xl" px="lg">
                    <Center>
                        <h1>Odalarımız</h1>
                    </Center>
                    <Center style={{ padding: "20px" }}>
                        <p>
                            Bütün odalaramızda Klima, Banyo, Tv ve İnternet
                            bulunmaktadır.
                        </p>
                    </Center>
                    <Grid>
                        <Grid.Col span={6}>
                            <Image
                                width={510}
                                height={400}
                                mx="auto"
                                radius="md"
                                src="assets/images/cift-kisilik-büyük.jpg"
                                alt="çift kişilik büyük oda"
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <h2 className="hizmetler-baslık">Standart</h2>
                            <p className="hizmetler-metin">
                                Çift kişilik odamızda konforunuzdan ödün
                                vermeden tatilinizi yapın.
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
                            <h2 className="hizmetler-baslık">Ekonomik</h2>
                            <p className="hizmetler-metin">
                                Çift kişilik ve üç kişilik ekonomik odalarımızda
                                bütçenize uygun rahatığın tadına bakın.
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
                                src="assets/images/cift-kisilik-oda.jpg"
                                alt="çift kişilik oda"
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
                                src="assets/images/suit-oda.jpg"
                                alt="havuz"
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <h2 className="hizmetler-baslık">Suit</h2>
                            <p className="hizmetler-metin">
                                Suit odalarımızda lüks ve rahatlığın senteziyle
                                tatilinizi yapın.
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
    );
}

export default Odalar;
