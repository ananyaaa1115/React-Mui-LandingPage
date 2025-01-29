import { AppBar, Toolbar, Typography, InputBase, Badge, Button, Box, Container, styled, Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "16px 0",
  [theme.breakpoints.down("sm")]: {
    padding: "8px 0",
  },
}));

const SearchWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "4px",
  backgroundColor: "#fff",
  width: "100%",
  maxWidth: "400px",
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%", // Make it full width on mobile
  },
}));

const SearchIconWrapper = styled("div")({
  padding: "0 16px",
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#666",
});

const StyledInputBase = styled(InputBase)({
  width: "100%",
  "& .MuiInputBase-input": {
    padding: "8px 8px 8px 48px",
  },
});

const NavButton = styled(Button)(({ theme }) => ({
  color: "#666",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "transparent",
    color: "#000",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.875rem", // Smaller font size on mobile
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#8B6E4E",
  color: "white",
  fontSize: "0.75rem", // Smaller font size on desktop
  padding: "4px 8px", // Smaller padding on desktop
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.625rem", // Even smaller on mobile
    padding: "2px 4px", // Even smaller padding on mobile
  },
  "&:hover": {
    backgroundColor: "#725A40",
  },
}));

const navItems = ["HOME", "NEW & TRENDING", "ALL CATEGORIES", "MY ORDERS", "ABOUT US", "CUSTOMER SUPPORT"];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container>
        <StyledToolbar>
          {/* Drawer Button on the Left */}
          <IconButton
            sx={{ display: { sm: "none", md: "none" } }}
            onClick={toggleDrawer}
          >
            <MenuIcon sx={{ color: "#666" }} />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              fontFamily: "serif",
              color: "#000",
            }}
          >
            Pixie<span style={{ color: "#C4A484" }}>Threads</span>
          </Typography>

          <SearchWrapper>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search for products..." inputProps={{ "aria-label": "search" }} />
          </SearchWrapper>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Badge badgeContent={1} color="error">
              <ShoppingCartIcon sx={{ color: "#666" }} />
            </Badge>
            <LoginButton variant="contained">Login</LoginButton>
          </Box>
        </StyledToolbar>

        {/* Desktop Navigation Items */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            justifyContent: "center",
            gap: 3,
            py: 2,
            borderBottom: "1px solid #eee",
          }}
        >
          {navItems.map((item) => (
            <NavButton key={item}>{item}</NavButton>
          ))}
        </Box>

        {/* Drawer for Mobile Navigation */}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
          <List sx={{ width: 250 }}>
            {navItems.map((item) => (
              <ListItem button key={item}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Container>
    </AppBar>
  );
}
