import type { GroupConfig } from "@shared/schema";

export const groupConfigs: GroupConfig[] = [
  {
    id: 1,
    name: "Grupo 1",
    subjects: ["portugues", "ingles", "matematica", "humanas", "natureza", "redacao"],
    weights: {
      portugues: 1,
      ingles: 0.5,
      humanas: 1,
      natureza: 2.5,
      matematica: 3,
      redacao: 2,
    },
  },
  {
    id: 2,
    name: "Grupo 2",
    subjects: ["portugues", "ingles", "matematica", "humanas", "natureza", "redacao"],
    weights: {
      portugues: 2.5,
      ingles: 0.5,
      humanas: 2.5,
      natureza: 1,
      matematica: 1,
      redacao: 2.5,
    },
  },
  {
    id: 3,
    name: "Grupo 3",
    subjects: ["portugues", "ingles", "matematica", "humanas", "natureza", "redacao"],
    weights: {
      portugues: 2.5,
      ingles: 0.5,
      humanas: 1.5,
      natureza: 1,
      matematica: 2.5,
      redacao: 2,
    },
  },
  {
    id: 4,
    name: "Grupo 4",
    subjects: ["portugues", "ingles", "matematica", "humanas", "natureza", "biologia", "redacao"],
    weights: {
      portugues: 2,
      ingles: 0.5,
      humanas: 1,
      natureza: 1,
      biologia: 2.5,
      matematica: 1,
      redacao: 2,
    },
  },
];

export const subjectLabels: Record<string, string> = {
  portugues: "Português",
  ingles: "Inglês",
  humanas: "Ciências Humanas",
  natureza: "Ciências da Natureza",
  biologia: "Biologia",
  matematica: "Matemática",
  redacao: "Redação",
};

export function calculateFinalGrade(
  grades: Record<string, number>,
  weights: Record<string, number>
): number {
  let somaPonderada = 0;
  let somaPesos = 0;

  Object.keys(weights).forEach((subject) => {
    const grade = grades[subject] || 0;
    const weight = weights[subject] || 0;
    somaPonderada += grade * weight;
    somaPesos += weight;
  });

  // Escala final de 0 a 100 (notas de entrada são de 0 a 10)
  return somaPesos > 0 ? (somaPonderada / somaPesos) * 10 : 0;
}
