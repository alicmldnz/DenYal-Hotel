import React from "react";
import { Center, Stack, Grid, Flex, Button } from "@mantine/core";

function MenuBar() {
    return (
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
    );
}

export default MenuBar;
