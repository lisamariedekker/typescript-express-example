import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Group } from "../entity/Group";

export async function createGroup(request: Request, response: Response) {

  const groupRepository = getRepository(Group);

  const group = request.body
  const newGroup = groupRepository.create(group);

  await groupRepository.save(newGroup);

  response.send(newGroup);
}

export async function updateGroup(request: Request, response: Response) {

  const groupRepository = getRepository(Group);

  const group = request.body
  await groupRepository.update(group.id, group);

  response.send(group);
}

export async function deleteGroup(request: Request, response: Response) {

  const groupRepository = getRepository(Group)

  const group = request.body.id
  await groupRepository.delete(group)
  
  response.send(groupRepository)
}

export async function getGroups(request: Request, response: Response) {

  const groups = await getRepository(Group)
    .createQueryBuilder("group")
    .getMany();

  response.send(groups);
}

export async function getGroup(request: Request, response: Response) {

  const groupRepository = await getRepository(Group)

  const group = await groupRepository.find({
    where: [
      { id: request.params.id },
    ], 
  });

  if (!group) {
    response.status(404);
    response.end();
    return;
  }

  response.send(group);
}