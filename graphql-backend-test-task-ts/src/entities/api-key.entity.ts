import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ApiKey {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  value: string;
}

export default ApiKey;
