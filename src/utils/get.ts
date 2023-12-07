type Key = string | number | symbol;
type Path = Key | Key[];

export function getValue<T extends object, K extends Path>(
  obj: T,
  path: K,
  defaultValue?: any
): any {
  const pathArray = Array.isArray(path) ? path : String(path).split(".");
  let result: any = obj;

  for (const key of pathArray) {
    if (result != null && Object.prototype.hasOwnProperty.call(result, key)) {
      result = result[key as keyof typeof result] as any;
    } else {
      return defaultValue;
    }
  }

  return result !== undefined ? result : defaultValue;
}
