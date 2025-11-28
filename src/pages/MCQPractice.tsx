import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Navbar } from "@/components/Navbar";
import { mcqDatabase } from "@/data/mcqData";
import { Timer, CheckCircle, XCircle, RotateCcw } from "lucide-react";

const MCQPractice = () => {
  const [selectedUnit, setSelectedUnit] = useState<number | "all">("all");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  const filteredQuestions = selectedUnit === "all" 
    ? mcqDatabase 
    : mcqDatabase.filter(q => q.unit === selectedUnit);

  useEffect(() => {
    if (!quizCompleted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setQuizCompleted(true);
    }
  }, [timeLeft, quizCompleted]);

  const handleAnswer = (optionIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(optionIndex);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    setShowResult(true);
    if (selectedAnswer === filteredQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
    setTimeLeft(300);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (filteredQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-dark">
        <Navbar />
        <div className="pt-24 px-4 flex items-center justify-center min-h-screen">
          <Card className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">No questions available</h2>
            <Button onClick={() => setSelectedUnit("all")}>Show All Questions</Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold text-center mb-8 bg-gradient-primary bg-clip-text text-transparent">
            MCQ Practice
          </h1>

          {/* Unit Filter */}
          {!quizCompleted && (
            <Card className="p-6 mb-6 bg-card/50 backdrop-blur-sm">
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedUnit === "all" ? "default" : "outline"}
                  onClick={() => {
                    setSelectedUnit("all");
                    resetQuiz();
                  }}
                  className={selectedUnit === "all" ? "bg-gradient-primary" : ""}
                >
                  All Units
                </Button>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <Button
                    key={num}
                    variant={selectedUnit === num ? "default" : "outline"}
                    onClick={() => {
                      setSelectedUnit(num);
                      resetQuiz();
                    }}
                    className={selectedUnit === num ? "bg-gradient-primary" : ""}
                  >
                    Unit {num}
                  </Button>
                ))}
              </div>
            </Card>
          )}

          {!quizCompleted ? (
            <>
              {/* Timer and Progress */}
              <Card className="p-6 mb-6 bg-card/50 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <Timer className={`h-5 w-5 ${timeLeft < 60 ? 'text-destructive' : 'text-primary'}`} />
                    <span className={`text-lg font-bold ${timeLeft < 60 ? 'text-destructive' : ''}`}>
                      {formatTime(timeLeft)}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Score: {score} / {currentQuestion + (showResult ? 1 : 0)}</p>
                    <p className="text-sm text-muted-foreground">Question {currentQuestion + 1} of {filteredQuestions.length}</p>
                  </div>
                </div>
                <Progress value={(currentQuestion / filteredQuestions.length) * 100} className="h-2" />
              </Card>

              {/* Question Card */}
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/20">
                <div className="mb-6">
                  <Badge variant="secondary" className="mb-4">
                    Unit {filteredQuestions[currentQuestion].unit}
                  </Badge>
                  <h2 className="text-2xl font-bold mb-6">
                    {filteredQuestions[currentQuestion].question}
                  </h2>
                </div>

                <div className="space-y-3 mb-8">
                  {filteredQuestions[currentQuestion].options.map((option, index) => {
                    const isCorrect = index === filteredQuestions[currentQuestion].correct;
                    const isSelected = index === selectedAnswer;
                    
                    let buttonClass = "w-full justify-start text-left p-4 h-auto";
                    if (showResult) {
                      if (isCorrect) {
                        buttonClass += " bg-secondary/20 border-secondary hover:bg-secondary/30";
                      } else if (isSelected && !isCorrect) {
                        buttonClass += " bg-destructive/20 border-destructive hover:bg-destructive/30";
                      }
                    } else if (isSelected) {
                      buttonClass += " bg-primary/20 border-primary";
                    }

                    return (
                      <Button
                        key={index}
                        variant="outline"
                        className={buttonClass}
                        onClick={() => handleAnswer(index)}
                        disabled={showResult}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span>{String.fromCharCode(65 + index)}. {option}</span>
                          {showResult && isCorrect && <CheckCircle className="h-5 w-5 text-secondary" />}
                          {showResult && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-destructive" />}
                        </div>
                      </Button>
                    );
                  })}
                </div>

                {showResult && (
                  <Card className="p-4 mb-6 bg-muted/50">
                    <p className="text-sm">
                      <strong>Explanation:</strong> {filteredQuestions[currentQuestion].explanation}
                    </p>
                  </Card>
                )}

                <div className="flex gap-4">
                  {!showResult ? (
                    <Button
                      onClick={handleSubmit}
                      disabled={selectedAnswer === null}
                      className="flex-1 bg-gradient-primary"
                      size="lg"
                    >
                      Submit Answer
                    </Button>
                  ) : (
                    <Button
                      onClick={handleNext}
                      className="flex-1 bg-gradient-primary"
                      size="lg"
                    >
                      {currentQuestion < filteredQuestions.length - 1 ? "Next Question" : "Complete Quiz"}
                    </Button>
                  )}
                </div>
              </Card>
            </>
          ) : (
            <Card className="p-12 text-center bg-gradient-primary text-white">
              <h2 className="text-4xl font-bold mb-6">Quiz Completed! 🎉</h2>
              <div className="text-6xl font-bold mb-6">
                {score} / {filteredQuestions.length}
              </div>
              <p className="text-2xl mb-2">
                {(score / filteredQuestions.length * 100).toFixed(0)}% Score
              </p>
              <p className="text-lg opacity-90 mb-8">
                {score / filteredQuestions.length >= 0.8 ? "Excellent! You're exam ready!" :
                 score / filteredQuestions.length >= 0.6 ? "Good job! Keep practicing." :
                 "Keep studying! You'll improve."}
              </p>
              <Button
                onClick={resetQuiz}
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                <RotateCcw className="mr-2 h-5 w-5" />
                Try Again
              </Button>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default MCQPractice;
