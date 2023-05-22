import React from "react";
import { Stack, Grid, Flex, Button } from "@mantine/core";
import { Link } from "react-router-dom";

function MenuBar() {
    return (
        <Stack
            className="top-menu"
            justify="flex-start"
            spacing="xs"
            h={100}
            sx={(theme) => ({
                backgroundColor: theme.colors.dark[1],
            })}
        >
            <Grid>
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
                        <Link to="/">Ana Sayfa</Link>
                        <Link to="/Odalar">Odalar</Link>
                        <Link to="/SpaFitness">Spa & Fitness</Link>
                        <Link to="/Kurumsal">Kurumsal</Link>
                        <Link to="/Iletisim">İletişim</Link>
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
        </Stack>
    );
}

export default MenuBar;
