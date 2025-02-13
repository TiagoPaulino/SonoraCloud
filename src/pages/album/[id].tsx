'use client';
import LayoutApp from "@/app/layoutApp";
import AlbumPage from "@/components/maindashboard/AlbumPage/AlbumPage";
import { useRouter } from "next/router";


export default function AlbumPageRouter() {
  const router =  useRouter();
  const albumId = router.query.id;
  return (
    <LayoutApp>
      <AlbumPage albumId={albumId} />
    </LayoutApp>
  );
}
