import Header from "@/components/Dashboard/Header"
import { authUserSession } from "@/libs/auth-api"
import prisma from "@/libs/prisma"
import Image from "next/image"
import Link from "next/link"

const Page = async () => {

    const user = authUserSession()
    const collection = await prisma.collection.findMany({ where: { user_email: user?.email } })

    return (
        <section className="mt-4 px-4 w-full">
            <Header title={'My Collection'} />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {collection.map((collect, index) => {
                    const title = encodeURIComponent(collect.anime_title).replace(/%20/g, "+")
                    return (
                        <Link key={index} href={`/anime/${collect.anime_mal_id}/${title}`} className="relative ">
                            <Image width={350} height={350} alt={collect.anime_image} src={collect.anime_image} className="w-full" />
                            <di v className="absolute bg-color-accent h-16 w-full flex justify-center items-center bottom-0">
                                <h3 className="md:text-xl text-sm p-1">{collect.anime_title}</h3>
                            </di>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Page