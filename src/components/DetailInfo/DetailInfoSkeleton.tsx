import { Skeleton, Stack } from "@mui/material";

const DetailInfoSkeleton = () => {
  return (
    <Stack spacing={-1.8}>
      <Skeleton height={40} sx={{ borderRadius: 2 }} />
      <Skeleton height={90} sx={{ borderRadius: 3 }} />
    </Stack>
  );
};

export default DetailInfoSkeleton;
