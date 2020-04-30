import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {Post} from "../entity/Post";

/**
 * Loads all posts from the database.
 */
export async function postGetAllAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const posts = await getRepository(Post)
      .createQueryBuilder("post")
      .getMany();

    // // load a post by a given post id
    // const posts = await postRepository.find();

    // return loaded posts
    response.send(posts);
}