import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-api";
import prisma from "@/libs/prisma";
import Link from "next/link";

const page = async () => {
  const user = authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user?.email },
  });

  return (
    <section className="w-full px-4 mt-4">
      <Header title={'My Comment'} />
      <div className="grid grid-cols-1 gap-4">
        {comments.map((comment) => {
          return (
            <Link
              href={`/anime/${comment.anime_mal_id}/${comment.anime_title}}`}
              key={comment.id}
              className="bg-color-primary text-color-dark p-4">
              <p className="text-sm">{comment.anime_title}</p>
              <p className="italic">{comment.comment}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default page;
