"use client";
import { useDispatch, useSelector } from "react-redux";
import { Row } from "./components/Row/Row";
import { Container } from "./HomeBoard.styled";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { RowFetch } from "./actions/createRows";
import { rowUpdate } from "@/store/homePage.slice";
import { ThemeProvider } from "styled-components";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export const HomeBoard = () => {
  const Rows = useSelector((state: RootState) => state.homePage.rows);
  const dispatch = useDispatch();

  useEffect(() => {
    const homePageRows = [
      { name: "Rock", type: "Rock" },
      { name: "Pop", type: "Pop" },
      { name: "House", type: "House" },
      { name: "Techno", type: "Techno" },
      { name: "EDM", type: "EDM" },
      { name: "RNB", type: "RNB" },
    ];
    const createRows = () => {
      homePageRows.forEach((row) => {
        new RowFetch(row.name, row.type).getdata().then((RowData) => {
          RowData.itens.length > 0
            ? dispatch(rowUpdate({ name: RowData.name, itens: RowData.itens }))
            : null;
        });
      });
    };
    createRows();
  }, [dispatch]);

  const theme = useSelector((state: RootState) => state.theme);

  return (
    <><ThemeProvider theme={theme}>
        {Rows.length > 0 ? (
        
          <Container>
            {Rows.map((row, index) => (
              <Row key={index} name={row.name} itens={row.itens} />
            ))}
          </Container>
        
      ) : (
        <Skeleton count={1} height={"100%"} width={"100%"} baseColor="#b6b6b6" direction="ltr" />
      )}
      </ThemeProvider>
    </>
  );
};
