export type TPackages={
     user:string;
  title: string;
  images: string[];
  location: string;
  duration: string;
  max_adult: number;
  child_min_age: number;

  pickup?: string;
  availability?: string[];
  activity?: string[];

  adultPrice:number;
  childPrice:number;
  single_sitter_dune_buggy:number;
  four_sitter_dune_buggy:number;
  quad_bike:number;
  camel_bike:number;

  discount?: number;

  drop_off?: string;
  note?: string;
  refund_policy?: string;

  included?: string[];
  excluded?: string[];
  tour_plan?: string[];
  description?: string;
}