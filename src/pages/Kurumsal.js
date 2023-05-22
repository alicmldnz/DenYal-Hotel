import React from "react";
import MainLayout from "../layout/MainLayout";
import { Center, Stack, Grid, Container, Image } from "@mantine/core";

function Iletisim() {
    return (
        <MainLayout>
            <Stack
                style={{ paddingTop: "100px" }}
                ustify="flex-start"
                spacing="xs"
                h={1000}
                sx={(theme) => ({
                    backgroundColor:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                })}
            >
                <Container size="xl" px="lg">
                    <Center>
                        <h1>Eşsiz bir Hikaye</h1>
                    </Center>
                    <Grid>
                        <Grid.Col span={6}>
                            <Image
                                width={610}
                                height={500}
                                mx="auto"
                                radius="md"
                                src="assets/images/hotel1.jpg"
                                alt="hotel"
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <p style={{ fontSize: "20px" }}>
                                Phoenix Sun’da size ve ailenize lüksü ve konforu
                                yaşatacak her şey en ince detayına kadar
                                düşünüldü.
                            </p>
                            <p style={{ fontSize: "20px" }}>
                                Muhteşem spor ve eğlence aktiviteleriyle her
                                günü dolu dolu geçireceğiniz Phoenix Sun’da, en
                                değerli varlığınız çocuklarınız da rüyalarındaki
                                tatili yaşıyor.
                            </p>
                            <p style={{ fontSize: "20px" }}>
                                Denizin, güneşin ve doğanın eşsiz hisleri,
                                yüksek konfor, kusursuz bir lüks ve mükemmel
                                servis anlayışıyla size özel anılarla dolu
                                unutulmaz tatili Phoenix Sun’da yaşayın.
                            </p>
                        </Grid.Col>
                    </Grid>
                </Container>
            </Stack>
        </MainLayout>
    );
}

export default Iletisim;
