import { Container, Box, Typography, Grid } from "@mui/material";
import DrawerMenu from "../components/drawerMenu";

export default function HomePage() {
  const introParagraph =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  const infographySubtitle =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  return (
    <>
      {/* Navigation Bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          position: "fixed",
          top: 30,
          right: { xs: 0, sm: 10, md: 10 }, // Responsive positioning
          zIndex: 1200,
        }}
      >
        <DrawerMenu />
      </Box>

      {/* Header Section */}
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: "#f5f5f5",
          padding: { xs: 5, sm: 4, md: 3 }, // Adjust padding for different screens
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem", lg: "5rem" },
            marginTop: { xs: "3rem", md: "5rem" },
            marginBottom: { xs: "1rem", md: "2rem" },
          }}
        >
          Welcome to the Home Page
        </Typography>

        <Box
          sx={{ margin: "auto", width: { xs: "100%", sm: "90%", md: "80%" } }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
            }}
          >
            {introParagraph}
          </Typography>
        </Box>
      </Container>

      {/* Infography Section */}
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: "#e3e3e3",
          padding: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: 600,
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            marginBottom: { xs: "1rem", md: "2rem" },
          }}
        >
          Section: Infography
        </Typography>

        {/* Responsive Grid Layout */}
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {[1, 2].map((item) => (
            <Grid item xs={12} sm={6} key={item}>
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: { xs: 2, sm: 3 },
                  borderRadius: "8px",
                  textAlign: "center",
                  boxShadow: 2,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontSize: { xs: "1rem", sm: "1.2rem" } }}
                >
                  {infographySubtitle}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
