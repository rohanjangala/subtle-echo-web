import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

const quotes = [
  "The best way to predict the future is to create it.",
  "Innovation distinguishes between a leader and a follower.",
  "The only impossible journey is the one you never begin.",
  "Progress is not in enhancing what is, but in advancing toward what will be.",
  "Simplicity is the ultimate sophistication.",
  "Technology is best when it brings people together.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Code is poetry written in logic."
];

const Activity = () => {
  const [currentQuotes, setCurrentQuotes] = useState<string[]>([]);

  useEffect(() => {
    // Function to get 4 random quotes
    const getRandomQuotes = () => {
      const shuffled = [...quotes].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 4);
    };

    // Set initial quotes
    setCurrentQuotes(getRandomQuotes());

    // Set up interval to change quotes every 30 seconds
    const interval = setInterval(() => {
      setCurrentQuotes(getRandomQuotes());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20 px-6">
      <div className="container mx-auto py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-foreground mb-4 tracking-wide">
            Daily Inspiration
          </h1>
          <p className="text-muted-foreground text-lg">
            Quotes that inspire creativity and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {currentQuotes.map((quote, index) => (
            <Card
              key={`${quote}-${index}`}
              className="bg-gradient-card shadow-soft border-0 p-8 transition-all duration-500 hover:shadow-medium hover:scale-105"
            >
              <div className="text-center">
                <p className="text-foreground text-lg leading-relaxed font-light italic">
                  "{quote}"
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Quotes refresh every 30 seconds
          </p>
        </div>
      </div>
    </div>
  );
};

export default Activity;