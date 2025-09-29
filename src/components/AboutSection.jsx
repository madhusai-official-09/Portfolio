import { BrainCircuitIcon, BrainCogIcon, BrainIcon, BriefcaseIcon, CodeIcon, UserIcon } from "lucide-react"


export const AboutSection = () => {
    return (
    <section id="about" className="py-24 px-4 relative"> 
    {" "}
    <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Passionate AIML & Full Stack Developer</h3>
                <p className="text-muted-foreground">
                With merging IEEE-recognized research with hands-on expertise to build innovative, intelligent systems and cloud-based web applications.
                 I drive projects from concept to deployment, translating academic excellence into powerful, meaningful technology.🚀🧠 
                </p>

                <p className="text-muted-foreground">
                I'm a curious and driven developer constantly exploring the cutting edge of AIML and Full Stack to solve real-world problems. 
                My passion is learning new things and applying that knowledge immediately, ensuring my projects deliver both academic rigor and hands-on, meaningful impact. 🚀📚
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="cosmic-button"> 
                        {" "}
                        Get In Touch
                        </a>

         <a href="https://drive.google.com/file/d/1nlqwauqRYtpzrtsPJgUSXOKmoyyArDeg/view?usp=drive_link" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
          {" "}
          Download CV
            </a>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <CodeIcon className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">Web Development</h4>
                            <p className="text-muted-foreground">
                                Creating responsive websites and web applications with modern frameworks.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <BrainIcon className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">AIML Development</h4>
                            <p className="text-muted-foreground">
                                Building intelligent systems, machine learning models, and data-driven solutions.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <BriefcaseIcon className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">Project Management</h4>
                            <p className="text-muted-foreground">
                                Leading projects from conception to completion with agile methodologies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
    </section>
    )
}
