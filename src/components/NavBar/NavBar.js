import React from "react";
import { Stack, Grid, Flex } from "@mantine/core";
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
                        <Link className="navbarlinks" to="/">
                            Ana Sayfa
                        </Link>
                        <Link className="navbarlinks" to="/Odalar">
                            Odalar
                        </Link>
                        <Link className="navbarlinks" to="/SpaFitness">
                            Spa & Fitness
                        </Link>
                        <Link className="navbarlinks" to="/Kurumsal">
                            Kurumsal
                        </Link>
                        <Link className="navbarlinks" to="/Iletisim">
                            İletişim
                        </Link>
                        <Link className="navbarlinks" to="/RezervasyonEkle">
                            Rezervason Ekle
                        </Link>
                        <Link className="navbarlinks" to="/OdaEkle">
                            Oda Ekle
                        </Link>
                        <Link className="navbarlinks" to="/KullanıcıEkle">
                            Kullanıcı Ekle
                        </Link>
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
                        <Link className="navbarlinks" to="/KayıtOl">
                            Kayıt Ol
                        </Link>
                        <Link className="navbarlinks" to="/GirisYap">
                            Giriş Yap
                        </Link>
                    </Flex>
                </Grid.Col>
            </Grid>
        </Stack>
    );
}

export default MenuBar;
