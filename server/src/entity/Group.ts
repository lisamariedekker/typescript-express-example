import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Group {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    name: string;

    @OneToOne(type => User)
    @JoinColumn()
    admin: User

    @ManyToMany(type => User, user => user.groups)
    users: User[];

}