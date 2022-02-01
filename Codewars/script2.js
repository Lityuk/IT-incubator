var list1 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

function getAverageAge(list) {

    return Math.round((list.reduce((a, b) => {
        return a + b.age;
    }, 0)) / list.length)
}

// console.log(getAverageAge(list1))


const remainder = (D, d) => D - Math.floor(D / d) * d


function isRubyComing(list) {

    return list.map(i => i.language === 'Ruby').find(el => el === true) ? true : false

}

// console.log(isRubyComing(list1))

function getFirstPython(list) {
    let result = list.find(i => (i.language === 'Python'));
    return  result === undefined ?`There will be no Python developers` : `${result.firstName}, ${result.country}`
}

