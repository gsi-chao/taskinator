import zod from "zod";

const CreateProjectSchema = zod.object({
  name: zod.string().min(3).max(50),
  description: zod.string().min(5).max(255)
});

export { CreateProjectSchema };
