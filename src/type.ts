export interface Item {
  id: number,
  content: string,
  isCompleted: boolean,
  category: string,
  tags?: string[]
}
export type SelectedId = Item['id'];