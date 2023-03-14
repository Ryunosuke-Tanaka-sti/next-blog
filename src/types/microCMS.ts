export type BlogType = {
  id: string;
  publishedAt: Date;
  title: string;
  category: CategoryType[];
  content: string;
  image: ImageType;
};

export type CategoryType = {
  name: string;
  color: string;
};
export type ImageType = {
  url: string;
  height: number;
  width: number;
};
