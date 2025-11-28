import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { units } from "@/data/unitsData";

const Syllabus = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              DBMS Syllabus
            </h1>
            <p className="text-xl text-muted-foreground">
              GTU BE Semester 3 - All 10 Units
            </p>
          </div>

          {/* Units Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {units.map((unit, index) => (
              <Card
                key={unit.id}
                className="relative p-6 bg-card/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/50 transition-all group hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity rounded-lg" />
                
                <div className="relative space-y-4">
                  {/* Unit Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary text-white font-bold text-xl">
                        {unit.id}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{unit.title}</h3>
                        <Badge variant="secondary" className="mt-1">
                          {unit.weightage}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Topics */}
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground font-semibold">Key Topics:</p>
                    <div className="flex flex-wrap gap-2">
                      {unit.topics.map((topic, i) => (
                        <Badge key={i} variant="outline" className="border-primary/30">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link to={`/unit/${unit.id}`}>
                    <Button className="w-full bg-gradient-primary hover:shadow-glow-neon transition-all">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Open Unit {unit.id}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Link to="/mcq-practice">
              <Card className="p-6 bg-secondary/10 border-secondary/30 hover:border-secondary transition-all cursor-pointer group">
                <div className="text-center space-y-2">
                  <h3 className="font-bold text-lg group-hover:text-secondary transition-colors">
                    Practice MCQs
                  </h3>
                  <p className="text-sm text-muted-foreground">Test your knowledge with unit-wise MCQs</p>
                </div>
              </Card>
            </Link>
            
            <Link to="/sql-practice">
              <Card className="p-6 bg-accent/10 border-accent/30 hover:border-accent transition-all cursor-pointer group">
                <div className="text-center space-y-2">
                  <h3 className="font-bold text-lg group-hover:text-accent transition-colors">
                    SQL Practice
                  </h3>
                  <p className="text-sm text-muted-foreground">Master SQL with hands-on exercises</p>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
