"use server";
import { cookies } from "next/headers";

export const clearLocalStorage = () => {
  localStorage.clear();
};

export const setLocalStorage = (key: string, value: string) => {
  const serializedValue = JSON.stringify(value);
  localStorage.setItem(key, serializedValue);
};

// remove the cookie from the browser
export const removeCookie = (key: string) => {
  cookies().delete(key);
};
