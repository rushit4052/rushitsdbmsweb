import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, FileText, Lightbulb, CheckCircle, 
  HelpCircle, Download, ChevronRight 
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { units } from "@/data/unitsData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const UnitPage = () => {
  const { id } = useParams();
  const unit = units.find(u => u.id === Number(id));

  if (!unit) {
    return (
      <div className="min-h-screen bg-gradient-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Unit Not Found</h1>
          <Link to="/syllabus">
            <Button>Back to Syllabus</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Back Button */}
          <Link to="/syllabus">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Syllabus
            </Button>
          </Link>

          {/* Unit Header */}
          <Card className="p-8 mb-8 bg-gradient-primary text-white">
            <div className="flex items-start justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl font-bold">
                    {unit.id}
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold">{unit.title}</h1>
                    <p className="text-white/80 mt-2">Unit {unit.id} • {unit.weightage}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {unit.topics.map((topic, i) => (
                    <Badge key={i} variant="secondary" className="bg-white/20 text-white border-white/30">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Visual Concept Flow */}
          <Card className="p-6 mb-8 bg-card/50 backdrop-blur-sm border-2 border-primary/20">
            <div className="flex items-center gap-2 mb-6">
              <ChevronRight className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Visual Concept Flow</h2>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              {unit.visualFlow.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="px-4 py-3 bg-gradient-primary text-white rounded-lg font-semibold shadow-glow-neon animate-slide-up"
                       style={{ animationDelay: `${i * 0.1}s` }}>
                    {step}
                  </div>
                  {i < unit.visualFlow.length - 1 && (
                    <ChevronRight className="h-6 w-6 text-primary" />
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Detailed Study Notes */}
          {unit.detailedNotes && unit.detailedNotes.length > 0 && (
            <Card className="p-6 mb-8 bg-card/50 backdrop-blur-sm border-2 border-primary/20">
              <div className="flex items-center gap-2 mb-6">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Detailed Study Notes</h2>
              </div>
              
              <div className="space-y-8">
                {unit.detailedNotes.map((note, noteIdx) => (
                  <div key={noteIdx} className="space-y-4">
                    <h3 className="text-xl font-bold text-primary border-b-2 border-primary/30 pb-2">
                      {note.section}
                    </h3>
                    
                    {note.subsections.map((subsection, subIdx) => (
                      <div key={subIdx} className="p-4 rounded-lg bg-gradient-to-r from-muted/40 to-muted/20 border border-border/50">
                        <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          {subsection.title}
                        </h4>
                        
                        {subsection.diagram && (
                          <div className="mb-3 p-3 bg-accent/10 rounded-lg border-l-4 border-accent">
                            <p className="font-mono text-sm text-accent-foreground">{subsection.diagram}</p>
                          </div>
                        )}
                        
                        <div className="space-y-1.5 text-foreground/90">
                          {subsection.content.map((line, lineIdx) => (
                            <p key={lineIdx} className={`${
                              line.startsWith('•') ? 'pl-4' : 
                              line.startsWith('  ') ? 'pl-8' : 
                              line === '' ? 'h-2' :
                              line.match(/^[🎯📊⚪🔑🎲📐🔗💪👶⚛️✓🔒💪🌳🕸️📝✏️🔐🔄👨‍💼👨‍🎨👨‍💻👥📁✅🏗️📋💾🔀💽➕📈⬆️⬇️🔍📌∪∩⨝🔄⬅️➡️↔️📐🎲💡🔤1️⃣N🏗️🔧🗑️✂️➕🔄❌🔍❌🕸️🎯]/) ? 'font-semibold mt-2' :
                              'leading-relaxed'
                            }`}>
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Quick Revision Zone */}
          <Card className="p-6 mb-8 bg-card/50 backdrop-blur-sm border-2 border-secondary/20">
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle className="h-6 w-6 text-secondary" />
              <h2 className="text-2xl font-bold">Quick Revision Points</h2>
            </div>
            
            <div className="grid gap-3">
              {unit.revisionPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all">
                  <div className="min-w-[24px] h-6 flex items-center justify-center rounded-full bg-secondary/20 text-secondary font-bold text-sm">
                    {i + 1}
                  </div>
                  <p className="text-foreground">{point}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Memory Hacks */}
          <Card className="p-6 mb-8 bg-card/50 backdrop-blur-sm border-2 border-accent/20">
            <div className="flex items-center gap-2 mb-6">
              <Lightbulb className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-bold">Memory Hacks</h2>
            </div>
            
            <div className="space-y-4">
              {unit.memoryHacks.map((hack, i) => (
                <div key={i} className="p-4 rounded-lg bg-accent/10 border border-accent/30 animate-slide-up"
                     style={{ animationDelay: `${i * 0.1}s` }}>
                  <p className="text-lg font-medium">{hack}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Exam Questions */}
          <Card className="p-6 mb-8 bg-card/50 backdrop-blur-sm border-2 border-primary/20">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Most Probable Exam Questions</h2>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {/* MCQs */}
              <AccordionItem value="mcq" className="border border-primary/20 rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">MCQs</Badge>
                    <span className="font-semibold">Multiple Choice Questions</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  {unit.questions.mcqs.map((mcq, i) => (
                    <div key={i} className="p-4 rounded-lg bg-muted/30">
                      <p className="font-semibold mb-3">Q{i + 1}. {mcq.question}</p>
                      <div className="space-y-2">
                        {mcq.options.map((option, j) => (
                          <div 
                            key={j} 
                            className={`p-2 rounded ${j === mcq.correct ? 'bg-secondary/20 border border-secondary/50' : 'bg-muted/50'}`}
                          >
                            {String.fromCharCode(65 + j)}. {option}
                            {j === mcq.correct && <span className="ml-2 text-secondary font-semibold">✓ Correct</span>}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>

              {/* Theory Questions */}
              <AccordionItem value="theory" className="border border-primary/20 rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Theory</Badge>
                    <span className="font-semibold">Descriptive Questions</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  {unit.questions.theory.map((q, i) => (
                    <div key={i} className="p-4 rounded-lg bg-muted/30">
                      <p className="font-semibold">Q{i + 1}. {q}</p>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>

              {/* Practical Questions */}
              <AccordionItem value="practical" className="border border-primary/20 rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Practical</Badge>
                    <span className="font-semibold">Problem Solving</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  {unit.questions.practical.map((q, i) => (
                    <div key={i} className="p-4 rounded-lg bg-muted/30">
                      <p className="font-semibold">Q{i + 1}. {q}</p>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          {/* Download PDF */}
          <Card className="p-6 bg-gradient-secondary text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <FileText className="h-8 w-8" />
                <div>
                  <h3 className="text-xl font-bold">Original Unit PDF</h3>
                  <p className="text-white/80">Download complete study material</p>
                </div>
              </div>
              <a href={`/units/unit${unit.id}.pdf`} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  View PDF
                </Button>
              </a>
            </div>
          </Card>

          {/* Navigation */}
          <div className="mt-8 flex justify-between">
            {unit.id > 1 && (
              <Link to={`/unit/${unit.id - 1}`}>
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous Unit
                </Button>
              </Link>
            )}
            {unit.id < 10 && (
              <Link to={`/unit/${unit.id + 1}`} className="ml-auto">
                <Button variant="outline">
                  Next Unit
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitPage;
