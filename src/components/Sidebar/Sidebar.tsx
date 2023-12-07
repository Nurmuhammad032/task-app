import {
  AccordionDetails,
  AccordionSummary,
  AccordionSummaryProps,
  Box,
  BoxProps,
  Divider,
  Stack,
  StackProps,
  Typography,
} from "@mui/material";
import { Theme, styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { links } from "./links";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
}

const menuHoverTransition = (theme: Theme) =>
  theme.transitions.create("background", {
    duration: "0.2s",
  });

const MenuAccordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: "none",
  borderRadius: 5,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:hover": {
    background: theme.palette.gray?.main,
  },
  transition: theme.transitions.create("background", {
    duration: "0.2s",
  }),
  overflow: "hidden",
  backgroundColor: "transparent",
  "&:before": {
    display: "none",
  },
}));

const MenuAccordionSummary = styled((props: AccordionSummaryProps) => (
  <AccordionSummary {...props} />
))(() => ({
  padding: 0,
  flexDirection: "row",
  minWidth: "9rem",
}));

const AccordionMenuLinkWrapper = styled((props: StackProps) => (
  <Stack direction={"row"} spacing={3} {...props} />
))(({ theme }) => ({
  padding: "0 10px",
  width: "100%",
  color: theme.palette.grey[800],
}));

const MenuNestedLinkWrapper = styled((props: StackProps) => (
  <Stack direction={"row"} spacing={2} {...props} />
))(({ theme }) => ({
  "&:hover": {
    background: theme.palette.gray?.darker,
  },
  color: theme.palette.grey[800],
  transition: menuHoverTransition(theme),
  padding: "10px 15px",
}));

const MenuLinkWrapper = styled((props: StackProps) => (
  <Stack direction={"row"} spacing={3} {...props} />
))(({ theme }) => ({
  "&:hover": {
    background: theme.palette.gray?.main,
  },
  borderRadius: 5,
  overflow: "hidden",
  width: "100%",
  color: theme.palette.grey[800],
  transition: menuHoverTransition(theme),
  padding: "10px",
}));

const ContentSpace = styled(Box)<BoxProps>(() => ({
  margin: "0 1.2rem",
}));

const Sidebar = ({ expanded, setExpanded }: IProps) => {
  return (
    <Box
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      sx={(theme) => ({
        maxWidth: expanded ? "20rem" : "5rem",
        overflowX: "hidden",
        boxSizing: "content-box",
        width: "100%",
        position: "fixed",
        zIndex: 10,
        height: "100%",
        top: 0,
        left: 0,
        bottom: 0,
        boxShadow: 5,
        backgroundColor: theme.palette.white?.darker,
        borderRight: "1px solid rgba(0,0,0,0.3)",
        transition: "all 0.25s ease-in-out",
      })}
    >
      <Box
        sx={{
          paddingBottom: "1rem",
          width: "100%",
        }}
      >
        <Box
          sx={(theme) => ({
            position: "sticky",
            top: 0,
            paddingTop: "1rem",
            zIndex: 20,
            backgroundColor: theme.palette.white?.darker,
          })}
        >
          <ContentSpace>
            <Link to={"/"}>
              <Stack direction="row" spacing={1} alignItems="center">
                <img src={logo} width={50} alt="Logo" />
                <h1>System</h1>
              </Stack>
            </Link>
          </ContentSpace>
          <Divider sx={{ my: 2 }} />
        </Box>
        <ContentSpace as="nav">
          {links.map(({ icon, name, submenu, url }) => {
            const IconComponent = icon;
            return (
              <div key={url}>
                {submenu.length ? (
                  <MenuAccordion>
                    <MenuAccordionSummary
                      sx={{ padding: 0 }}
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <AccordionMenuLinkWrapper>
                        <IconComponent color="action" />
                        <Typography sx={{ whiteSpace: "nowrap" }}>
                          {name}
                        </Typography>
                      </AccordionMenuLinkWrapper>
                    </MenuAccordionSummary>
                    {submenu.map(({ icon, name, url }) => {
                      const IconComponent = icon;
                      return (
                        <AccordionDetails
                          sx={{
                            padding: 0,
                            display: expanded ? "inherit" : "none",
                          }}
                          key={url}
                        >
                          <Link to={url}>
                            <MenuNestedLinkWrapper>
                              <IconComponent color="action" />
                              <Typography sx={{ whiteSpace: "nowrap" }}>
                                {name}
                              </Typography>
                            </MenuNestedLinkWrapper>
                          </Link>
                        </AccordionDetails>
                      );
                    })}
                  </MenuAccordion>
                ) : (
                  <Link to={url}>
                    <MenuLinkWrapper>
                      <IconComponent color="action" />
                      <Typography>Shop</Typography>
                    </MenuLinkWrapper>
                  </Link>
                )}
              </div>
            );
          })}
        </ContentSpace>
      </Box>
    </Box>
  );
};

export default Sidebar;
