import {
  Grid,
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { cardStyles } from "./styles";
import "../../App.css";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const theme = useTheme();
  const { state } = location;
  const { cartItems, setCartItems } = useCart();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleBuyNow = () => {
    alert(`Produto ${id} comprado!`);
  };

  const handleAddToCart = () => {
    //verificando se existe item no array
    const existingItem = cartItems.find((item) => item.id === state.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === state.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    } else {
      const updatedCartItems = [...cartItems, { ...state, quantity: 1 }];
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };

  function getRandomName() {
    const firstNames = [
      "Casas Bahia",
      "Atacadista moveis",
      "Magazine",
      "Eletronico",
      "Neu Loja",
    ];
    const randomFirstName =
      firstNames[Math.floor(Math.random() * firstNames.length)];

    return `${randomFirstName}`;
  }

  const randomName = getRandomName();

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={6} lg={4} container justifyContent="center">
        <Box display="flex" justifyContent="center">
          <img src={state?.imagem} className="img-details" alt="Product" />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={8}>
        <Box
          sx={cardStyles.boxProduct}
          textAlign={isMobile ? "center" : "left"}
        >
          <Typography variant="h3" color="secondary" gutterBottom>
            {state?.nome}
          </Typography>
          <Typography variant="h5" color="secondary" paragraph>
            {state.descricao}
          </Typography>
          <Typography variant="body2" color="secondary" paragraph>
            SKU: {state.SKU}
          </Typography>
          <Typography variant="body2" color="secondary" paragraph>
            Enviado por: {randomName}
          </Typography>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            <Button variant="contained" color="primary" onClick={handleBuyNow}>
              Comprar
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleAddToCart}
              sx={{ ml: 2 }}
            >
              Adicionar ao Carrinho
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductDetail;
