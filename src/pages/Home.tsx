import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Brain, Target, Zap, Award, TrendingUp } from "lucide-react";
import { Navbar } from "@/components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block animate-slide-up">
              <span className="px-4 py-2 bg-gradient-primary text-white text-sm font-semibold rounded-full">
                GTU BE SEM 3
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                GTU DBMS Exam Hub
              </span>
              <br />
              <span className="text-foreground">Score More in Less Time</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
              All 10 Units • Visual Notes • PDFs • Expected Questions • Free Access
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/syllabus">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow-neon transition-all text-lg px-8">
                  <Zap className="mr-2 h-5 w-5" />
                  Start Studying
                </Button>
              </Link>
              <Link to="/syllabus">
                <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 text-lg px-8">
                  <BookOpen className="mr-2 h-5 w-5" />
                  View Syllabus
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: BookOpen, label: "10 Units", value: "Complete Coverage", color: "primary" },
              { icon: Brain, label: "120+ Concepts", value: "Key Topics", color: "secondary" },
              { icon: Target, label: "300+ Questions", value: "Exam Ready", color: "accent" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="relative p-6 bg-card/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/50 transition-all animate-slide-up group hover:scale-105"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity rounded-lg" />
                <div className="relative space-y-3">
                  <stat.icon className={`h-12 w-12 text-${stat.color} mx-auto`} />
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            Why This Platform is Different
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Brain,
                title: "Visual Learning",
                description: "Concept flows and diagrams that make complex topics easy to understand",
                color: "primary"
              },
              {
                icon: Zap,
                title: "Quick Revision",
                description: "Bullet-point summaries for last-minute exam preparation",
                color: "secondary"
              },
              {
                icon: Award,
                title: "Memory Hacks",
                description: "Smart mnemonics and tricks to remember concepts forever",
                color: "accent"
              },
              {
                icon: Target,
                title: "Exam-Focused",
                description: "Most probable questions and previous year patterns",
                color: "primary"
              },
              {
                icon: TrendingUp,
                title: "Progress Tracking",
                description: "Track your completion and identify weak areas",
                color: "secondary"
              },
              {
                icon: BookOpen,
                title: "Complete PDFs",
                description: "Download and access all unit materials offline",
                color: "accent"
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="relative p-6 bg-card/30 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all group hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity rounded-lg" />
                <div className="relative space-y-4">
                  <div className={`inline-flex p-3 bg-${feature.color}/10 rounded-lg`}>
                    <feature.icon className={`h-6 w-6 text-${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="relative p-12 bg-gradient-primary text-white overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
            <div className="relative text-center space-y-6 max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold">Ready to Ace Your DBMS Exam?</h2>
              <p className="text-lg opacity-90">
                Join thousands of GTU students who are studying smarter, not harder
              </p>
              <Link to="/syllabus">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore All Units
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-primary/20">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>Built for GTU Students • Open Learning • Exam-Oriented</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
