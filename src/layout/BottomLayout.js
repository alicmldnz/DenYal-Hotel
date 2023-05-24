import React from "react";
import { Grid, Stack, Container } from "@mantine/core";

function BottomLayout() {
    return (
        <Stack
            className="bottomlayout"
            justify="flex-start"
            spacing="xs"
            h={600}
        >
            <Container size="xl" px="lg">
                <div style={{ paddingTop: "120px" }}>
                    <h1>Bize Ulaşın</h1>
                </div>
                <div style={{ paddingTop: "40px" }}>
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
                </div>
            </Container>
        </Stack>
    );
}

export default BottomLayout;
