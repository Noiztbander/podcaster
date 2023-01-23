export function onlyLettersAndNumbers(str: string) {
  return /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/.test(str);
}
