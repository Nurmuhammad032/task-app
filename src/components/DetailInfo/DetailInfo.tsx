import { Box, Stack, Typography } from "@mui/material";

interface Props {
  label: string;
  info?: string;
}

const DetailInfo = ({ label, info }: Props) => {
  return (
    <Stack spacing={1} sx={{ mb: 2 }}>
      <Typography style={{ marginLeft: 8 }}>{label}</Typography>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette.white?.darker,
          p: 2,
          borderRadius: 3,
        })}
      >
        <Typography>{info || "Not specified"}</Typography>
      </Box>
    </Stack>
  );
};

export default DetailInfo;
