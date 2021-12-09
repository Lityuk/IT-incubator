export let sum = (a: number, b: number) => a + b;
export let mult = (a: number, b: number) => a * b;


export function splitIntoWords(sentence: string) {
  return sentence.toLowerCase().split(" ").map(word=>word.replace("!",""));
}
