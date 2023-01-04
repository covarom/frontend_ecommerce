export interface Category {
  id: string,
  parent_id: string,
  name: string,
  sort_order: number,
  status: number,
  created_at: Date,
  modified_at: Date
}
