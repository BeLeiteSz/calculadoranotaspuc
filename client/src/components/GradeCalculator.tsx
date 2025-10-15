import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import { groupConfigs, subjectLabels, calculateFinalGrade } from "@/lib/calculator";
import ThemeToggle from "@/components/ThemeToggle";

export default function GradeCalculator() {
  const [selectedGroup, setSelectedGroup] = useState(1);
  const [grades, setGrades] = useState<Record<string, string>>({});
  const [finalGrade, setFinalGrade] = useState<number | null>(null);

  const currentConfig = groupConfigs.find((g) => g.id === selectedGroup);

  const handleGroupChange = (value: string) => {
    setSelectedGroup(parseInt(value));
    setGrades({});
    setFinalGrade(null);
  };

  const handleGradeChange = (subject: string, value: string) => {
    setGrades((prev) => ({
      ...prev,
      [subject]: value,
    }));
  };

  const handleCalculate = () => {
    if (!currentConfig) return;

    const numericGrades: Record<string, number> = {};
    currentConfig.subjects.forEach((subject) => {
      numericGrades[subject] = parseFloat(grades[subject]) || 0;
    });

    const result = calculateFinalGrade(numericGrades, currentConfig.weights);
    setFinalGrade(result);
  };

  const handleReset = () => {
    setGrades({});
    setFinalGrade(null);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl md:text-3xl font-bold text-center">
            Nota Final - PUC-RIO
          </CardTitle>
          <CardDescription className="text-center">
            Cálculo da Nota Final com peso por grupo
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 p-6 md:p-8">
          <div className="space-y-2">
            <Label htmlFor="grupo" className="text-sm font-medium">
              Selecione o Grupo:
            </Label>
            <Select value={selectedGroup.toString()} onValueChange={handleGroupChange}>
              <SelectTrigger
                id="grupo"
                data-testid="select-grupo"
                className="w-full"
              >
                <SelectValue placeholder="Selecione um grupo" />
              </SelectTrigger>
              <SelectContent>
                {groupConfigs.map((config) => (
                  <SelectItem
                    key={config.id}
                    value={config.id.toString()}
                    data-testid={`option-grupo-${config.id}`}
                  >
                    {config.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            {currentConfig?.subjects.map((subject) => (
              <div key={subject} className="space-y-2">
                <Label htmlFor={subject} className="text-sm font-medium">
                  {subjectLabels[subject]}:
                </Label>
                <Input
                  id={subject}
                  data-testid={`input-${subject}`}
                  type="number"
                  min="0"
                  max="10"
                  step="0.1"
                  placeholder="Digite sua nota"
                  value={grades[subject] || ""}
                  onChange={(e) => handleGradeChange(subject, e.target.value)}
                  className="w-full"
                />
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <Button
              onClick={handleCalculate}
              className="flex-1"
              size="lg"
              data-testid="button-calcular"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Calcular Nota Final
            </Button>
            <Button
              onClick={handleReset}
              variant="outline"
              size="lg"
              data-testid="button-limpar"
            >
              Limpar
            </Button>
          </div>

          {finalGrade !== null && (
            <div className="mt-6 p-6 bg-chart-2/10 border border-chart-2/20 rounded-lg text-center space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-200">
              <p className="text-sm font-medium text-muted-foreground">
                Nota Final
              </p>
              <p
                className="text-2xl md:text-3xl font-bold text-chart-2"
                data-testid="text-nota-final"
              >
                {finalGrade.toFixed(2)} / 100
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
