export const cardStyles = {
  base: {
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "start",
    transition: "transform 0.2s",
  },
  hover: {
    "&:hover": {
      transform: "translateY(-5px)",
      border: "1px solid #0F52BA",
    },
  },
  image: {
    width: "100%",
    height: "auto",
    marginBottom: "16px",
    borderRadius: "4px 4px 0 0",
  },
  container: {
    marginBottom: "80px",
  },
  boxProduct: {
    padding: { xs: 2, md: 3 },
    textAlign: { xs: "center", md: "left" },
  },
};
