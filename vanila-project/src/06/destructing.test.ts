// type LessonType = {
//   title: string
// }

import { ManType } from "./Destructing";


let props:ManType;

beforeEach(()=> {
  props =  {
    name: "Vova",
    age: 34,
    lessons: [{ title: "1" }, { title: "2" }, { title: "3" }],
    address: {
      street: {
        title: "Nezavisimosti street"
      }
    }
  };
})

test("", () => {


  // const age = props.age;
  // const age = props.lessons;

  // Назначим переменные через деструктурированное присваивание

  const {age, lessons} = props;
  const {title} = props.address.street


  expect(age).toBe(34);
  expect(lessons.length).toBe(3);
  expect((title)).toBe("Nezavisimosti street")
});


test('', ()=>{

  const l1 = props.lessons[0];
  const l2 = props.lessons[1];

  expect(l1.title).toBe('1')
  expect(l2.title).toBe('2')

  //Или же тоже самое

  const [ls1, ...restLessons] = props.lessons

  expect(ls1.title).toBe('1')
  expect(restLessons.length).toBe(2)

})