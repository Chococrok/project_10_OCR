export type Photo = {
  src: string;
  metaData: MetaData;
}

export type MetaData = {
  title: string;
  date: Date;
  location: string;
  comment?: string;
}
