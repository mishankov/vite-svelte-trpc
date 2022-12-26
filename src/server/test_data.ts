export interface User {
  id: string;
  name: string;
}

export const userList: User[] = [
  {
    id: "1",
    name: "Vite + Svelte + tRPC",
  },
];

export let counter = 0;

export const increaseCounter = () => {
  counter += 1
}
