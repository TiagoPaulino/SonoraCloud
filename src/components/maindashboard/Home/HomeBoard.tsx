import { useSelector } from "react-redux";
import { Row } from "./components/Row/Row";
import { Container } from "./HomeBoard.styled";
import { RootState } from "@/store/store";

export const HomeBoard = () => {
  const Rows = useSelector((state:RootState)=>state.homePage.rows)

  const RowDataTest = {
    name: "Home",
    itens:[
    {
      id: "97149",
      name: "Kismet",
      album_id: "10011",
      artist_id: "336820",
      duration: "178",
      artist_name: "Botany Bay",
      playlistadddate: "2009-04-01 00:00:00",
      position: "8",
      license_ccurl: "http://creativecommons.org/licenses/by-nc-nd/3.0/",
      album_image:
        "https://usercontent.jamendo.com?type=album&id=10011&width=300&trackid=97149",
      image:
        "https://usercontent.jamendo.com?type=album&id=10011&width=300&trackid=97149",
      audio:
        "https://prod-1.storage.jamendo.com/?trackid=97149&format=mp31&from=MWpQe71SAPLjs6JdcXGcKQ%3D%3D%7CghAua1fQ0RI9c3l0HqnCxQ%3D%3D",
      audiodownload:
        "https://prod-1.storage.jamendo.com/download/track/97149/mp32/",
      audiodownload_allowed: true,
    },
    {
      id: "111582",
      name: "dom",
      album_id: "14074",
      artist_id: "337391",
      duration: "157",
      artist_name: "Efiel",
      playlistadddate: "2009-04-01 00:00:00",
      position: "7",
      license_ccurl: "http://creativecommons.org/licenses/by-nc-sa/3.0/",
      album_image:
        "https://usercontent.jamendo.com?type=album&id=14074&width=300&trackid=111582",
      image:
        "https://usercontent.jamendo.com?type=album&id=14074&width=300&trackid=111582",
      audio:
        "https://prod-1.storage.jamendo.com/?trackid=111582&format=mp31&from=rSRpm4Ht6bKstviWvEL5Ng%3D%3D%7CpABJRFQYNW%2BXNzxWN1Ie0Q%3D%3D",
      audiodownload:
        "https://prod-1.storage.jamendo.com/download/track/111582/mp32/",
      audiodownload_allowed: true,
    },
    {
      id: "111593",
      name: "second thought",
      album_id: "14074",
      artist_id: "337391",
      duration: "259",
      artist_name: "Efiel",
      playlistadddate: "2009-04-01 00:00:00",
      position: "6",
      license_ccurl: "http://creativecommons.org/licenses/by-nc-sa/3.0/",
      album_image:
        "https://usercontent.jamendo.com?type=album&id=14074&width=300&trackid=111593",
      image:
        "https://usercontent.jamendo.com?type=album&id=14074&width=300&trackid=111593",
      audio:
        "https://prod-1.storage.jamendo.com/?trackid=111593&format=mp31&from=P%2FFU2myWSRTdg5%2BFwPdPJw%3D%3D%7C%2ByEyktoTU8Ij3GKwEVe8vA%3D%3D",
      audiodownload:
        "https://prod-1.storage.jamendo.com/download/track/111593/mp32/",
      audiodownload_allowed: true,
    },
    {
      id: "221036",
      name: "The Only Easy Day Was Yesterday",
      album_id: "32577",
      artist_id: "342139",
      duration: "494",
      artist_name: "while they were sleeping",
      playlistadddate: "2009-04-01 00:00:00",
      position: "9",
      license_ccurl: "http://creativecommons.org/licenses/by-sa/3.0/",
      album_image:
        "https://usercontent.jamendo.com?type=album&id=32577&width=300&trackid=221036",
      image:
        "https://usercontent.jamendo.com?type=album&id=32577&width=300&trackid=221036",
      audio:
        "https://prod-1.storage.jamendo.com/?trackid=221036&format=mp31&from=fdDPuWVCm23d5SRG0Rtumw%3D%3D%7CDRZhTLf38U2FYCn55UEJvQ%3D%3D",
      audiodownload:
        "https://prod-1.storage.jamendo.com/download/track/221036/mp32/",
      audiodownload_allowed: true,
    },
    {
      id: "221037",
      name: "We Don't Sleep on the Beach Anymore",
      album_id: "32577",
      artist_id: "342139",
      duration: "438",
      artist_name: "while they were sleeping",
      playlistadddate: "2009-04-01 00:00:00",
      position: "10",
      license_ccurl: "http://creativecommons.org/licenses/by-sa/3.0/",
      album_image:
        "https://usercontent.jamendo.com?type=album&id=32577&width=300&trackid=221037",
      image:
        "https://usercontent.jamendo.com?type=album&id=32577&width=300&trackid=221037",
      audio:
        "https://prod-1.storage.jamendo.com/?trackid=221037&format=mp31&from=GLIAw2hQxF0FoVGhh8s5QQ%3D%3D%7CZhgwR1zQZv%2BC8WmdMeziVg%3D%3D",
      audiodownload:
        "https://prod-1.storage.jamendo.com/download/track/221037/mp32/",
      audiodownload_allowed: true,
    },
    {
      id: "221038",
      name: "Quell the Guilty Heart",
      album_id: "32577",
      artist_id: "342139",
      duration: "461",
      artist_name: "while they were sleeping",
      playlistadddate: "2009-04-01 00:00:00",
      position: "11",
      license_ccurl: "http://creativecommons.org/licenses/by-sa/3.0/",
      album_image:
        "https://usercontent.jamendo.com?type=album&id=32577&width=300&trackid=221038",
      image:
        "https://usercontent.jamendo.com?type=album&id=32577&width=300&trackid=221038",
      audio:
        "https://prod-1.storage.jamendo.com/?trackid=221038&format=mp31&from=NGa9HlJmlE0CeV1G%2FpSl1A%3D%3D%7C7u8b3qbnq%2FBog0RvVgkCBA%3D%3D",
      audiodownload:
        "https://prod-1.storage.jamendo.com/download/track/221038/mp32/",
      audiodownload_allowed: true,
    },
    {
      id: "242030",
      name: "Off U Go",
      album_id: "35183",
      artist_id: "343598",
      duration: "254",
      artist_name: "Audra Hardt",
      playlistadddate: "2009-01-17 00:00:00",
      position: "1",
      license_ccurl: "http://creativecommons.org/licenses/by-sa/3.0/",
      album_image:
        "https://usercontent.jamendo.com?type=album&id=35183&width=300&trackid=242030",
      image:
        "https://usercontent.jamendo.com?type=album&id=35183&width=300&trackid=242030",
      audio:
        "https://prod-1.storage.jamendo.com/?trackid=242030&format=mp31&from=UX1jQ%2FgUwBsqUYzfwH1mIg%3D%3D%7CSKVCB7%2B2qhR4vEajh9ESzg%3D%3D",
      audiodownload:
        "https://prod-1.storage.jamendo.com/download/track/242030/mp32/",
      audiodownload_allowed: true,
    },
    {
      id: "242031",
      name: "The Shirt",
      album_id: "35183",
      artist_id: "343598",
      duration: "187",
      artist_name: "Audra Hardt",
      playlistadddate: "2009-01-17 00:00:00",
      position: "2",
      license_ccurl: "http://creativecommons.org/licenses/by-sa/3.0/",
      album_image:
        "https://usercontent.jamendo.com?type=album&id=35183&width=300&trackid=242031",
      image:
        "https://usercontent.jamendo.com?type=album&id=35183&width=300&trackid=242031",
      audio:
        "https://prod-1.storage.jamendo.com/?trackid=242031&format=mp31&from=ELmDv4%2BuOIbK3nbgrbVFSQ%3D%3D%7CBUUg2IQCq6ncJ6bAEAPzIA%3D%3D",
      audiodownload:
        "https://prod-1.storage.jamendo.com/download/track/242031/mp32/",
      audiodownload_allowed: true,
    },
    {
      id: "242041",
      name: "Flower",
      album_id: "35183",
      artist_id: "343598",
      duration: "245",
      artist_name: "Audra Hardt",
      playlistadddate: "2009-01-17 00:00:00",
      position: "3",
      license_ccurl: "http://creativecommons.org/licenses/by-sa/3.0/",
      album_image:
        "https://usercontent.jamendo.com?type=album&id=35183&width=300&trackid=242041",
      image:
        "https://usercontent.jamendo.com?type=album&id=35183&width=300&trackid=242041",
      audio:
        "https://prod-1.storage.jamendo.com/?trackid=242041&format=mp31&from=P6ayM0pL5hzFVudQfZ1okA%3D%3D%7C1hSbTV0YVbte8Frg1F0Z0Q%3D%3D",
      audiodownload:
        "https://prod-1.storage.jamendo.com/download/track/242041/mp32/",
      audiodownload_allowed: true,
    },
    {
      id: "242051",
      name: "In My Life",
      album_id: "35183",
      artist_id: "343598",
      duration: "280",
      artist_name: "Audra Hardt",
      playlistadddate: "2009-01-17 00:00:00",
      position: "4",
      license_ccurl: "http://creativecommons.org/licenses/by-sa/3.0/",
      album_image:
        "https://usercontent.jamendo.com?type=album&id=35183&width=300&trackid=242051",
      image:
        "https://usercontent.jamendo.com?type=album&id=35183&width=300&trackid=242051",
      audio:
        "https://prod-1.storage.jamendo.com/?trackid=242051&format=mp31&from=GGmMjZ3bRGxoYapfxKwkww%3D%3D%7CesBUqjQ2%2BUobYRvOfQlnyA%3D%3D",
      audiodownload:
        "https://prod-1.storage.jamendo.com/download/track/242051/mp32/",
      audiodownload_allowed: true,
    },
    {
      id: "242064",
      name: "Better",
      album_id: "35183",
      artist_id: "343598",
      duration: "244",
      artist_name: "Audra Hardt",
      playlistadddate: "2009-01-17 00:00:00",
      position: "5",
      license_ccurl: "http://creativecommons.org/licenses/by-sa/3.0/",
      album_image:
        "https://usercontent.jamendo.com?type=album&id=35183&width=300&trackid=242064",
      image:
        "https://usercontent.jamendo.com?type=album&id=35183&width=300&trackid=242064",
      audio:
        "https://prod-1.storage.jamendo.com/?trackid=242064&format=mp31&from=Jp67L8Dg3Jw1JrSZ9IhSXw%3D%3D%7CgJ5TzNq7xsRAEVqu0LPemQ%3D%3D",
      audiodownload:
        "https://prod-1.storage.jamendo.com/download/track/242064/mp32/",
      audiodownload_allowed: true,
    },
  ]
  }
  return (
    <Container>
      {Rows.map((row, index)=>(
        <Row key={index} name={row.name} itens={row.itens} />
      ))}
    </Container>
  );
};
