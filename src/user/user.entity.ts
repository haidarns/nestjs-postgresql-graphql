import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as Argon2 from 'argon2';
import { Field, ObjectType } from "@nestjs/graphql";

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column({
    type: 'varchar',
    nullable: true
  })
  @Field()
  fullname: string

  @Column({
    type: 'varchar',
  })
  password: string

  @Column({
    type: 'varchar',
    unique: true
  })
  @Field()
  email: string

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.password) {
      this.password = await Argon2.hash(this.password);
    }
  }
}