import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Transaction } from "../entity/Transaction";

export async function createTransaction(request: Request, response: Response) {

  const transactionRepository = getRepository(Transaction);

  const transaction = request.body
  const newTransaction = transactionRepository.create(transaction);

  await transactionRepository.save(newTransaction);

  response.send(newTransaction);
}

export async function updateTransaction(request: Request, response: Response) {

  const transactionRepository = getRepository(Transaction);

  const transaction = request.body
  await transactionRepository.update(transaction.id, transaction);

  response.send(transaction);
}

export async function deleteTransaction(request: Request, response: Response) {

  const transactionRepository = getRepository(Transaction)

  const transaction = request.body.id
  await transactionRepository.delete(transaction)
  
  response.send(transactionRepository)
}

export async function getTransactions(request: Request, response: Response) {

  const transaction = await getRepository(Transaction)
    .createQueryBuilder("transaction")
    .getMany();

  response.send(transaction);
}

export async function getTransaction(request: Request, response: Response) {

  const transactionRepository = await getRepository(Transaction)

  const transaction = await transactionRepository.find({
    where: [
      { id: request.params.id },
    ], 
  });

  if (!transaction) {
    response.status(404);
    response.end();
    return;
  }

  response.send(transaction);
}