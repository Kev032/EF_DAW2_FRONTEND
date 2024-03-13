import { User } from "./user";
import { Project } from "./project";
import { Category } from "./category";
import { Kind } from "./kind";
import { Priority } from "./priority";
import { Status } from "./status";

export class Ticket {
  idTicket: number;
  title: string;
  description: string;
  updatedAt: Date;
  createdAt: Date;
  kind: Kind = {} as Kind;
  user: User = {} as User;
  project: Project = {} as Project;
  category: Category = {} as Category;
  priority: Priority = {} as Priority;
  status: Status = {} as Status;
}
