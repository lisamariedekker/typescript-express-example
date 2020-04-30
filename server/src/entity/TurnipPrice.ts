import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class TurnipPrice {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column("datetime")
    date: string;

    @Column("int")
    value: string;

    @ManyToOne(type => User, user => user.prices)
    user: User;

}