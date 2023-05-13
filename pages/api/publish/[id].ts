import prisma from "../../../lib/prisma";

/**
 * PUT /api/publish/:id
 *
 * API route to modify the database using Prisma Client
 */
export default async function handle(req, res) {
  const postId = req.query.id;
  const post = await prisma.post.update({
    where: { id: postId },
    data: { published: true },
  });
  res.json(post);
}
