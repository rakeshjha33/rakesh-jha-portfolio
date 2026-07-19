"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, Download, FileText, Briefcase, GraduationCap, 
  Terminal as TerminalIcon, Code2, Database, Network, Heart, Award, ExternalLink,
  Clock, Calendar, CheckCircle2
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Portfolio() {
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<string[]>([
    "Welcome to RJ-OS v1.0.0 (Ubuntu 24.04 LTS kernel package)",
    "System status: OPERATIONAL // Cloud monitoring engine initialized.",
    "Type 'help' to review available terminal directives.",
    ""
  ]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
      setDate(now.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" }));
    };
    
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim().toLowerCase();
    if (!trimmedInput) return;

    let response: string[] = [];

    switch (trimmedInput) {
      case "help":
        response = [
          "Available directives:",
          "  help     - Display operational systems manifest.",
          "  skills   - Output specialized engineering domains.",
          "  projects - Enumerate active architectural projects.",
          "  clear    - Flush terminal console lines.",
          "  exit     - Shutdown console session interfaces."
        ];
        break;
      case "skills":
        response = [
          "Engineered Skills Inventory:",
          "  [DevOps]  AWS Cloud Ecosystem, Jenkins CI/CD Tracks, Kubernetes, Docker Engine, ArgoCD GitOps, Ansible Frameworks",
          "  [Core]    Ubuntu Systems Engineering, OSI Networking Paradigms, Subnet Routing Blueprints, Advanced Data Structures & DSA"
        ];
        break;
      case "projects":
        response = [
          "Production Engineering Projects Base:",
          "  1. Automated Serverless AWS Infrastructure Monitor (Serverless Telemetry Loop & Cost Governance)",
          "  2. Automated GitOps Engine & CI/CD Release Pipeline (Standardized Continuous Integration Release Track)",
          "  3. Highly Available Web Infrastructure & Cloud Governance Framework (Multi-AZ Subnet Isolation)",
          "  4. Multi-Container Platform Isolation & Microservices Network (Private Layering & Cluster Discovery Bridging)"
        ];
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "exit":
        response = ["Console shell suspended. Type 'help' to reconnect active standard terminal output blocks."];
        break;
      default:
        if (trimmedInput.startsWith("sudo")) {
          response = ["Permission Denied: User account 'guest' is not allowed to modify platform kernel variables."];
        } else {
          response = [`bash: command not found: ${input}. Type 'help' to review active console flags.`];
        }
    }

    setHistory((prev) => [...prev, `guest@rakeshjha:~$ ${input}`, ...response, ""]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground relative overflow-x-hidden">
      
      {/* Isolated Blueprint Grid Backdrop Element */}
      <div className="absolute inset-0 bg-grid-blueprint pointer-events-none z-0" />

      {/* Cyberwind stream layout track engines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        <div className="absolute top-[25%] left-0 w-80 h-[1px] bg-gradient-to-r from-transparent via-border/80 to-transparent animate-stream-1" />
        <div className="absolute top-[50%] left-0 w-[450px] h-[1px] bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent animate-stream-2" />
        <div className="absolute top-[80%] left-0 w-60 h-[1px] bg-gradient-to-r from-transparent via-border/80 to-transparent animate-stream-3" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-muted transition-all duration-300">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between text-sm font-medium tracking-wide">
          <div className="flex items-center gap-2.5 select-none">
            <span className="font-bold tracking-tighter text-lg hover:scale-105 transition-transform duration-200 cursor-pointer">RJ.</span>
            <div className="flex items-center gap-1.5 bg-muted/40 border border-muted/80 px-2 py-0.5 rounded-sm text-[10px] text-muted-foreground font-mono font-medium">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              SYS_OK
            </div>
          </div>
          <div className="hidden md:flex space-x-8 text-muted-foreground">
            <Link href="#about" className="hover:text-foreground transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-foreground after:transition-all after:duration-300">About</Link>
            <Link href="#education" className="hover:text-foreground transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-foreground after:transition-all after:duration-300">Education</Link>
            <Link href="#skills" className="hover:text-foreground transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-foreground after:transition-all after:duration-300">Skills</Link>
            <Link href="#projects" className="hover:text-foreground transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-foreground after:transition-all after:duration-300">Projects</Link>
            <Link href="#experience" className="hover:text-foreground transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-foreground after:transition-all after:duration-300">Experience</Link>
          </div>
          <Button variant="outline" size="sm" asChild className="hover:bg-muted transition-colors duration-200 rounded-none">
            <Link href="#resume">Contact & CV</Link>
          </Button>
        </div>
      </nav>

      {/* Floating Clock Component */}
      {time && (
        <div className="fixed bottom-6 right-6 z-50 backdrop-blur-md bg-background/60 border border-muted px-4 py-2.5 shadow-sm hover:shadow-md hover:border-foreground/20 transition-all duration-300 flex items-center gap-3 group animate-fade-in rounded-none">
          <div className="flex flex-col text-right font-mono">
            <span className="text-xs font-semibold tracking-wide text-foreground flex items-center gap-1.5 justify-end">
              <Clock className="w-3 h-3 text-muted-foreground group-hover:rotate-12 transition-transform duration-300" />
              {time}
            </span>
            <span className="text-[10px] text-muted-foreground flex items-center gap-1.5 justify-end mt-0.5">
              <Calendar className="w-2.5 h-3 text-muted-foreground/70" />
              {date}
            </span>
          </div>
        </div>
      )}

      <main className="max-w-4xl mx-auto px-6 py-20 space-y-32 relative z-10">
        
        {/* About Module */}
        <section id="about" className="flex flex-col items-center text-center space-y-6 pt-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-foreground">
            Rakesh <span className="font-semibold">Jha</span>
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed mt-4 transition-all duration-300">
            An engineering graduate with deep technical grounding in infrastructure automation, system operations, and core software mechanics. Proven ability to translate operational friction into scalable software blueprints through startup execution and engineering group leadership.
          </p>
          
          <div className="flex gap-4 pt-2">
            <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:bg-muted transition-all duration-200 hover:scale-105 rounded-none">
              <a href="mailto:rakeshraghavjha.30march@gmail.com" aria-label="Email"><Mail className="w-5 h-5" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:bg-muted transition-all duration-200 hover:scale-105 rounded-none">
              <a href="https://linkedin.com/in/rakeshjha33" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin className="w-5 h-5" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:bg-muted transition-all duration-200 hover:scale-105 rounded-none">
              <a href="https://github.com/rakeshjha33" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub className="w-5 h-5" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:bg-muted transition-all duration-200 hover:scale-105 rounded-none">
              <a href="https://x.com/rakeshjha2003" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter className="w-5 h-5" /></a>
            </Button>
          </div>

          <div className="w-full max-w-2xl mt-8 border border-muted bg-neutral-950 text-left font-mono rounded-none p-4 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-muted/60 pb-2 mb-3 text-[11px] text-muted-foreground tracking-wide select-none">
              <div className="flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-muted-foreground/80" />
                <span>guest@rakeshjha: ~ /bin/bash</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-neutral-800" />
                <span className="w-2 h-2 rounded-full bg-neutral-800" />
                <span className="w-2 h-2 rounded-full bg-neutral-800" />
              </div>
            </div>
            
            <div className="text-xs text-neutral-300 space-y-1 max-h-48 overflow-y-auto leading-relaxed select-text pr-2">
              {history.map((log, i) => (
                <div key={i} className="whitespace-pre-wrap">{log}</div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            <form onSubmit={handleCommand} className="flex items-center gap-1.5 text-xs pt-1.5 border-t border-muted/20 mt-2 select-none">
              <span className="text-emerald-500 font-semibold shrink-0">guest@rakeshjha:~$</span>
              <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="..."
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                className="w-full bg-transparent text-neutral-200 font-mono outline-none border-none p-0 focus:ring-0 placeholder:text-neutral-700"
              />
            </form>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="space-y-6 scroll-mt-20">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-4 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-muted-foreground" /> Education
          </h2>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 group p-4 border border-transparent hover:border-muted hover:bg-muted/5 transition-all duration-300 rounded-none">
              <div className="flex items-start gap-3">
                <div>
                  <a 
                    href="https://www.gjust.ac.in" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-lg font-medium text-foreground hover:text-primary inline-flex items-center gap-1.5 group/link transition-colors duration-200"
                  >
                    Guru Jambheshwar University of Science & Technology (GJUS&T)
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-60 group-hover/link:opacity-100 transition-opacity duration-200" />
                  </a>
                  <p className="text-sm text-muted-foreground">Bachelor of Technology in Information Technology</p>
                  <p className="text-xs text-muted-foreground/60 mt-0.5 font-medium">Hisar, Haryana</p>
                  <p className="text-xs text-muted-foreground/80 mt-2">Core Coursework: Operating Systems (OS), Database Management Systems (DBMS), Computer Networks (CN)</p>
                </div>
              </div>
              <span className="text-xs font-mono bg-muted/60 px-2 py-1 text-muted-foreground rounded-sm w-fit sm:text-right shrink-0">2021 - 2025</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-muted/50 text-sm">
              <div className="space-y-1 p-3 border border-transparent hover:border-muted hover:bg-muted/5 transition-all duration-300 rounded-none">
                <div className="flex justify-between font-medium">
                  <span>Class 12th — R.P.V.V, Lajpat Nagar-1, Delhi</span>
                  <span className="text-xs font-mono text-muted-foreground">90.4%</span>
                </div>
                <p className="text-xs text-muted-foreground">Physics, Chemistry, Mathematics, Computer Science, English</p>
              </div>
              <div className="space-y-1 p-3 border border-transparent hover:border-muted hover:bg-muted/5 transition-all duration-300 rounded-none">
                <div className="flex justify-between font-medium">
                  <span>Class 10th — R.P.V.V, Lajpat Nagar-1, Delhi</span>
                  <span className="text-xs font-mono text-muted-foreground">91.6%</span>
                </div>
                <p className="text-xs text-muted-foreground">Maths, Science, Social-Science, English, Hindi</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Inventory Section */}
        <section id="skills" className="space-y-8 scroll-mt-20">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-4">Technical Stack & Framework</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            
            <Card className="shadow-none bg-transparent border-muted rounded-none p-6 md:col-span-2 hover:border-foreground/20 transition-all duration-300">
              <div className="flex items-center gap-2 mb-6 border-b pb-2">
                <TerminalIcon className="w-5 h-5 text-muted-foreground" />
                <h3 className="font-semibold text-base text-foreground">DevOps & System Automation</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs font-sans">
                <div className="space-y-1">
                  <span className="text-muted-foreground font-medium text-[11px] uppercase tracking-wider block">Continuous Integration & Delivery</span>
                  <p className="text-foreground font-medium text-sm leading-relaxed">Automated release tracks utilizing <span className="font-semibold">Jenkins</span>, declarative GitOps workflows with <span className="font-semibold">ArgoCD</span>, and managed triggers via <span className="font-semibold">GitHub Actions</span>.</p>
                </div>
                <div className="space-y-1">
                  <span className="text-muted-foreground font-medium text-[11px] uppercase tracking-wider block">Infrastructure as Code</span>
                  <p className="text-foreground font-medium text-sm leading-relaxed">Configuration management via <span className="font-semibold">Ansible Playbooks (YAML)</span> and declarative cloud resource provisioning with <span className="font-semibold">Terraform Modules</span>.</p>
                </div>
                <div className="space-y-1">
                  <span className="text-muted-foreground font-medium text-[11px] uppercase tracking-wider block">Container Orchestration</span>
                  <p className="text-foreground font-semibold text-sm leading-relaxed">Lightweight microservice sandboxing using <span className="font-semibold">Docker</span> paired with clustered scale and secure runtime management via <span className="font-semibold">Kubernetes (K8s)</span>.</p>
                </div>
                <div className="space-y-1 lg:col-span-2">
                  <span className="text-muted-foreground font-medium text-[11px] uppercase tracking-wider block">Amazon Web Services (AWS) Platform</span>
                  <p className="text-foreground text-xs leading-relaxed">
                    Hands-on environments spanning isolated networking (<span className="font-medium">VPC, CloudFront</span>), compute (<span className="font-medium">EC2, Lambda</span>), storage & data (<span className="font-medium">S3, DynamoDB</span>), security & routing (<span className="font-medium">IAM, API Gateway, Route53</span>), event streaming (<span className="font-medium">SNS</span>), and infrastructure template deployments (<span className="font-medium">AWS CLI, CloudWatch, CFT, AWS CI/CD</span>).
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-muted-foreground font-medium text-[11px] uppercase tracking-wider block">Telemetry & System Health</span>
                  <p className="text-foreground font-medium text-sm leading-relaxed">Active server metrics aggregation through <span className="font-semibold">Prometheus</span> visual analytics reporting inside unified <span className="font-semibold">Grafana</span> control dashboards.</p>
                </div>
              </div>
            </Card>

            <Card className="shadow-none bg-transparent border-muted rounded-none p-6 hover:border-foreground/20 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-semibold text-foreground border-b pb-2">
                  <Network className="w-5 h-5 text-muted-foreground" />
                  <h3 className="text-base">Networking & Linux Engineering</h3>
                </div>
                <ul className="space-y-2 text-xs text-muted-foreground list-none pl-0">
                  <li className="flex items-start gap-2">
                    <span className="text-foreground font-bold font-sans mt-0.5">·</span>
                    <span><strong className="text-foreground font-medium">IP Infrastructure & Subnetting:</strong> Complete mastery of IPv4/IPv6 address provisioning, CIDR block allocation, and custom subnet masking logic.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground font-bold font-sans mt-0.5">·</span>
                    <span><strong className="text-foreground font-medium">Core Protocols & Traffic:</strong> Intimate understanding of network layers including TCP/IP models, DNS hostname resolution, dynamic DHCP setups, NAT traversal, and secure HTTP/HTTPS communication paths.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground font-bold font-sans mt-0.5">·</span>
                    <span><strong className="text-foreground font-medium">Linux OS Proficiency:</strong> Advanced systems fluency in Ubuntu environments, implementing native shell scripting routines to automate socket mechanics, port mappings, and infrastructure diagnostic tracing.</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="shadow-none bg-transparent border-muted rounded-none p-6 hover:border-foreground/20 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-semibold text-foreground border-b pb-2">
                  <Database className="w-5 h-5 text-muted-foreground" />
                  <h3 className="text-base">Computer Science & Data</h3>
                </div>
                <ul className="space-y-2.5 text-xs text-muted-foreground list-none pl-0">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-muted-foreground/80 shrink-0" />
                    <span><strong className="text-foreground font-medium">Operating Systems (OS):</strong> Thread management, memory boundaries, and file structures.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-muted-foreground/80 shrink-0" />
                    <span><strong className="text-foreground font-medium">Database Management Systems (DBMS):</strong> Relational structures, schema indexing, and structured SQL operations.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-muted-foreground/80 shrink-0" />
                    <span><strong className="text-foreground font-medium">Computer Networks (CN):</strong> Deep understanding of standard end-to-end routing paradigms.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-muted-foreground/80 shrink-0" />
                    <span><strong className="text-foreground font-medium">System Design:</strong> Creating fault-tolerant environments, managing service dependencies, and cluster scaling.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-muted-foreground/80 shrink-0" />
                    <span><strong className="text-foreground font-medium">Data Structures & Algorithms (DSA):</strong> Optimization strategies, algorithm design, and resource footprint tracking.</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="shadow-none bg-transparent border-muted rounded-none p-6 md:col-span-2 hover:border-foreground/20 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-muted/20 border border-muted text-muted-foreground rounded-sm"><Code2 className="w-4 h-4" /></div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground uppercase tracking-wider font-sans">Software Programming Languages</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">Functional environments utilized to engineer core utilities and operational tasks.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-3">
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground border-l-2 border-primary pl-2">Core Development Fluency</h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="rounded-none bg-background px-3 py-1 font-mono text-xs font-semibold text-foreground border-muted-foreground/35 shadow-sm">Python</Badge>
                    <Badge variant="outline" className="rounded-none bg-background px-3 py-1 font-mono text-xs font-semibold text-foreground border-muted-foreground/35 shadow-sm">Java</Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground border-l-2 border-muted pl-2">Technical Framework Exposure</h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="rounded-none bg-background/40 px-3 py-1 font-mono text-xs text-muted-foreground border-muted/70">C</Badge>
                    <Badge variant="outline" className="rounded-none bg-background/40 px-3 py-1 font-mono text-xs text-muted-foreground border-muted/70">C++</Badge>
                    <Badge variant="outline" className="rounded-none bg-background/40 px-3 py-1 font-mono text-xs text-muted-foreground border-muted/70">C#</Badge>
                  </div>
                </div>
              </div>
            </Card>

          </div>
        </section>

        {/* Selected Architecture & Engineering */}
        <section id="projects" className="space-y-8 scroll-mt-20">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-4">Selected Architecture & Engineering</h2>
          <div className="grid grid-cols-1 gap-12">
            
            {/* Project 1 */}
            <Card className="shadow-none bg-transparent border-muted rounded-none hover:border-foreground/30 transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold flex items-center justify-between gap-4">
                  <span>Automated Serverless AWS Infrastructure Monitor</span>
                </CardTitle>
                <CardDescription className="font-mono text-xs text-muted-foreground">Serverless Telemetry Loop & Cost Governance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-outside ml-4 text-sm text-muted-foreground space-y-1.5 leading-relaxed">
                  <li>Built an automated, zero-cost monitoring tool to track AWS resource usage across EC2, S3, Lambda, and IAM.</li>
                  <li>Used GitHub Actions to run Bash and AWS CLI scripts every 15 minutes to collect infrastructure data.</li>
                  <li>Created a Python AWS Lambda function and API Gateway to store the collected data in DynamoDB for long-term audit.</li>
                  <li>Set up Amazon SNS to send automatic email alerts if server usage exceeds safety limits, proactively preventing billing spikes.</li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Badge variant="secondary" className="rounded-none bg-muted/50 font-normal">AWS Stack</Badge>
                  <Badge variant="secondary" className="rounded-none bg-muted/50 font-normal">Python</Badge>
                  <Badge variant="secondary" className="rounded-none bg-muted/50 font-normal">Bash</Badge>
                  <Badge variant="secondary" className="rounded-none bg-muted/50 font-normal">GitHub Actions</Badge>
                  <Badge variant="secondary" className="rounded-none bg-muted/50 font-normal">DynamoDB</Badge>
                </div>
                <div className="pt-2 group/img border border-muted bg-muted/5 p-2 overflow-hidden rounded-sm transition-all duration-300 hover:border-foreground/20 hover:ring-1 hover:ring-foreground/10">
                  <img 
                    src="/screenshots/aws-resource-tracker.png" 
                    alt="AWS Serverless Resource Monitor Terminal Interface View" 
                    className="max-h-96 w-auto object-contain mx-auto transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) group-hover/img:scale-[1.015]"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="shadow-none bg-transparent border-muted rounded-none hover:border-foreground/30 transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold">Automated GitOps Engine & CI/CD Release Pipeline</CardTitle>
                <CardDescription className="font-mono text-xs text-muted-foreground">Standardized Continuous Integration Release Track</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-outside ml-4 text-sm text-muted-foreground space-y-1.5 leading-relaxed">
                  <li>Created an automated CI/CD pipeline using Jenkins to compile code, run tests, and perform automated quality checks.</li>
                  <li>Implemented GitOps using Kubernetes and ArgoCD to maintain infrastructure state, ensuring deployments are safe and consistent.</li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Badge variant="secondary" className="rounded-none bg-muted/50 font-normal">Jenkins</Badge>
                  <Badge variant="secondary" className="rounded-none bg-muted/50 font-normal">ArgoCD</Badge>
                  <Badge variant="secondary" className="rounded-none bg-muted/50 font-normal">Kubernetes</Badge>
                  <Badge variant="secondary" className="rounded-none bg-muted/50 font-normal">GitHub Actions</Badge>
                </div>
                <div className="pt-2 group/img border border-muted bg-muted/5 p-2 overflow-hidden rounded-sm transition-all duration-300 hover:border-foreground/20 hover:ring-1 hover:ring-foreground/10">
                  <img 
                    src="/screenshots/CI-CD pipeline.png" 
                    alt="Jenkins and ArgoCD GitOps Build Validation Track Panel" 
                    className="max-h-96 w-auto object-contain mx-auto transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) group-hover/img:scale-[1.015]"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="shadow-none bg-transparent border-muted rounded-none hover:border-foreground/30 transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold">Highly Available Web Infrastructure & Cloud Governance Framework</CardTitle>
                <CardDescription className="font-mono text-xs text-muted-foreground">Multi-AZ Subnet Isolation Architecture</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-outside ml-4 text-sm text-muted-foreground space-y-1.5 leading-relaxed">
                  <li>Designed a secure AWS virtual network (VPC) across multiple Availability Zones, separating public and private traffic.</li>
                  <li>Managed website traffic using an Application Load Balancer and Route53, with Auto Scaling to handle demand.</li>
                  <li>Wrote Bash scripts to automatically monitor cloud resources and report unused or dangling instances to optimize costs.</li>
                  <li>Configured a Bastion Host with strict IAM policies to ensure secure, auditable administration of private backend servers.</li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Badge variant="secondary" className="rounded-none bg-muted/50 font-normal">AWS VPC</Badge>
                  <Badge variant="secondary" className="rounded-none bg-muted/50 font-normal">Auto Scaling</Badge>
                  <Badge variant="secondary" className="rounded-none bg-muted/50 font-normal">Load Balancer</Badge>
                  <Badge variant="secondary" className="rounded-none bg-muted/50 font-normal">Bash Scripting</Badge>
                </div>
                <div className="pt-2 group/img border border-muted bg-muted/5 p-2 overflow-hidden rounded-sm transition-all duration-300 hover:border-foreground/20 hover:ring-1 hover:ring-foreground/10">
                  <img 
                    src="/screenshots/VPC 3-tier.png" 
                    alt="Multi-AZ AWS VPC Network Subnet Distribution Blueprint" 
                    className="max-h-96 w-auto object-contain mx-auto transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) group-hover/img:scale-[1.015]"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Project 4 */}
            <Card className="shadow-none bg-transparent border-muted rounded-none hover:border-foreground/30 transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold">Multi-Container Platform Isolation & Microservices Network</CardTitle>
                <CardDescription className="font-mono text-xs text-muted-foreground">Private Layering & Cluster Discovery Bridging</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-outside ml-4 text-sm text-muted-foreground space-y-1.5 leading-relaxed">
                  <li>Packaged applications into lightweight Docker containers using multi-stage builds to optimize image size and startup times.</li>
                  <li>Built a secure Kubernetes networking layer that allows internal microservices to communicate privately while blocking unauthorized external access.</li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Badge variant="secondary" className="rounded-none bg-muted/50 font-normal">Docker</Badge>
                  <Badge variant="secondary" className="rounded-none bg-muted/50 font-normal">Kubernetes</Badge>
                  <Badge variant="secondary" className="rounded-none bg-muted/50 font-normal">Terraform</Badge>
                </div>
                <div className="pt-2 group/img border border-muted bg-muted/5 p-2 overflow-hidden rounded-sm transition-all duration-300 hover:border-foreground/20 hover:ring-1 hover:ring-foreground/10">
                  <img 
                    src="/screenshots/docker-compose.png" 
                    alt="Multi-stage Container Network Bridge Discovery Interfaces" 
                    className="max-h-96 w-auto object-contain mx-auto transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) group-hover/img:scale-[1.015]"
                  />
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-8 scroll-mt-20">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-4">Professional Experience</h2>
          <div className="relative border-l border-muted ml-3 pl-8 space-y-12">
            
            <div className="relative group">
              <div className="absolute w-3 h-3 bg-background border-2 border-primary rounded-full -left-[38px] top-1.5 transition-transform duration-300 group-hover:scale-125" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">Product & Operations Intern</h3>
                  <a href="https://www.zibmate.com/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-200" aria-label="Zibmate Website">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <span className="text-xs font-mono bg-muted/60 px-2 py-1 text-muted-foreground rounded-sm w-fit">Jan 2026 - Jun 2026</span>
              </div>
              <p className="text-xs font-medium text-muted-foreground/80 mt-0.5">Zibmate · Full-time</p>
              <ul className="list-disc list-outside ml-4 text-sm text-muted-foreground space-y-2 leading-relaxed max-w-3xl mt-3">
                <li>Directed end-to-end product design, high-level information architecture frameworks, and strategic product roadmaps targeting property discovery platforms.</li>
                <li>Analyzed student consumer behaviors and real estate search profiles to wireframe multi-tier application flows and structural map interactions.</li>
                <li>Led and orchestrated engineering sprints alongside design assets to optimize core feature deployment velocity towards MVP targets.</li>
              </ul>
            </div>

            <div className="relative group">
              <div className="absolute w-3 h-3 bg-background border-2 border-muted-foreground rounded-full -left-[38px] top-1.5 transition-transform duration-300 group-hover:scale-125" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">Technical Product Management Intern</h3>
                  <a href="https://www.foundersclan.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-200" aria-label="Foundersclan Website">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <span className="text-xs font-mono bg-muted/60 px-2 py-1 text-muted-foreground rounded-sm w-fit">Aug 2025 - Dec 2025</span>
              </div>
              <p className="text-xs font-medium text-muted-foreground/80 mt-0.5">Foundersclan · Full-time</p>
              <ul className="list-disc list-outside ml-4 text-sm text-muted-foreground space-y-2 leading-relaxed max-w-3xl mt-3">
                <li>Translated complex market demand patterns into crisp technical documentation, feature specifications, and operational launch milestones.</li>
                <li>Architected high-level product information hierarchies and technical infrastructure blueprints to align cross-functional engineering lines.</li>
                <li>Established foundational team hierarchies, asset roles, and operational communication paths to compress development cycles.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Leadership Section */}
        <section id="volunteering" className="space-y-8">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-4">Leadership & Volunteering</h2>
          <div className="space-y-6">
            <div className="space-y-3 group p-4 border border-transparent hover:border-muted hover:bg-muted/5 transition-all duration-300 rounded-none">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-200">Club Coordinator & Core Team Representative</h3>
                  <a href="https://www.youtube.com/@SpeakathonClub" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-red-500 transition-colors duration-200" aria-label="Speakathon Club YouTube">
                    <FaYoutube className="w-4 h-4" />
                  </a>
                </div>
                <span className="text-xs font-mono bg-muted/60 px-2 py-1 text-muted-foreground rounded-sm w-fit">July 2023 - July 2024</span>
              </div>
              <p className="text-xs font-medium text-muted-foreground/80">Speakathon Club | Training & Placement Cell, GJUS&T</p>
              <ul className="list-disc list-outside ml-4 text-sm text-muted-foreground space-y-2 leading-relaxed max-w-3xl mt-1">
                <li>Led a cross-functional team to organize communication bootcamps, technical presentations, and mock interviews.</li>
                <li>Boosted placement readiness and professional confidence for over 200 engineering candidates through systematic workshops.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Credentials & Interests Blocks */}
        <section id="ancillary" className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <Card className="shadow-none bg-transparent border-muted rounded-none p-6 hover:border-foreground/20 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold tracking-tight border-b pb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-muted-foreground" /> Professional Credentials
              </h2>
              <div className="space-y-4 text-xs">
                <div className="p-3 bg-muted/20 border border-muted/50 rounded-sm">
                  <span className="font-medium text-foreground block text-sm">Cisco Certified Network Associate (CCNA)</span>
                  <p className="text-muted-foreground mt-1 leading-relaxed">Focus Area: Routing & Switching Essentials infrastructure blueprints.</p>
                  <span className="text-[10px] font-mono bg-background border border-muted text-muted-foreground px-1.5 py-0.5 rounded-sm inline-block mt-2 font-semibold">Technical Prep Track In Progress</span>
                </div>
                
                <div className="pt-2">
                  <span className="font-semibold text-foreground uppercase tracking-wider text-[10px] block mb-1.5">Language Fluency</span>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 bg-muted/10 border border-muted/30">
                      <span className="font-medium text-foreground block">English</span>
                      <span className="text-muted-foreground text-[11px]">Professional Fluency</span>
                    </div>
                    <div className="p-2 bg-muted/10 border border-muted/30">
                      <span className="font-medium text-foreground block">Hindi</span>
                      <span className="text-muted-foreground text-[11px]">Native Fluency</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="shadow-none bg-transparent border-muted rounded-none p-6 hover:border-foreground/20 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold tracking-tight border-b pb-2 flex items-center gap-2">
                <Heart className="w-5 h-5 text-muted-foreground" /> Hobbies & Personal Interests
              </h2>
              <div className="space-y-3 text-xs text-muted-foreground font-sans">
                <p className="leading-relaxed">Activities that build logical strategy patterns, refresh cognitive performance, and expand creative execution outside system environments.</p>
                <ul className="space-y-2 pl-0 list-none pt-2">
                  <li className="flex items-center gap-3 p-2 bg-muted/10 border border-muted/30 rounded-none">
                    <span className="w-1.5 h-1.5 bg-foreground shrink-0 rounded-none" />
                    <span>Competitive Strategy Chess</span>
                  </li>
                  <li className="flex items-center gap-3 p-2 bg-muted/10 border border-muted/30 rounded-none">
                    <span className="w-1.5 h-1.5 bg-foreground shrink-0 rounded-none" />
                    <span>Immersive PC Gaming</span>
                  </li>
                  <li className="flex items-center gap-3 p-2 bg-muted/10 border border-muted/30 rounded-none">
                    <span className="w-1.5 h-1.5 bg-foreground shrink-0 rounded-none" />
                    <span>Reading Self-Help & Spiritual Literature</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Credentials & Contact Pipeline */}
        <section id="resume" className="space-y-8 bg-muted/20 p-8 rounded-none border border-muted text-center transition-all duration-300">
          <div className="max-w-2xl mx-auto space-y-6">
            <FileText className="w-12 h-12 mx-auto text-muted-foreground" />
            <h2 className="text-2xl font-semibold tracking-tight">Credentials & Engagement</h2>
            <p className="text-sm text-muted-foreground">
              Review my cloud architecture records or initiate direct operational communication pipelines.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 max-w-xl mx-auto">
              <Card className="shadow-none bg-background rounded-none border-muted flex flex-col justify-between hover:border-foreground/30 hover:bg-muted/5 transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-base font-semibold">Technical Profile Record</CardTitle>
                  <CardDescription className="font-mono text-xs">Curriculum Vitae</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center gap-2 pb-6">
                  <Button size="sm" asChild className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200">
                    <a href="/Rakesh_Jha_Resume.pdf" target="_blank" rel="noopener noreferrer">View</a>
                  </Button>
                  <Button size="sm" variant="outline" asChild className="rounded-none gap-2 hover:bg-muted transition-colors duration-200">
                    <a href="/Rakesh_Jha_Resume.pdf" download="Rakesh_Jha_Resume.pdf">
                      <Download className="w-4 h-4" /> Save
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-none bg-background rounded-none border-muted flex flex-col justify-between hover:border-foreground/30 hover:bg-muted/5 transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-base font-semibold">Contact & Inquiries</CardTitle>
                  <CardDescription className="font-mono text-xs">Direct Mail Communication</CardDescription>
                </CardHeader>
                <CardContent className="pb-6">
                  <Button size="sm" asChild className="rounded-none w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200">
                    <a href="mailto:rakeshraghavjha.30march@gmail.com">
                      <Mail className="w-4 h-4" /> Message Rakesh
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      </main>

      <footer className="py-8 text-center text-xs text-muted-foreground border-t border-muted">
        <p>© {new Date().getFullYear()} Rakesh Jha. All rights reserved.</p>
      </footer>
    </div>
  );
}
