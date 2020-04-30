import {Request, Response} from "express";
import {getRepository} from "typeorm";
import { User } from "../entity/User";

export async function createUser(request: Request, response: Response) {

    const userRepository = getRepository(User);

    const user = request.body
    const newUser = userRepository.create(user);

    // save received post
    await userRepository.save(newUser);

    // return saved post back
    response.send(newUser);
}

export async function getUsers(request: Request, response: Response) {

  const users = await getRepository(User)
    .createQueryBuilder("user")
    .getMany();

  response.send(users);
}

export async function getUser(request: Request, response: Response) {

  const user = await getRepository(User)
    .createQueryBuilder("user")
    .where("user.id = :id OR user.name = :name", { id: request.body.id, name: request.body.name})
    .getOne();

  response.send(user);
}
