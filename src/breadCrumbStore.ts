import { writable } from "svelte/store";

export const breadCrumbStore = writable<{ name: string; url: string }[]>([]);