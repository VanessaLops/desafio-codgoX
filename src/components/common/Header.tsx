import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import { useCart } from "../../contexts/CartContext";
import {
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
  IconButton as MuiIconButton,
  Typography as MuiTypography,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  AddCircleOutlineOutlined,
  RemoveCircleOutlineOutlined,
} from "@mui/icons-material";
import { cardStyles } from "./styles";

interface CartItem {
  id: number;
  nome: string;
  imagem: string;
  preco: number;
  quantity: number;
}

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const { cartItems, removeItem, updateItemQuantity } = useCart();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleRemoveItem = (itemId: number) => {
    removeItem(itemId);
  };

  const handleIncreaseQuantity = (itemId: number) => {
    updateItemQuantity(
      itemId,
      cartItems.find((item) => item.id === itemId)!.quantity + 1
    );
  };

  const handleDecreaseQuantity = (itemId: number) => {
    const currentItem = cartItems.find((item) => item.id === itemId)!;
    if (currentItem.quantity > 1) {
      updateItemQuantity(itemId, currentItem.quantity - 1);
    }
  };

  return (
    <>
      <AppBar position="fixed" sx={cardStyles.base}>
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" sx={cardStyles.home}>
            Neu Loja
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="open cart drawer"
            onClick={toggleDrawer}
          >
            <ShoppingCartIcon style={{ color: "#FFFFFF" }} />
            <Typography color="#FFFFFF">{cartItems.length}</Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Offset />
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={cardStyles.gridContainer}
        >
          <Typography variant="h6" sx={cardStyles.logo}>
            Meu Carrinho
          </Typography>
          <List sx={{ width: "100%" }}>
            {cartItems.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar src={item.imagem} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.nome}
                    secondary={`Preço: R$ ${item.preco}`}
                  />
                  <Box display="flex" alignItems="center">
                    <MuiIconButton
                      aria-label="remove"
                      onClick={() => handleDecreaseQuantity(item.id)}
                    >
                      <RemoveCircleOutlineOutlined />
                    </MuiIconButton>
                    <MuiTypography sx={{ mx: 1 }}>
                      {item.quantity}
                    </MuiTypography>
                    <MuiIconButton
                      aria-label="add"
                      onClick={() => handleIncreaseQuantity(item.id)}
                    >
                      <AddCircleOutlineOutlined />
                    </MuiIconButton>
                  </Box>
                  <MuiIconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <DeleteIcon />
                  </MuiIconButton>
                </ListItem>
                {index < cartItems.length - 1 && (
                  <Divider variant="inset" component="li" />
                )}
              </React.Fragment>
            ))}
          </List>
          <span>Total: R$ {calculateTotal(cartItems)}</span>
        </Grid>
      </Drawer>
    </>
  );
};

const calculateTotal = (cartItems: CartItem[]) => {
  return cartItems
    .reduce((total, item) => total + item.preco * item.quantity, 0)
    .toFixed(2);
};

export default Header;
