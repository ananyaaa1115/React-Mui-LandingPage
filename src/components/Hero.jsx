import { Box, Container, Typography, Button, styled } from "@mui/material";

const ShopNowButton = styled(Button)({
  backgroundColor: "#8B6E4E",
  color: "white",
  textTransform: "none",
  padding: "10px 32px",
  borderRadius: "25px",
  "&:hover": {
    backgroundColor: "#725A40",
  },
});

export default function Hero() {
  return (
    <Box sx={{ bgcolor: "#F5F5F5", py: 4 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            minHeight: "400px",
          }}
        >
          <Box
            sx={{ maxWidth: "500px" , textAlign: { xs: "center", sm: "left" } }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "#4A3419",
                fontFamily: "serif",
                mb: 2,
                fontWeight: 500,
                fontSize: { xs: "2.5rem", sm: "3.5rem" },
              }}
            >
              Up to
              <br />
              30% Off
            </Typography>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "#4A3419",
                  mb: 4,
                  fontWeight: 400,
                  fontSize: { xs: "1rem", sm: "1.25rem" },
                }}
              >
                ON ALL AUTUMN FASHION WEAR
              </Typography>
              <ShopNowButton variant="contained">Shop now</ShopNowButton>
            </Box>
          </Box>

          <Box
            sx={{
              position: "absolute",
              overflow: "hidden",
              right: 0,
              bottom: 0,
              width: { xs: "100%", sm: "auto" },
              maxWidth: { xs: "300px", sm: "600px" },
            }}
          >
            <img
              src="https://images.pexels.com/photos/8101703/pexels-photo-8101703.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Children's Fashion"
              width="100%" // Make image responsive to the container
              height="auto" // Maintain aspect ratio
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
