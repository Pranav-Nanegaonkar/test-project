// src/features/auth/authService.ts
export const loginApi = async (data: {
  email: string;
  password: string;
}) => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve({ id: 1, email: data.email });
    }, 1000)
  );
};
