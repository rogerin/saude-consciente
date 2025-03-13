
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Award, Send } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Painel de Saúde</h1>
          <p className="text-gray-500">Bem-vindo ao SaúdeAware</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Award className="mr-2 h-4 w-4" />
            Quiz
          </Button>
          <Button>
            <Send className="mr-2 h-4 w-4" />
            Nova Denúncia
          </Button>
        </div>
      </div>

      {/* Alert */}
      <Card className="bg-warning/10 border-warning">
        <CardContent className="flex items-center gap-4 py-4">
          <AlertTriangle className="h-5 w-5 text-warning" />
          <p className="text-sm">
            Aumento significativo de casos de Dengue em sua região. Tome cuidados extras!
          </p>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Nível</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">5</p>
            <p className="text-xs text-gray-500">500 pontos para o próximo nível</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Contribuições</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">12</p>
            <p className="text-xs text-gray-500">Denúncias enviadas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Medalhas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">3</p>
            <p className="text-xs text-gray-500">Conquistas desbloqueadas</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
