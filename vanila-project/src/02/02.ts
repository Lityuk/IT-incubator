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

type StudentType = {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
  address: AddressType;
  technologies: Array<TechType>;
};

const student: StudentType = {
  id: 1,
  name: "Vova",
  age: 21,
  isActive: false,
  address: {
    streetTitle: "Vostochnaya",
    city: {
      title: "Minsk",
      countryTitle: "Belarus",
    },
  },

  technologies: [
    { id: 1, title: "HTML" },
    { id: 2, title: "CSS" },
    { id: 3, title: "React" },
  ],
};

type computerType = {
  type: string;
};

type WorkSpaceType = {
  table: string;
  computer: Array<computerType>;
};

type BedType = {
  twoSize: boolean;
  color: string;
  picture: number;
};

type MyRoomType = {
  id: number;
  workSpace: WorkSpaceType;
  TV: boolean;
  bed: BedType;
};

const myRoom: MyRoomType = {
  id: 1,
  workSpace: {
    table: "My table",
    computer: [
      {
        type: "PC",
      },
      {
        type: "notebook",
      },
    ],
  },
  TV: true,
  bed: {
    twoSize: true,
    color: "brown",
    picture: 500,
  },
};

console.log(myRoom);

console.log(myRoom.workSpace.computer[1].type)

console.log(student.age);
console.log(student.name);
console.log(student.isActive);
console.log(student.address.city.title);
console.log(student.technologies[2].title);
