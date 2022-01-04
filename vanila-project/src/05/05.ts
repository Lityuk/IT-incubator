type StreetType = {
  title: string;
};

type AddressType = {
  number: number;
  street: StreetType;
};

type HousesType = {
  id: number;
  builtAt: number;
  repaired: boolean;
  address: AddressType;
};
type GovernmentStreetType = {
  street: StreetType;
  number: number;
};

type GovernmentBuildingsType = {
  type: string;
  address: GovernmentStreetType;
  budget: number;
  staffCount: number;
};

export type CityType = {
  title: string;
  houses: Array<HousesType>;
  governmentBuildings: Array<GovernmentBuildingsType>;
  citizensNumber: number;
};

export const getStreetsTitlesOfGovernmentsBuildings = (
  buildings: Array<GovernmentBuildingsType>
) => {
  return buildings.map((m) => m.address.street.title);
};

export const getStreetsTitleOfHouses = (houses: Array<HousesType>) => {
  let callbackfn = (m:HousesType) => m.address.street.title;
  return houses.map(callbackfn);
};
