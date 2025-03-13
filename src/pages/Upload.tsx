
import { Button } from "@/components/ui/button";
import { Upload, File, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const Upload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === "text/csv") {
      setFile(droppedFile);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === "text/csv") {
      setFile(selectedFile);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Upload de Dataset</h1>
          <p className="text-gray-500">
            Faça upload de novos dados epidemiológicos
          </p>
        </div>
      </div>

      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center ${
          isDragging ? "border-primary bg-primary/5" : "border-gray-300"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {!file ? (
          <div className="space-y-4">
            <div className="flex justify-center">
              <Upload className="h-12 w-12 text-gray-400" />
            </div>
            <div>
              <p className="text-lg font-medium">
                Arraste e solte seu arquivo CSV aqui
              </p>
              <p className="text-sm text-gray-500">ou</p>
              <label htmlFor="file-upload">
                <Button variant="link" className="mt-2">
                  Selecione um arquivo
                </Button>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  accept=".csv"
                  onChange={handleFileSelect}
                />
              </label>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-center">
              <CheckCircle2 className="h-12 w-12 text-green-500" />
            </div>
            <div className="flex items-center justify-center gap-2">
              <File className="h-5 w-5 text-gray-500" />
              <span className="font-medium">{file.name}</span>
            </div>
            <Button onClick={() => setFile(null)} variant="outline">
              Remover arquivo
            </Button>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Instruções</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>O arquivo deve estar no formato CSV</li>
          <li>
            As colunas necessárias são: ano, mês, distrito, bairro, casos_dengue,
            casos_zika, casos_chikungunya
          </li>
          <li>Use ponto e vírgula (;) como separador</li>
          <li>Use ponto (.) como separador decimal</li>
        </ul>
      </div>
    </div>
  );
};

export default Upload;
