const prisma = {
  user: {
    findUnique: async () => null,
    create: async (args: any) => ({ id: "mock-user", ...(args?.data ?? {}) }),
  },
  ingredient: {
    create: async (args: any) => ({
      id: "mock-ingredient",
      ...(args?.data ?? {}),
    }),
    findMany: async () => [],
    delete: async () => ({ id: "mock-ingredient" }),
  },
  recipe: {
    create: async (args: any) => ({ id: "mock-recipe", ...(args?.data ?? {}) }),
    findMany: async () => [],
    update: async (args: any) => ({
      id: args?.where?.id ?? "mock-recipe",
      ...(args?.data ?? {}),
    }),
    delete: async () => ({ id: "mock-recipe" }),
  },
};

export default prisma;
