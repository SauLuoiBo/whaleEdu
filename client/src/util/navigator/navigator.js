import { useRouter } from "next/router";

export const navigator = (link) => {
  const router = useRouter();

  return router.push(link || "/");
};
