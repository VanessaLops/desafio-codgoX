import React from "react";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { itemsParaCompra } from "../../utils/utils";
import { Container, Grid } from "@mui/material";
import { cardStyles } from "./styles";

const ProductCard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container sx={cardStyles.container}>
        <Grid container spacing={2}>
          {itemsParaCompra?.map((item: any) => {
            const valorParcelado = (item.preco / 3).toFixed(2);
            return (
              <Grid item xs={10} sm={6} md={4} lg={3} key={item.id}>
                <Link
                  to={{
                    pathname: `/product/${item.id}`,
                  }}
                  state={item}
                  style={{ textDecoration: "none" }}
                  onClick={() => navigate(`/product/${item.id}`)}
                >
                  <Grid sx={{ ...cardStyles.base, ...cardStyles.hover }}>
                    <img
                      src={item.imagem}
                      alt={`Produto ${item.id}`}
                      style={cardStyles.image}
                    />

                    <Grid p={2}>
                      <Typography variant="h6" color="secondary">
                        {item.nome}
                      </Typography>

                      <Typography variant="body2" color="secondary">
                        {item.descricao}
                      </Typography>

                      <Typography variant="h6" color="primary">
                        R$ {item.preco.toFixed(2)}
                      </Typography>

                      <Typography variant="body2">
                        R$ {item.preco.toFixed(2)} ou em até 3x de R${" "}
                        {valorParcelado}
                        no cartão.
                      </Typography>
                    </Grid>
                  </Grid>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default ProductCard;
