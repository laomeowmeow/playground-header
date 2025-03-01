import { Container, Typography } from "@mui/material";
import { useState } from "react";

export default function HomePage() {
    const [headerName, setHeaderName] = useState('');

    return (
        <Container
            maxWidth="sm"
        >
            <Typography
                variant="h4"
                margin={"2rem"}
                alignContent={"center"}
                alignItems={"center"}
            >Welcome to the Home Page</Typography>
        </Container>
    )
}

