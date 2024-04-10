// @ts-nocheck
"use client";

import { useCallback, useState, useEffect, useRef } from "react";

function useEventListener(eventType: string, callback, element = window) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element == null) return;
    const handler = (e: Event) => callbackRef.current(e);
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
}

function useMediaQuery(mediaQuery) {
  const [isMatch, setIsMatch] = useState(false);
  const [mediaQueryList, setMediaQueryList] = useState(null);

  useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);

  useEventListener("change", (e) => setIsMatch(e.matches), mediaQueryList);

  return isMatch;
}

export function useLocalStorage(key, defaultValue) {
  if (typeof window !== "undefined")
    return useStorage(key, defaultValue, window.localStorage);
}

export function useSessionStorage(key, defaultValue) {
  if (typeof window !== "undefined")
    return useStorage(key, defaultValue, window.sessionStorage);
}

function useStorage(key, defaultValue, storageObject) {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof defaultValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
}

export function useDarkMode() {
  let darkMode, setDarkMode;

  if (typeof window !== "undefined")
    [darkMode, setDarkMode] = useLocalStorage("useDarkMode");
  else {
    return [false, () => {}];
  }
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const enabled = darkMode ?? prefersDarkMode;

  useEffect(() => {
    document.body.classList.toggle("dark-mode", enabled);
  }, [enabled]);

  return [enabled, setDarkMode];
}
