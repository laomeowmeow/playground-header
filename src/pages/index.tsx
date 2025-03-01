import { Container, Box, Typography } from "@mui/material";
import DrawerMenu from "../components/drawerMenu";

export default function HomePage() {
  const introParagraph =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <>
      <Container maxWidth="lg" sx={{ backgroundColor: "#f5f5f5", padding: 3 }}>
        {/* Drawer Menu */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            top: 10,
            right: 5,
            marginTop: 2,
            marginBottom: 20,
            position: "fixed",
            zIndex: 1200,
            backgroundColor: "none",
          }}
        >
          <DrawerMenu />
        </Box>

        {/* Main Content */}
        <Box sx={{ textAlign: "center", marginTop: "3rem" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              // fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem", lg: "5rem" },
            }}
          >
            Welcome to the Home Page
          </Typography>

          <Box sx={{ margin: "auto", width: "90%" }}>
            <Typography variant="body1">{introParagraph}</Typography>
          </Box>
        </Box>
      </Container>

      {/* Infography Section */}
      <Container maxWidth="lg" sx={{ backgroundColor: "#e3e3e3", padding: 3 }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: 600,
            fontSize: "2rem",
          }}
        >
          Section: Infography
        </Typography>
      </Container>
    </>
  );
}
