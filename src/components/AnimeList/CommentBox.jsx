import prisma from "@/libs/prisma"

const CommentBox = async ({ anime_mal_id }) => {
    const comments = await prisma.comment.findMany({ where: { anime_mal_id: anime_mal_id } })

    return (
        <div className="grid md:grid-cols-4 grid-cols-2 gap-2 mb-4 mt-2">
            {comments.map((comment) => {
                return (
                    <div key={comment.id} className="text-color-dark bg-color-primary p-4 text-center">
                        <p>{comment.username}</p>
                        <p>{comment.comment}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default CommentBox