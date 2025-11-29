"use client";

import { useAuthStore } from "@/store/auth.store";
import { useIngredientStore } from "@/store/ingredient.store";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

interface IProps {
  children: React.ReactNode;
}

const AppLoader = ({ children }: IProps) => {
  const { data: session, status } = useSession();
  const { ingredients, loadIngredients } = useIngredientStore();
  const { isAuth, setAuthState } = useAuthStore();

  console.log("ingredietns", ingredients);

  useEffect(() => {
    setAuthState(status, session);
  }, [status, session, setAuthState]);

  useEffect(() => {
    if (isAuth) {
      loadIngredients();
    }
  });

  return <>{children}</>;
};

export default AppLoader;
