import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@lib/prisma";

/**
 * PUT /api/publish/:id
 *
 * API route to modify the database using Prisma Client
 */
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postId = req.query.id as string | undefined;
  const post = await prisma.post.update({
    where: { id: postId },
    data: { published: true },
  });
  res.json(post);
}
