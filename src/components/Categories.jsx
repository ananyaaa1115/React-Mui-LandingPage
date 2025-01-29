import { Box, Container, Typography, Card, CardMedia, CardContent, styled } from "@mui/material";

const categories = [
  {
    title: "Shop for kids (Him)",
    image:
      "https://images.pexels.com/photos/30408808/pexels-photo-30408808/free-photo-of-adorable-baby-in-white-dress-with-pink-tutu.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Shop for kids (Her)",
    image:
      "https://images.pexels.com/photos/30408808/pexels-photo-30408808/free-photo-of-adorable-baby-in-white-dress-with-pink-tutu.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Shop for New Born",
    image:
      "https://images.pexels.com/photos/30408808/pexels-photo-30408808/free-photo-of-adorable-baby-in-white-dress-with-pink-tutu.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const CategoryCard = styled(Card)(({ theme }) => ({
  position: "relative",
  cursor: "pointer",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    "& .MuiCardContent-root": {
      backgroundColor: "#4A3419",
    },
    transform: "scale(1.05)", // Add scaling effect on hover
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
  },
  [theme.breakpoints.down("sm")]: {
    height: "auto", // Make cards more flexible on smaller screens
  },
}));

const CategoryContent = styled(CardContent)({
  position: "absolute",
  bottom: 0,
  width: "100%",
  backgroundColor: "#8B6E4E",
  transition: "background-color 0.3s ease",
});

export default function Categories() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          align="center"
          sx={{
            mb: 6,
            color: "#4A3419",
            "&::after": {
              content: '""',
              display: "block",
              width: "60px",
              height: "2px",
              backgroundColor: "#8B6E4E",
              margin: "16px auto 0",
            },
          }}
        >
          CATEGORIES
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // Default 3 columns
            gap: 3,
            // Adjust layout for medium screens (tablets) with 2 columns
            "@media (max-width: 900px)": {
              gridTemplateColumns: "repeat(2, 1fr)",
            },
            // For small screens (phones), use 1 column
            "@media (max-width: 600px)": {
              gridTemplateColumns: "1fr",
            },
          }}
        >
          {categories.map((category) => (
            <CategoryCard key={category.title} elevation={0}>
              <CardMedia
                component="img"
                height="300" // Reduced height for smaller boxes
                image={category.image}
                alt={category.title}
              />
              <CategoryContent>
                <Typography variant="subtitle1" align="center" sx={{ color: "white", py: 1 }}>
                  {category.title}
                </Typography>
              </CategoryContent>
            </CategoryCard>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
