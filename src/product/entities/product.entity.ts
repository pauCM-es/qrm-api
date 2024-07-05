import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 3, unique: true, primary: true })
  code: string;

  @Column({ type: 'varchar', length: 20, unique: false })
  name: string;
}
