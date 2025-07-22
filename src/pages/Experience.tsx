import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Code, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: GraduationCap,
      title: "Engineering Graduate",
      period: "2024",
      description: "Successfully completed engineering degree with focus on software development and technology innovation.",
      color: "text-blue-600"
    },
    {
      icon: Briefcase,
      title: "AI Prompting Specialist",
      period: "4 months",
      description: "Full-time experience in AI prompting, developing and optimizing prompts for various AI applications and systems.",
      color: "text-purple-600"
    },
    {
      icon: Code,
      title: "ROS Stack Developer",
      period: "1 year",
      description: "Full-stack development experience with Robot Operating System (ROS), building autonomous robotics solutions.",
      color: "text-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20 px-6">
      <div className="container mx-auto py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-foreground mb-4 tracking-wide">
            Professional Experience
          </h1>
          <p className="text-muted-foreground text-lg">
            My journey as a software developer
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <Card
                key={index}
                className="bg-gradient-card shadow-soft border-0 p-8 transition-all duration-300 hover:shadow-medium"
              >
                <div className="flex items-start space-x-6">
                  <div className={`p-3 rounded-full bg-muted ${exp.color}`}>
                    <IconComponent size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-medium text-foreground">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar size={16} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Card className="bg-gradient-card shadow-soft border-0 p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-medium text-foreground mb-4">
              Looking Forward
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Passionate about creating innovative solutions through code, with experience spanning 
              AI technologies and robotics systems. Always eager to learn new technologies and 
              contribute to meaningful projects.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Experience;