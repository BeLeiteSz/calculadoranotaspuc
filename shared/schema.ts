import { z } from "zod";

export const subjectWeightsSchema = z.record(z.string(), z.number());

export type SubjectWeights = z.infer<typeof subjectWeightsSchema>;

export interface GroupConfig {
  id: number;
  name: string;
  subjects: string[];
  weights: SubjectWeights;
}

export const gradeInputSchema = z.object({
  grupo: z.number().min(1).max(4),
  notas: z.record(z.string(), z.number().min(0).max(100)),
});

export type GradeInput = z.infer<typeof gradeInputSchema>;
