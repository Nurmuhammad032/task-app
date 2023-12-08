import { useQuery } from "@tanstack/react-query";
import { SectionTitle } from "../../components/StyledComponents";
import { DetailInfo, DetailInfoSkeleton } from "../../components";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { apiFetch } from "../../utils/axiosConfig";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { IOrder } from "../../types/order";

const View = () => {
  const { id } = useParams();
  const getOrderDetail = async () => {
    try {
      const res = await apiFetch<IOrder>(`/users/${id}`);
      return res.data;
    } catch (error) {
      toast.error((error as AxiosError).message);
    }
  };
  const { data: orderDetail, isLoading } = useQuery({
    queryKey: ["users", id],
    queryFn: getOrderDetail,
  });
  return (
    <section>
      <div>
        <SectionTitle>Order details</SectionTitle>
        <Box sx={{ maxWidth: "40rem", mx: "auto" }}>
          {isLoading ? (
            new Array(6)
              .fill(1)
              .map((_, idx) => <DetailInfoSkeleton key={idx} />)
          ) : (
            <>
              <DetailInfo label="Name" info={orderDetail?.name} />
              <DetailInfo label="Username" info={orderDetail?.username} />
              <DetailInfo label="Email" info={orderDetail?.email} />
              <DetailInfo label="Phone number" info={orderDetail?.phone} />
              <DetailInfo label="Website" info={orderDetail?.website} />
              <DetailInfo label="City" info={orderDetail?.address.city} />
              <DetailInfo label="Street" info={orderDetail?.address.street} />
              <DetailInfo label="Suite" info={orderDetail?.address.suite} />
              <DetailInfo
                label="Company name"
                info={orderDetail?.company.name}
              />
            </>
          )}
        </Box>
      </div>
    </section>
  );
};

export default View;
