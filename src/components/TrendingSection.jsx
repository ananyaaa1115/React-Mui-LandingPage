import { Box, Container, Typography, Rating, styled } from "@mui/material";

const ViewAllLink = styled("a")({
  color: "#8B6E4E",
  textDecoration: "none",
  fontSize: "14px",
  "&:hover": {
    textDecoration: "underline",
  },
});

const ProductCard = ({ img, title, price, rating }) => (
  <Box
    sx={{
      cursor: "pointer",
      "&:hover": {
        "& img": {
          transform: "scale(1.05)",
          transition: "transform 0.3s ease",
        },
      },
    }}
  >
    <Box
      sx={{
        position: "relative",
        height: 300,
        maxWidth: 200,
        overflow: "hidden",
        borderRadius: 1,
        mb: 2,
      }}
    >
      <img width={200} src={img || ""} alt={title} style={{ objectFit: "cover" }} />
    </Box>
    <Box sx={{ px: 1 }}>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: "#8B6E4E", mb: 1 }}>
        ₹{price}
      </Typography>
      <Rating value={rating} readOnly size="small" />
    </Box>
  </Box>
);

const trendingProducts = [
  {
    img:
      "https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Kids Fashion Dress",
    price: "1,299",
    rating: 4,
  },
  {
    img:
      "https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Summer Collection",
    price: "999",
    rating: 5,
  },
  {
    img:
      "https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Casual Wear",
    price: "1,499",
    rating: 4,
  },
  {
    img:
      "https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Party Wear",
    price: "2,499",
    rating: 5,
  },
];

export default function TrendingSection() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              color: "#4A3419",
              "&::after": {
                content: '""',
                display: "block",
                width: "60px",
                height: "2px",
                backgroundColor: "#8B6E4E",
                marginTop: "8px",
              },
            }}
          >
            NEW & TRENDING
          </Typography>
          <ViewAllLink href="#">View all</ViewAllLink>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)", // 4 columns by default
            gap: 3,
            "@media (max-width: 1200px)": { // For large screens like tablets
              gridTemplateColumns: "repeat(3, 1fr)", // 3 columns
            },
            "@media (max-width: 900px)": { // For smaller tablets
              gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
            },
            "@media (max-width: 600px)": { // For mobile screens
              gridTemplateColumns: "1fr", // 1 column
            },
          }}
        >
          {trendingProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
