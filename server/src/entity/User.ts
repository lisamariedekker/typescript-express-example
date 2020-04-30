import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { Group } from "./Group";
import { TurnipPrice } from "./TurnipPrice";
import { Transaction } from "./Transaction";

export enum NativeFruit {
  APPLES = "Apples",
  PEARS = "Pears",
  ORANGES = "Oranges",
  CHERRIES = "Cherries",
  PEACHES = "Peaches"
}

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    name: string;

    // @Column()
    // email: string;

    // @Column()
    // password: string;

    @Column({type: "enum", enum: NativeFruit, nullable: true})
    nativeFruit: NativeFruit

    @Column()
    islandName: string;

    @Column({nullable: true})
    friendCode: string;

    @Column({nullable: true})
    dodoCode: string;

    @Column({nullable: true})
    calculatedTurnips: string;

    @OneToMany(type => Transaction, transaction => transaction.turnipOwner)
    transactions: Transaction[]

    @OneToMany(type => Transaction, transaction => transaction.islandOwner)
    islandTransactions: Transaction[]

    @OneToMany(type => TurnipPrice, turnipPrice => turnipPrice.user)
    prices: TurnipPrice[]

    @ManyToMany(type => Group, group => group.users)
    @JoinTable()
    groups: Group[]

}