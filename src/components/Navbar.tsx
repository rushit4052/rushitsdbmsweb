import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <BookOpen className="h-8 w-8 text-primary group-hover:text-secondary transition-colors" />
              <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-secondary/30 transition-all" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              GTU DBMS Hub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button
                variant={isActive("/") ? "default" : "ghost"}
                className={isActive("/") ? "bg-gradient-primary" : ""}
              >
                Home
              </Button>
            </Link>
            <Link to="/syllabus">
              <Button
                variant={isActive("/syllabus") ? "default" : "ghost"}
                className={isActive("/syllabus") ? "bg-gradient-primary" : ""}
              >
                Syllabus
              </Button>
            </Link>
            <Link to="/mcq-practice">
              <Button
                variant={isActive("/mcq-practice") ? "default" : "ghost"}
                className={isActive("/mcq-practice") ? "bg-gradient-primary" : ""}
              >
                MCQ Practice
              </Button>
            </Link>
            <Link to="/sql-practice">
              <Button
                variant={isActive("/sql-practice") ? "default" : "ghost"}
                className={isActive("/sql-practice") ? "bg-gradient-primary" : ""}
              >
                SQL Practice
              </Button>
            </Link>
            
            {/* Search Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(!searchOpen)}
              className="ml-2"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="py-3 animate-slide-up">
            <Input
              placeholder="Search concepts, topics, questions..."
              className="bg-muted/50 border-primary/20"
            />
          </div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-slide-up">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <Button
                variant={isActive("/") ? "default" : "ghost"}
                className={`w-full justify-start ${isActive("/") ? "bg-gradient-primary" : ""}`}
              >
                Home
              </Button>
            </Link>
            <Link to="/syllabus" onClick={() => setIsOpen(false)}>
              <Button
                variant={isActive("/syllabus") ? "default" : "ghost"}
                className={`w-full justify-start ${isActive("/syllabus") ? "bg-gradient-primary" : ""}`}
              >
                Syllabus
              </Button>
            </Link>
            <Link to="/mcq-practice" onClick={() => setIsOpen(false)}>
              <Button
                variant={isActive("/mcq-practice") ? "default" : "ghost"}
                className={`w-full justify-start ${isActive("/mcq-practice") ? "bg-gradient-primary" : ""}`}
              >
                MCQ Practice
              </Button>
            </Link>
            <Link to="/sql-practice" onClick={() => setIsOpen(false)}>
              <Button
                variant={isActive("/sql-practice") ? "default" : "ghost"}
                className={`w-full justify-start ${isActive("/sql-practice") ? "bg-gradient-primary" : ""}`}
              >
                SQL Practice
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
