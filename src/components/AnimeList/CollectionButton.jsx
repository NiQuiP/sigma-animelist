"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

const CollectionButton = ({ anime_mal_id, user_email, anime_title, anime_image }) => {
    const [isCreated, setIsCreated] = useState(false)
    const router = useRouter()
    const handleCollection = async (event) => {
        event.preventDefault()

        const data = { anime_mal_id, user_email, anime_title, anime_image }
        const response = await fetch('/api/v1/collection', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        const collection = await response.json()
        if (collection.isCreated) {
            setIsCreated(true)
            router.refresh()
        }
    }

    return (
        <>
            {
                isCreated && <p className="text-color-primary mt-2">Berhasil Ditambahkan ke koleksi</p>
            }{
                !isCreated && <button className="px-2 py-1 bg-color-accent rounded mt-2" onClick={handleCollection}>
                    Add To Collection
                </button>
            }
        </>
    )
}

export default CollectionButton