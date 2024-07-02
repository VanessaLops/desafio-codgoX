import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";

const FooterBar = styled(AppBar)(({ theme }) => ({
  top: "auto",
  bottom: 0,
  backgroundColor: "#0F52BA",
  marginTop: "10px",
  paddingTop: "1px",
  paddingBottom: "1px",
  position: "fixed",
  width: "100%",
}));

const Footer: React.FC = () => {
  return (
    <FooterBar>
      <Toolbar>
        <Typography variant="body1" sx={{ flexGrow: 1, color: "#FFFFFF" }}>
          &copy; 2024 Neu Loja. Todos os direitos reservados.
        </Typography>
        <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
          Termos de Serviço
        </Link>
        <Link href="#" color="inherit">
          Política de Privacidade
        </Link>
      </Toolbar>
    </FooterBar>
  );
};

export default Footer;
