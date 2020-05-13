import {Request, Response} from "express";
import {getRepository} from "typeorm";
import { User } from "../entity/User";

export async function createUser(request: Request, response: Response) {

  const userRepository = getRepository(User);

  const user = request.body
  const newUser = userRepository.create(user);

  await userRepository.save(newUser);

  response.send(newUser);
}

export async function updateUser(request: Request, response: Response) {

  const userRepository = getRepository(User);

  const user = request.body
  await userRepository.update(user.id, user);

  response.send(user);
}

export async function deleteUser(request: Request, response: Response) {

  const userRepository = getRepository(User)

  const user = request.body.id
  await userRepository.delete(user)
  
  response.send(user)
}

export async function getUsers(request: Request, response: Response) {

  const users = await getRepository(User)
    .createQueryBuilder("user")
    .getMany();

  response.send(users);
}

export async function getUser(request: Request, response: Response) {

  const userRepository = await getRepository(User)

  const user = await userRepository.find({
    where: [
      { id: request.params.id },
      { name: request.params.id }
    ] 
  });

  if (!user) {
    response.status(404);
    response.end();
    return;
  }

  response.send(user);
}
