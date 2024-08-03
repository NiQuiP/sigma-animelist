import CommentInput from "@/components/AnimeList/CommentInput"
import { getAnimeResponse } from "@/libs/api-libs"
import VideoPLayer from "@/components/Utilities/VIdeoPlayer"
import Image from "next/image"
import CollectionButton from "@/components/AnimeList/CollectionButton"
import { authUserSession } from "@/libs/auth-api"
import prisma from "@/libs/prisma"
import CommentBox from "@/components/AnimeList/CommentBox"

const Page = async ({ params: { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    const user = await authUserSession()
    const collection = await prisma.collection.findFirst({
        where: { user_email: user?.email, anime_mal_id: id }
    })
    const Detail = () => {
        return (
            <>
                <div className="pt-4 px-4">
                    <h3 className="text-2xl text-color-primary">{anime.data?.title} - {anime.data?.year}</h3>
                    {!collection && user && <CollectionButton anime_mal_id={id} user_email={user?.email} anime_title={anime.data?.title} anime_image={anime.data?.images.webp.image_url} />}
                </div>
                <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
                    <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                        <h3>PERINGKAT</h3>
                        <p>{anime.data?.rank}</p>
                    </div>
                    <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                        <h3>SKOR</h3>
                        <p>{anime.data?.score}</p>
                    </div>
                    <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                        <h3>ANGGOTA</h3>
                        <p>{anime.data?.members}</p>
                    </div>
                    <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                        <h3>EPISODE</h3>
                        <p>{anime.data?.episodes}</p>
                    </div>
                </div>
                <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
                    <Image
                        src={anime.data?.images.webp.image_url}
                        alt={anime.data?.images.jpg.image_url}
                        width={250}
                        height={250}
                        className="w-full rounded object-cover"
                    />
                    <p className="text-justify text-xl text-color-primary">{anime.data?.synopsis}</p>
                </div>
                <div className="p-4">
                    <h3 className="text-2xl text-color-primary">Komentar Penonton</h3>
                    <CommentBox anime_mal_id={id} />
                    {
                        user && <CommentInput anime_mal_id={id} user_email={user?.email} username={user?.name} anime_title={anime.data.title} />
                    }
                </div>
                <div>
                    <VideoPLayer youtubeId={anime.data?.trailer.youtube_id} />
                </div>
            </>
        )
    }

    return anime.data ? <Detail /> : null
}

export default Page