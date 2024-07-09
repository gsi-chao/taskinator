import zod from "zod";

const CreateProjectSchema = zod.object({
  name: zod.string(),
  description: zod.string(),
  createdAt: zod.date(),
  updatedAt: zod.date(),
});

export { CreateProjectSchema };
