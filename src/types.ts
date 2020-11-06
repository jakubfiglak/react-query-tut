export type Page = 'planets' | 'people';

export type Planet = {
  name: string;
  population: string;
  terrain: string;
};

export type Person = {
  name: string;
  gender: string;
  birth_year: string;
};

type ResponseData = {
  count: number;
  next: string | null;
  previous: string | null;
};

export type PlanetsResponse = ResponseData & {
  results: Planet[];
};

export type PeopleResponse = ResponseData & {
  results: Person[];
};
