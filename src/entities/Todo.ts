import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('todos')
export class Todo {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  content: string;

  @Column()
  authorName: string;

  @CreateDateColumn()
  created_at?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
