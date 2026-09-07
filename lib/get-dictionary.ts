import en from "@/locales/en.json";

/**
 * Site copy. The app is English-only — the previous `[lng]` routing and the Spanish
 * locale were removed — but the copy stays in a JSON file rather than being inlined
 * into components, which keeps the marketing pages editable without touching JSX.
 */
export type Dictionary = typeof en;

export const dictionary = en as Dictionary;

/** Kept async so existing `await getDictionary()` call sites need no change. */
export async function getDictionary(): Promise<Dictionary> {
  return dictionary;
}
