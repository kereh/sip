import { auth } from "@clerk/nextjs";

export const isLogin = () => {
  const { userId } = auth();
  if (userId) return true;
  return false;
};

export const isAdmin = () => {
  const { sessionClaims } = auth();
  if (sessionClaims?.metadata.role === "admin") return true;
  return false;
};
