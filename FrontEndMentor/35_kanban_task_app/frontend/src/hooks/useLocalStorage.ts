/* eslint-disable unicorn/filename-case */
import { useCallback, useEffect, useState } from 'react';

interface PersistentStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

function useStorage(
  key: string,
  defaultValue: unknown,
  storageObject: PersistentStorage
) {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue !== null) return JSON.parse(jsonValue);

    return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
  });
  console.log('SETLOCAL2', key, value);

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);
    console.log('SETLOCAL', key, value);
    return storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const removeValue = useCallback(() => {
    // eslint-disable-next-line unicorn/no-useless-undefined
    setValue(undefined);
  }, []);

  return [value, setValue, removeValue];
}

export function useLocalStorage(key: string, defaultValue: string) {
  return useStorage(key, defaultValue, window.localStorage);
}

export function useSessionStorage(key: string, defaultValue: string) {
  return useStorage(key, defaultValue, window.sessionStorage);
}
