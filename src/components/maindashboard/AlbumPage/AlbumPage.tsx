'use client'
import { useEffect } from "react";
import {
  Container,
} from "./AlbumPage.styled";
import axios from "axios";
import { AlbumHeader } from "./components/header/Header";
import { useDispatch } from "react-redux";
import { albumUpdate } from "@/store/albumPage.slice";
import { TracksList } from "./components/tracks/tracksList";

const PlaylistMock = {
  id: "124",
  name: "00",
  releasedate: "2005-04-13",
  artist_id: "103",
  artist_name: "Vavrek",
  image: "https://usercontent.jamendo.com?type=album&id=124&width=300",
  zip: "https://storage.jamendo.com/download/a124/mp32/",
  zip_allowed: true,
  tracks: [
    {
      id: "759",
      position: "1",
      name: "Sunlight",
      duration: "379",
      license_ccurl: "http://creativecommons.org/licenses/by-sa/2.0/",
      audio:
        "https://prod-1.storage.jamendo.com/?trackid=759&format=mp31&from=cyWJrX2Mp%2BKpa3LDvlel9A%3D%3D%7CGuaLk4EqHAvzOo%2Bo7q8XWw%3D%3D",
      audiodownload:
        "https://prod-1.storage.jamendo.com/download/track/759/mp32/",
      audiodownload_allowed: true,
    },
    {
      id: "760",
      position: "2",
      name: "World that you know",
      duration: "186",
      license_ccurl: "http://creativecommons.org/licenses/by-sa/2.0/",
      audio:
        "https://prod-1.storage.jamendo.com/?trackid=760&format=mp31&from=JoWYQg7XdDuXsDFcf0EfgQ%3D%3D%7CtEuOP8z%2Fy3wTaR6doL3BVA%3D%3D",
      audiodownload:
        "https://prod-1.storage.jamendo.com/download/track/760/mp32/",
      audiodownload_allowed: true,
    },
    {
      id: "761",
      position: "3",
      name: "Modern Life",
      duration: "203",
      license_ccurl: "http://creativecommons.org/licenses/by-sa/2.0/",
      audio:
        "https://prod-1.storage.jamendo.com/?trackid=761&format=mp31&from=M7nocUrv785vXc1GPFMHyQ%3D%3D%7CC%2BcNV%2FswugBqvk2ETSVcsw%3D%3D",
      audiodownload:
        "https://prod-1.storage.jamendo.com/download/track/761/mp32/",
      audiodownload_allowed: true,
    },
    {
      id: "762",
      position: "4",
      name: "Healing Luna",
      duration: "406",
      license_ccurl: "http://creativecommons.org/licenses/by-sa/2.0/",
      audio:
        "https://prod-1.storage.jamendo.com/?trackid=762&format=mp31&from=o4H474ZB0DIU%2FiB2UcF65A%3D%3D%7Ce3dK83hff5R43bLLmJP%2FOw%3D%3D",
      audiodownload:
        "https://prod-1.storage.jamendo.com/download/track/762/mp32/",
      audiodownload_allowed: true,
    },
    {
      id: "763",
      position: "5",
      name: "Dance",
      duration: "145",
      license_ccurl: "http://creativecommons.org/licenses/by-sa/2.0/",
      audio:
        "https://prod-1.storage.jamendo.com/?trackid=763&format=mp31&from=HFnK1YyBCWYhJ%2BzF6xf9fg%3D%3D%7CZ2c14%2FHJLcPrdVYF28RzAg%3D%3D",
      audiodownload:
        "https://prod-1.storage.jamendo.com/download/track/763/mp32/",
      audiodownload_allowed: true,
    },
    {
      id: "764",
      position: "6",
      name: "Peace on earth",
      duration: "220",
      license_ccurl: "http://creativecommons.org/licenses/by-sa/2.0/",
      audio:
        "https://prod-1.storage.jamendo.com/?trackid=764&format=mp31&from=R9iq%2BdAXP9w1xh0NxbdSqg%3D%3D%7CRVd1JE2slrGKiOtUpXGHzA%3D%3D",
      audiodownload:
        "https://prod-1.storage.jamendo.com/download/track/764/mp32/",
      audiodownload_allowed: true,
    },
    {
      id: "765",
      position: "7",
      name: "Bedtime",
      duration: "233",
      license_ccurl: "http://creativecommons.org/licenses/by-sa/2.0/",
      audio:
        "https://prod-1.storage.jamendo.com/?trackid=765&format=mp31&from=d2QT4z0MeAvKL3YBRlAqYg%3D%3D%7C79ySwI2rs%2BC2zGzvbcfIGg%3D%3D",
      audiodownload:
        "https://prod-1.storage.jamendo.com/download/track/765/mp32/",
      audiodownload_allowed: true,
    },
  ],
};

export default function AlbumPage({albumId}: {albumId?: string | string[];}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(albumUpdate(PlaylistMock));
  }, [dispatch]);

  /*   useEffect(() => {
    const getData = async () => {
      try {
        const getData = await axios.get(
          `https://api.jamendo.com/v3.0/albums/tracks/?client_id=4fe40b6c&format=jsonpretty&id=${albumId}`
        );
        const data = await getData.data.results;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []); */

  return (
    <Container>
        <AlbumHeader/>
        <TracksList/>
    </Container>
  );
}
