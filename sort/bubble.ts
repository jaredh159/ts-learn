export default function bubbleSort(array: number[]): number[] {
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i + 1] && array[i] > array[i + 1]) {
        const [one, two] = array.slice(i);
        array[i] = two;
        array[i + 1] = one;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}
