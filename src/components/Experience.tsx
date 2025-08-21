import React from "react";

const experiences = [
  {
    title: "AI/ML Engineer - Trainee",
    company: "Sherbet Rewards and Technologies",
    period: "2025 - Present",
    description: "London, UK",
  },
  {
    title: "Teaching Assistant",
    company: "PAF-IAST University",
    period: "Feb 2025 - Jun 2025",
    description: "Haripur, PK",
  },
  {
    title: "ERP Internship",
    company: "Datamation Systems (Pvt) Limited",
    period: "Aug 2023 - Sep 2023",
    description: "Colombo, SL",
  },
  {
    title: "Robotics Internship",
    company: "SPCAI",
    period: "Jul 2022 - Aug 2022",
    description: "Haripur, PK",
  },
  
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
        </div>
        <div className="relative flex justify-center">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-primary/30 rounded-full -translate-x-1/2 z-0" />
          <ul className="relative w-full max-w-2xl mx-auto flex flex-col gap-12 z-10">
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <li key={idx} className="flex w-full items-center">
                  {/* Left Side */}
                  <div className={`w-1/2 pr-6 flex justify-end`}>
                    {isLeft && (
                      <div className="text-right">
                        <div className="text-sm text-primary font-bold mb-1">{exp.period}</div>
                        <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>
                        <span className="font-semibold text-primary">{exp.company}</span>
                        <p className="text-base text-foreground mt-1">{exp.description}</p>
                      </div>
                    )}
                  </div>
                  {/* Simple Timeline Bullet (always centered) */}
                  <div className="w-0 flex flex-col items-center">
                    <span className="block w-3 h-3 rounded-full bg-primary z-10 border-2 border-background" style={{ left: '50%', transform: 'translateX(50%)' }}></span>
                  </div>
                  {/* Right Side */}
                  <div className={`w-1/2 pl-6 flex justify-start`}>
                    {!isLeft && (
                      <div className="text-left">
                        <div className="text-sm text-primary font-bold mb-1">{exp.period}</div>
                        <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>
                        <span className="font-semibold text-primary">{exp.company}</span>
                        <p className="text-base text-foreground mt-1">{exp.description}</p>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
