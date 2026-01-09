// src/features/auth/authService.ts
export const getUsersApi = async () => {
  try {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');

    return await data.json();
  } catch (error) {}
};
