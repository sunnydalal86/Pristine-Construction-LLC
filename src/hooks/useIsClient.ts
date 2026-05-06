import { useSyncExternalStore } from "react";

/** SSR-safe client check for portals (no setState-in-effect). */
export function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}
