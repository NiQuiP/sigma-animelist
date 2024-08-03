'use client'
import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "../../libs/api-libs";

const Page = async () => {
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState([])
  const fetchData = async () => {
    const data = await getAnimeResponse('top/anime', `page=${page}`)
    setTopAnime(data)
  }
  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="text-white">
      <HeaderMenu title={`Anime Terpopuler #${page}`} />
      <AnimeList api={topAnime} />
      <Pagination page={page} setPage={setPage} lastPage={topAnime.pagination?.last_visible_page} />
    </div>
  );
};

export default Page;
