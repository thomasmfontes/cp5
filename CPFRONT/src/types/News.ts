export interface Comment {
  id: number;
  name: string;
  text: string;
  date: string;
}
export interface News {
  id: number;
  title: string;
  date: string;
  content: string;
  image: string;
  categories: string[];
  comments: Comment[];
}
