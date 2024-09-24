import LayoutApp from "@/app/layoutApp";
import AlbumPage from "@/components/maindashboard/AlbumPage/AlbumPage";
import { useRouter } from "next/router";

export default function albumPageRouter() {
  const albumId = useRouter().query.id;

  return (
    <LayoutApp>
      <AlbumPage albumId={albumId} />
    </LayoutApp>
  );
}
