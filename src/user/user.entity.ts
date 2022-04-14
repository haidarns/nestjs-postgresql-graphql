import {
  AfterLoad,
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as Argon2 from 'argon2';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class User extends BaseEntity {
  private tempPassword: string;

  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  @Field()
  fullname: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  password?: string;

  @Column({
    type: 'varchar',
    unique: true,
  })
  @Field()
  email: string;

  @AfterLoad()
  private _loadTempPassword() {
    this.tempPassword = this.password;
  }

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.password !== this.tempPassword) {
      this.password = await Argon2.hash(this.password);
    }
  }

  checkPassword(plainPassword: string) {
    return Argon2.verify(this.password, plainPassword);
  }

  static findByEmail(email: string) {
    return this.findOne({ where: { email } });
  }
}
