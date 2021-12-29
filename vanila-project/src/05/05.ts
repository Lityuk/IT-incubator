type StreetType = {
    title: string
}

type AddressType = {
    number: number
    street: StreetType
}

type HousesType = {
    id: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}
type GovermentStreetType = {
    street: StreetType
    number: number

}

type GovermentBuildingsType = {
    type: string
    address: GovermentStreetType
    budget: number
    staffCount: number
}

export type CityType = {
    title: string;
    houses: Array<HousesType>;
    govermentBuildings: Array<GovermentBuildingsType>
    citizensNumber: number
};


export {}





