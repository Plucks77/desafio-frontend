import React, { useState, useEffect } from "react";

import { useAuth } from "../../contexts/auth";
import api from "../../services/api";
import Nav from "../../components/Navbar";
import {
  Container,
  Title,
  PurchasesContainer,
  Purchase,
  ProductText,
} from "./styless";

function Purchases() {
  const [purchases, setPurchases] = useState(null);

  const { userId } = useAuth();

  useEffect(() => {
    async function getPurchases() {
      const response = await api.get(`/purchases/${userId}`);
      setPurchases(response.data);
    }
    getPurchases();
  }, [userId]);

  return (
    <>
      <Nav />
      <Container>
        <Title>Minhas compras</Title>
        <PurchasesContainer>
          {purchases &&
            purchases.map((purchase, i) => (
              <Purchase key={purchase.id}>
                <ProductText>{i + 1}</ProductText>
                <ProductText>
                  Quantidade de intens: {purchase.items}
                </ProductText>
                <ProductText>
                  Dividido em {purchase.installment} vez(es)
                </ProductText>
                <ProductText>
                  Por um total de{" "}
                  {purchase.total.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </ProductText>
              </Purchase>
            ))}
        </PurchasesContainer>
      </Container>
    </>
  );
}

export default Purchases;
