import React from "react";
import MainLayout from "../layout/MainLayout";
import { Center, Stack, Grid, Container, Image } from "@mantine/core";
function SpaFitness() {
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
                        <h1>Spa & Fitness</h1>
                    </Center>
                    <Center style={{ padding: "20px" }}>
                        <p>Masaj ve Fitness Salonlarımızla hizmetinizdeyiz.</p>
                    </Center>
                    <Grid>
                        <Grid.Col span={6}>
                            <Image
                                width={510}
                                height={400}
                                mx="auto"
                                radius="md"
                                src="assets/images/spa1.jpg"
                                alt="çift kişilik büyük oda"
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Image
                                width={510}
                                height={400}
                                mx="auto"
                                radius="md"
                                src="assets/images/spa-salonu.jpg"
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
                                src="assets/images/spa2.jpg"
                                alt="çift kişilik oda"
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Image
                                width={510}
                                height={400}
                                mx="auto"
                                radius="md"
                                src="assets/images/spa3.jpg"
                                alt="havuz"
                            />
                        </Grid.Col>
                    </Grid>
                    <Grid>
                        <Grid.Col span={6}>
                            {" "}
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
                            <Image
                                width={510}
                                height={400}
                                mx="auto"
                                radius="md"
                                src="assets/images/fitness-salonu.jpg"
                                alt="havuz"
                            />
                        </Grid.Col>
                    </Grid>
                </Container>
            </Stack>
        </MainLayout>
    );
}

export default SpaFitness;
