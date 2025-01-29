import { Box, Container, Typography, Grid, TextField, Button, Link, styled } from "@mui/material"
import TelegramIcon from "@mui/icons-material/Telegram"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"

const StyledButton = styled(Button)({
  backgroundColor: "#8B6E4E",
  color: "white",
  "&:hover": {
    backgroundColor: "#725A40",
  },
  textTransform: "none",
  borderRadius: "4px",
  padding: "8px 24px",
})

const StyledLink = styled(Link)({
  color: "#4A3419",
  textDecoration: "none",
  "&:hover": {
    color: "#8B6E4E",
    textDecoration: "none",
  },
})

const SocialButton = styled(Button)({
  minWidth: "unset",
  padding: "8px",
  borderRadius: "50%",
  backgroundColor: "#4A3419",
  color: "white",
  "&:hover": {
    backgroundColor: "#8B6E4E",
  },
})

const fashionLinks = Array(8).fill("Fashion")
const electronicsLinks = Array(5).fill("Electronics")
const electricalLinks = Array(5).fill("Electrical")
const appliancesLinks = Array(4).fill("Appliances")

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#F2E5DB", py: 8 }}>
      <Container maxWidth="lg">
        {/* Made with Love Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, mb: 1 }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu8N6n5ERHKSkg5x_ytv6iERQfxflQ3sG_EQ&s"
              alt="Bear Logo"
              width={40}
              height={40}
              style={{ objectFit: "contain" }}
            />
            <Typography
              variant="h6"
              sx={{
                color: "#4A3419",
                fontWeight: 500,
                letterSpacing: "0.5px",
              }}
            >
              MADE WITH LOVE
            </Typography>
          </Box>
        </Box>

        {/* Subscribe Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Box
            sx={{
              display: "inline-block",
              px: 4,
              py: 1,
              mb: 2,
            }}
          >
            <Typography variant="subtitle2" sx={{ color: "#4A3419", lineHeight: 1.5 }}>
              SUBSCRIBE FOR EXCLUSIVE
              <br />
              SALES & NEWS
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: "#4A3419",
              mb: 2,
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            We will provide detailed information about our services, types of work, and top projects.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1, maxWidth: "400px", mx: "auto" }}>
            <TextField
              placeholder="+91"
              size="small"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "white",
                  "& fieldset": {
                    borderColor: "rgba(74, 52, 25, 0.2)",
                  },
                },
              }}
            />
            <StyledButton>SEND REQUEST</StyledButton>
          </Box>
        </Box>

        {/* Links Section */}
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {/* Fashion Column */}
          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle1" sx={{ color: "#4A3419", fontWeight: 500, mb: 2 }}>
              FASHION
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {[...fashionLinks, ...electronicsLinks, ...electricalLinks, ...appliancesLinks].map((link, index) => (
                <StyledLink key={index} href="#">
                  <Typography variant="body2">{link}</Typography>
                </StyledLink>
              ))}
            </Box>
          </Grid>

          {/* Support Column */}
          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle1" sx={{ color: "#4A3419", fontWeight: 500, mb: 2 }}>
              SUPPORT & HELP
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {Array(10)
                .fill("Send feedback")
                .map((link, index) => (
                  <StyledLink key={index} href="#">
                    <Typography variant="body2">{link}</Typography>
                  </StyledLink>
                ))}
            </Box>
          </Grid>

          {/* Quick Links Column */}
          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle1" sx={{ color: "#4A3419", fontWeight: 500, mb: 2 }}>
              QUICK LINKS
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <StyledLink href="#">
                <Typography variant="body2">Chat with customer Service</Typography>
              </StyledLink>
              <StyledLink href="#">
                <Typography variant="body2">Contact us</Typography>
              </StyledLink>
              <StyledLink href="#">
                <Typography variant="body2">Send feedback</Typography>
              </StyledLink>
            </Box>
          </Grid>

          {/* Contact Column */}
          <Grid item xs={12} sm={3}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ color: "#4A3419", mb: 0.5 }}>
                +1 (99) 9890-31-91
              </Typography>
              <Typography variant="body2" sx={{ color: "#4A3419" }}>
                info@rightguard.com
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <SocialButton>
                <TelegramIcon fontSize="small" />
              </SocialButton>
              <SocialButton>
                <WhatsAppIcon fontSize="small" />
              </SocialButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" sx={{ color: "#4A3419" }}>
            Copyright© 2024. | All Rights Reserved. | <StyledLink href="#">Privacy</StyledLink> |{" "}
            <StyledLink href="#">Terms</StyledLink> | <StyledLink href="#">Infringement</StyledLink>
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

