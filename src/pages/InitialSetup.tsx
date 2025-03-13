
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const InitialSetup = () => {
  const [district, setDistrict] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would save this data
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Bem-vindo ao SaúdeAware</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label>Distrito Sanitário</Label>
              <Select value={district} onValueChange={setDistrict}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione seu distrito" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="distrito1">Distrito I</SelectItem>
                  <SelectItem value="distrito2">Distrito II</SelectItem>
                  <SelectItem value="distrito3">Distrito III</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Bairro</Label>
              <Select value={neighborhood} onValueChange={setNeighborhood}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione seu bairro" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bairro1">Bairro 1</SelectItem>
                  <SelectItem value="bairro2">Bairro 2</SelectItem>
                  <SelectItem value="bairro3">Bairro 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full">
              Continuar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default InitialSetup;
