import type { CategoriesType } from "@/entities/category";

export interface IFilters {
  page: number;
  max: number;
  category: CategoriesType | null;
  keywords: string;
}
