import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { TurnipPrice } from "../entity/TurnipPrice";

export async function createTurnipPrice(request: Request, response: Response) {

  const turnipRepository = getRepository(TurnipPrice);

  const turnipPrice = request.body
  turnipPrice.date = new Date()
  const newPrice = turnipRepository.create(turnipPrice);

  await turnipRepository.save(newPrice);

  response.send(newPrice);
}

export async function updateTurnipPrice(request: Request, response: Response) {

  const turnipRepository = getRepository(TurnipPrice);

  const turnipPrice = request.body
  await turnipRepository.update(turnipPrice.id, turnipPrice);

  response.send(turnipPrice);
}

export async function deleteTurnipPrice(request: Request, response: Response) {

  const turnipRepository = getRepository(TurnipPrice)

  const turnipPrice = request.body.id
  await turnipRepository.delete(turnipPrice)
  
  response.send(turnipPrice)
}

export async function getTurnipPrices(request: Request, response: Response) {

  const turnipPrices = await getRepository(TurnipPrice)
    .createQueryBuilder("turnipPrice")
    .getMany();

  response.send(turnipPrices);
}