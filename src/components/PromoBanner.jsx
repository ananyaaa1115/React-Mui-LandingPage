import { Box, Container, Button, Typography, styled } from "@mui/material";

const StyledButton = styled(Button)({
  backgroundColor: "white",
  color: "#4A3419",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#f5f5f5",
  },
});

const PromoBanner = ({ title, img, buttonText = "Shop now", large = false }) => (
  <Box
    sx={{
      position: "relative",
      height: large ? 400 : 300,
      overflow: "hidden",
      borderRadius: 1,
      cursor: "pointer",
      "&:hover": {
        "& img": {
          transform: "scale(1.05)",
          transition: "transform 0.3s ease",
        },
      },
    }}
  >
    <img src={img || "/placeholder.svg"} alt={title} fill style={{ objectFit: "cover" }} />
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      <Typography
        variant={large ? "h4" : "h5"}
        sx={{
          color: "white",
          textAlign: "center",
          mb: 2,
          fontWeight: 500,
        }}
      >
        {title}
      </Typography>
      <StyledButton variant="contained">{buttonText}</StyledButton>
    </Box>
  </Box>
);

const promoBanners = [
  {
    title: "FOR CUSTOMIZATION",
    img:
      "https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "SUMMER EVENT",
    img:
      "https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "BEST SELLER",
    img:
      "https://images.pexels.com/photos/939702/pexels-photo-939702.jpeg?auto=compress&cs=tinysrgb&w=600",
    buttonText: "Shop now",
  },
  {
    title: "NEW",
    img:
      "https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=600",
    buttonText: "Shop now",
  },
];

export default function PromoBanners() {
  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)", // Default to two columns
            gap: 3,
            "@media (max-width: 768px)": { // For small screens, change to one column
              gridTemplateColumns: "1fr",
            },
          }}
        >
          {promoBanners.map((banner, index) => (
            <PromoBanner key={index} {...banner} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
