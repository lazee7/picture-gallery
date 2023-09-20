type Image = {
  collections: number;
  comments: number;
  downloads: number;
  id: number;
  imageHeight: number;
  imageSize: number;
  imageWidth: number;
  largeImageURL: string;
  likes: number;
  pageURL: string;
  previewHeight: number;
  previewURL: string;
  previewWidth: number;
  tags: string;
  type: string;
  user: string;
  userImageURL: string;
  user_id: number;
  views: number;
  webformatHeight: number;
  webformatURL: string;
  webformatWidth: number;
};

type User = {
  email: string | null;
  uid: string;
};

type AuthType = {
  user: User | null;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

type FormData = {
  email: string;
  password: string;
};
