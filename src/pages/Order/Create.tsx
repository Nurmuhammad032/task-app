import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack, TextField } from "@mui/material";
import { SectionTitle } from "../../components/StyledComponents";
import { Controller, useForm } from "react-hook-form";
import { formSchema } from "./formSchema";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);
  const {
    formState: { errors },
    control,
    handleSubmit,
    clearErrors,
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      username: "",
      website: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("form is ready to submit: ", values);
    setIsPending(true);
    setTimeout(() => {
      toast.error("No api!");
      setIsPending(false);
    }, 2000);
  };

  const handleCancel = () => {
    clearErrors();
    reset();
    navigate("/order");
  };

  return (
    <section>
      <div>
        <SectionTitle>Order Create</SectionTitle>
        <Stack
          sx={{ maxWidth: "40rem", mx: "auto" }}
          spacing={2}
          component={"form"}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                variant="outlined"
                size="small"
                error={!!errors.name}
                helperText={errors.name ? errors.name.message : ""}
                fullWidth
                margin="dense"
              />
            )}
          />
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Username"
                variant="outlined"
                size="small"
                error={!!errors.username}
                helperText={errors.username ? errors.username.message : ""}
                fullWidth
                margin="dense"
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                variant="outlined"
                size="small"
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
                fullWidth
                margin="dense"
              />
            )}
          />
          <Controller
            name="website"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Website"
                variant="outlined"
                size="small"
                error={!!errors.website}
                helperText={errors.website ? errors.website.message : ""}
                fullWidth
                margin="dense"
              />
            )}
          />
          <Stack direction={"row"} spacing={2}>
            <Button
              disabled={isPending}
              variant="outlined"
              fullWidth
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              fullWidth
              disabled={isPending}
              type="submit"
              variant="contained"
            >
              {isPending ? "Submit..." : "Submit"}
            </Button>
          </Stack>
        </Stack>
      </div>
    </section>
  );
};

export default Create;
