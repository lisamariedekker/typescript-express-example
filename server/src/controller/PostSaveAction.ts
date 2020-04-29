import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {Post} from "../entity/Post";
import { Category } from "../entity/Category";

/**
 * Saves given post.
 */
export async function postSaveAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const postRepository = getRepository(Post);
    const categoryRepository = getRepository(Category);

    const category = request.body.categories
    category.name = request.body.categories.name
    await categoryRepository.save(category)

    // create a real post object from post json object sent over http
    const post = request.body
    post.categories = [category]
    const newPost = postRepository.create(post);

    // save received post
    await postRepository.save(newPost);

    // return saved post back
    response.send(newPost);
}