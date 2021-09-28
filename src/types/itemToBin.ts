export type ItemToBin = {
  id: number;
  item: string;
  bin: string;
  notes: string;
};

export type Location = {
  key: string;
  display: string;
  phone: string;
  website: string;
  directions?: string;
};
