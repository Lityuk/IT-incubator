type CityType = {
  title: string;
  countryTitle: string;
};

type AddressType = {
  streetTitle: string;
  city: CityType;
};

type TechType = {
  id: number;
  title: string;
};

export type StudentType = {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
  address: AddressType;
  technologies: Array<TechType>;
};

export const addSkill = (st: StudentType, skill: string) => {
  st.technologies.push({
    id: new Date().getTime(),
    title: skill,
  });
};
