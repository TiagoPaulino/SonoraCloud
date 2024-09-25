"use client";
import { useEffect } from "react";
import { Container } from "./AlbumPage.styled";
import axios from "axios";
import { AlbumHeader } from "./components/header/Header";
import { useDispatch } from "react-redux";
import { albumUpdate } from "@/store/albumPage.slice";
import { TracksList } from "./components/tracks/tracksList";

export default function AlbumPage({
  albumId,
}: {
  albumId: string | string[] | undefined;
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      if (!albumId) return;
      try {
        const getData = await axios.get(
          `https://api.jamendo.com/v3.0/albums/tracks/?client_id=4fe40b6c&format=jsonpretty&id=${albumId}`
        );
        const data = await getData.data.results;
        dispatch(albumUpdate(data[0]));
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [albumId]);

  return (
    <Container>
      <AlbumHeader />
      <TracksList />
    </Container>
  );
}
