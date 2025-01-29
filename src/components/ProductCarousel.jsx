import { Box, Container, Typography, IconButton, styled } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useState } from "react";

const CarouselButton = styled(IconButton)({
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  color: "white",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 1,
});

const ViewAllLink = styled("a")({
  color: "#8B6E4E",
  textDecoration: "none",
  fontSize: "14px",
  "&:hover": {
    textDecoration: "underline",
  },
});

const ProductCard = ({ img, title, savings }) => (
  <Box
    sx={{
      position: "relative",
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
        height: 200,
        overflow: "hidden",
        borderRadius: 1,
      }}
    >
      <img width={200} src={img || ""} alt={title} style={{ objectFit: "cover" }} />
    </Box>
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        p: 1,
        background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
        color: "white",
      }}
    >
      <Typography variant="subtitle2">{title}</Typography>
      <Typography variant="caption">{savings}</Typography>
    </Box>
  </Box>
);

export default function ProductCarousel({ title, products }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 6;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + itemsPerSlide >= products.length ? 0 : prev + itemsPerSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev - itemsPerSlide < 0 ? Math.max(0, products.length - itemsPerSlide) : prev - itemsPerSlide,
    );
  };

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Box sx={{ mb: 2, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{
            color: "#8B6E4E",
            fontWeight: 400,
          }}
        >
          {title}
        </Typography>
        <ViewAllLink href="#">View all</ViewAllLink>
      </Box>

      <Typography
        variant="h4"
        sx={{
          color: "#4A3419",
          mb: 3,
          fontWeight: 500,
        }}
      >
        Flat 50% Off
      </Typography>

      <Box sx={{ position: "relative" }}>
        <CarouselButton onClick={prevSlide} sx={{ left: -20 }} disabled={currentSlide === 0}>
          <ChevronLeft />
        </CarouselButton>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: 2,
            overflow: "hidden",
            // Adjust the number of columns based on screen size
            "@media (max-width: 1200px)": {
              gridTemplateColumns: "repeat(4, 1fr)", // 4 items on medium screens
            },
            "@media (max-width: 900px)": {
              gridTemplateColumns: "repeat(3, 1fr)", // 3 items on smaller screens
            },
            "@media (max-width: 600px)": {
              gridTemplateColumns: "1fr", // 1 item on mobile screens
            },
          }}
        >
          {products.slice(currentSlide, currentSlide + itemsPerSlide).map((product) => (
            <ProductCard key={product.id} img={product.image} title={product.title} savings={product.savings} />
          ))}
        </Box>

        <CarouselButton
          onClick={nextSlide}
          sx={{ right: -20 }}
          disabled={currentSlide + itemsPerSlide >= products.length}
        >
          <ChevronRight />
        </CarouselButton>
      </Box>
    </Container>
  );
}
