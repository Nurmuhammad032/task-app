import { styled, Typography, TypographyProps } from "@mui/material";

const SectionTitle = styled((props: TypographyProps) => (
  <Typography component="h1" {...props} />
))(({ theme }) => ({
  textAlign: "center",
  fontSize: "1.5rem",
  fontWeight: "600",
  marginBottom: 20,
  color: theme.palette.grey[800],
}));

export default SectionTitle;
