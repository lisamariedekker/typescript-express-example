import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Transaction {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column("datetime")
    date: string;

    @Column("int")
    amount: string;

    @ManyToOne(type => User, user => user.transactions)
    turnipOwner: User;

    @ManyToOne(type => User, user => user.islandTransactions)
    islandOwner: User;

}