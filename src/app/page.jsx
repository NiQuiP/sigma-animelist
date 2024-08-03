import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "../libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recommendedAnime = reproduce(recommendedAnime, 4)

  const DataView = () => {
    return (
      <>
        {/* anime paling populer */}
        <section>
          <Header
            title={"Paling Populer"}
            linkHref={"/populer"}
            linkTitle={"Lihat Semua"}
          />
          <AnimeList api={topAnime} />
        </section>
        {/* rekomendasi */}
        <section>
          <Header
            title={"Rekomendasi"} />
          <AnimeList api={recommendedAnime} />
        </section>
      </>
    )
  }
  return topAnime && recommendedAnime ? <DataView /> : null
};

export default Page;
