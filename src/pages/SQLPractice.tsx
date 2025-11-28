import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { sqlQuestions } from "@/data/sqlData";
import { Play, Lightbulb, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const SQLPractice = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [sqlQuery, setSqlQuery] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [executed, setExecuted] = useState(false);

  const currentQuestion = sqlQuestions[selectedQuestion];

  const handleExecute = () => {
    if (!sqlQuery.trim()) {
      toast.error("Please write a SQL query first!");
      return;
    }
    
    setExecuted(true);
    toast.success("Query executed successfully! (Simulated)");
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-secondary/20 text-secondary border-secondary/50";
      case "Medium": return "bg-accent/20 text-accent border-accent/50";
      case "Hard": return "bg-destructive/20 text-destructive border-destructive/50";
      default: return "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl font-bold text-center mb-8 bg-gradient-primary bg-clip-text text-transparent">
            SQL Practice Arena
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Questions List */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm h-fit">
              <h3 className="text-lg font-bold mb-4">Practice Questions</h3>
              <div className="space-y-2">
                {sqlQuestions.map((q, index) => (
                  <Button
                    key={q.id}
                    variant={selectedQuestion === index ? "default" : "ghost"}
                    className={`w-full justify-start text-left ${
                      selectedQuestion === index ? "bg-gradient-primary" : ""
                    }`}
                    onClick={() => {
                      setSelectedQuestion(index);
                      setSqlQuery("");
                      setShowHint(false);
                      setExecuted(false);
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono">{index + 1}.</span>
                      <span className="truncate">{q.title}</span>
                    </div>
                  </Button>
                ))}
              </div>
            </Card>

            {/* Main Practice Area */}
            <div className="lg:col-span-2 space-y-6">
              {/* Question Card */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-primary/20">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{currentQuestion.title}</h2>
                    <p className="text-muted-foreground">{currentQuestion.description}</p>
                  </div>
                  <Badge className={getDifficultyColor(currentQuestion.difficulty)}>
                    {currentQuestion.difficulty}
                  </Badge>
                </div>

                {/* Expected Output */}
                <div className="mt-4 p-4 rounded-lg bg-muted/30">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Expected Output:</p>
                  <p className="font-mono text-sm">{currentQuestion.expectedOutput}</p>
                </div>
              </Card>

              {/* SQL Editor */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-secondary/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">SQL Editor</h3>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowHint(!showHint)}
                    >
                      <Lightbulb className="mr-2 h-4 w-4" />
                      {showHint ? "Hide" : "Show"} Hint
                    </Button>
                  </div>
                </div>

                {showHint && (
                  <Card className="p-4 mb-4 bg-accent/10 border-accent/30">
                    <div className="flex items-start gap-2">
                      <Lightbulb className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-sm">{currentQuestion.hint}</p>
                    </div>
                  </Card>
                )}

                <Textarea
                  value={sqlQuery}
                  onChange={(e) => setSqlQuery(e.target.value)}
                  placeholder="Write your SQL query here..."
                  className="font-mono min-h-[200px] bg-background/50 mb-4"
                />

                <div className="flex gap-4">
                  <Button
                    onClick={handleExecute}
                    className="bg-gradient-primary"
                    size="lg"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Run Query
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSqlQuery("");
                      setExecuted(false);
                    }}
                  >
                    Clear
                  </Button>
                </div>
              </Card>

              {/* Output Area */}
              {executed && (
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-secondary/20 animate-slide-up">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <h3 className="text-lg font-bold">Query Result</h3>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/30">
                    <p className="text-secondary font-semibold mb-2">✓ Query executed successfully!</p>
                    <p className="text-sm text-muted-foreground">
                      This is a simulated environment. In a real database, your results would appear here.
                    </p>
                    <div className="mt-4 p-3 bg-background/50 rounded font-mono text-sm">
                      <p className="text-muted-foreground">Expected: {currentQuestion.expectedOutput}</p>
                    </div>
                  </div>
                </Card>
              )}

              {/* SQL Cheatsheet */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <h3 className="text-lg font-bold mb-4">Quick SQL Reference</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-primary mb-2">DDL Commands</p>
                    <code className="block text-xs">CREATE, ALTER, DROP</code>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-2">DML Commands</p>
                    <code className="block text-xs">SELECT, INSERT, UPDATE, DELETE</code>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-2">Aggregate Functions</p>
                    <code className="block text-xs">COUNT, SUM, AVG, MIN, MAX</code>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-2">Join Types</p>
                    <code className="block text-xs">INNER, LEFT, RIGHT, FULL</code>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SQLPractice;
