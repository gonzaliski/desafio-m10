export function removeItemAtIndex(arr: any[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
export function findProductById(arr: any[], id: string) {
  return arr.find((a) => a.id == id);
}
