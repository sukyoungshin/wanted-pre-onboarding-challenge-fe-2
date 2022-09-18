declare module "toDo" {
  interface Item {
    id: number;
    content: string;
    isCompleted: boolean;
    category: string;
    tags?: string[];
  }
  type SelectedId = Item['id'];
}