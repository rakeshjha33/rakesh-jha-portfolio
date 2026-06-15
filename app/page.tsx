import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Download, FileText } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-muted">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between text-sm font-medium tracking-wide">
          <span className="font-bold tracking-tighter text-lg">RJ.</span>
          <div className="hidden md:flex space-x-8 text-muted-foreground">
            <Link href="#about" className="hover:text-foreground transition-colors">About</Link>
            <Link href="#skills" className="hover:text-foreground transition-colors">Skills</Link>
            <Link href="#experience" className="hover:text-foreground transition-colors">Experience</Link>
            <Link href="#projects" className="hover:text-foreground transition-colors">Projects</Link>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href="#resume">Resumes</Link>
          </Button>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-20 space-y-32">
        
        {/* Header / Hero Section */}
        <section id="about" className="flex flex-col items-center text-center space-y-6 pt-12">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-foreground">
            Rakesh <span className="font-semibold">Jha</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl">
            Cloud Operations & Technical Sales Engineer
          </p>
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl leading-relaxed mt-4">
            Bridging the gap between complex infrastructure and strategic business growth. I combine deep technical expertise in AWS cloud architecture and CI/CD pipelines with a definitive track record in corporate sales, GTM strategy, and enterprise stakeholder management.
          </p>
          
          <div className="flex gap-4 pt-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:rakeshraghavjha.30march@gmail.com" aria-label="Email"><Mail className="w-5 h-5" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com/in/rakeshjha33" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin className="w-5 h-5" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/rakeshjha33" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub className="w-5 h-5" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://x.com/rakeshjha2003" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter className="w-5 h-5" /></a>
            </Button>
          </div>
        </section>

        {/* Professional Summary & Skills */}
        <section id="skills" className="space-y-8">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-4">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div className="space-y-2">
              <h3 className="font-medium text-foreground">Corporate Sales & GTM</h3>
              <p className="text-muted-foreground leading-relaxed">Enterprise Sales Pitching, B2B Deal Closing, Pipeline Forecasting, Digital Brand Marketing, Stakeholder Management.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-foreground">Cloud Architecture</h3>
              <p className="text-muted-foreground leading-relaxed">AWS (EC2, VPC, S3, IAM), Linux Systems Internals, High-Availability Layouts, Infrastructure as Code (Terraform).</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-foreground">DevOps & Platforms</h3>
              <p className="text-muted-foreground leading-relaxed">CI/CD Pipelines (Jenkins, GitHub Actions), GitOps (ArgoCD), Containerization (Docker, Kubernetes), Telemetry.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-foreground">Data & Languages</h3>
              <p className="text-muted-foreground leading-relaxed">Python, Java, Advanced Bash Scripting, SQL, Relational Schemas, Data-Driven Pipeline Forecasting.</p>
            </div>
          </div>
        </section>

        {/* Dual-Track Experience Timeline */}
        <section id="experience" className="space-y-8">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-4">Professional Experience</h2>
          <div className="space-y-8 border-l border-muted ml-3 pl-8 relative">
            
            {/* Timeline Item 1: Business/Sales */}
            <div className="relative">
              <div className="absolute w-3 h-3 bg-foreground rounded-full -left-[38px] top-1.5" />
              <h3 className="text-lg font-medium">Startup Mentor (Strategy & Sales)</h3>
              <span className="text-sm text-muted-foreground">Foundersclan | Feb 2025 - Present</span>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                Strategized targeted B2B sales workflows and accelerated regional outreach across competitive demographics. Closed a major corporate workshop of 150+ participants by securing 2 external commercial sponsorships, achieving self-funding status.
              </p>
            </div>

            {/* Timeline Item 2: Technical/Cloud */}
            <div className="relative">
              <div className="absolute w-3 h-3 bg-muted border border-foreground rounded-full -left-[38px] top-1.5" />
              <h3 className="text-lg font-medium">DevOps & Systems Engineering Practitioner</h3>
              <span className="text-sm text-muted-foreground">Infrastructure Automation | April 2026 - Present</span>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                Provisioned high-availability cloud layouts on AWS via Terraform. Engineered automated CI/CD release tracks using Jenkins and GitHub Actions. Programmed custom telemetry daemons to dynamically audit production metrics and optimize uptime.
              </p>
            </div>

            {/* Timeline Item 3: Leadership/Marketing */}
            <div className="relative">
              <div className="absolute w-3 h-3 bg-muted border border-foreground rounded-full -left-[38px] top-1.5" />
              <h3 className="text-lg font-medium">Club Coordinator & Marketing Strategist</h3>
              <span className="text-sm text-muted-foreground">Speakathon Club | Aug 2023 - Aug 2024</span>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                Deployed an enterprise-scale soft-skills curriculum, successfully onboarding 1,000+ candidates. Spearheaded a digital marketing framework across social platforms, capturing over 8,000 collective views and driving inbound candidate registration.
              </p>
            </div>

          </div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="space-y-8">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-4">Selected Architecture & Engineering</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <Card className="shadow-none bg-transparent border-muted rounded-none">
              <CardHeader>
                <CardTitle className="text-lg">Automated GitOps Engine</CardTitle>
                <CardDescription>Infrastructure & Business Optimization</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Built a high-throughput CI/CD pipeline. Translated core cloud infrastructure metrics into clear business benefits, demonstrating how automated deployment minimizes risk, accelerates release velocity, and optimizes end-user reliability.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="rounded-sm font-normal">Jenkins</Badge>
                  <Badge variant="secondary" className="rounded-sm font-normal">ArgoCD</Badge>
                  <Badge variant="secondary" className="rounded-sm font-normal">GitHub Actions</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-none bg-transparent border-muted rounded-none">
              <CardHeader>
                <CardTitle className="text-lg">Multi-Container Platform Isolation</CardTitle>
                <CardDescription>Container Orchestration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Containerized a decoupled software ecosystem. Designed isolated container networking topologies using custom virtual network bridges to secure cross-tier service discovery and eliminate public host interface exposure.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="rounded-sm font-normal">Docker</Badge>
                  <Badge variant="secondary" className="rounded-sm font-normal">Kubernetes</Badge>
                  <Badge variant="secondary" className="rounded-sm font-normal">Terraform</Badge>
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Dual Resume Integration Section */}
        <section id="resume" className="space-y-8 bg-muted/30 p-8 rounded-lg border border-muted/50 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <FileText className="w-12 h-12 mx-auto text-muted-foreground" />
            <h2 className="text-2xl font-semibold tracking-tight">Curriculum Vitae</h2>
            <p className="text-sm text-muted-foreground">
              Select the resume that best aligns with your organizational needs.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              
              {/* Cloud Resume Card */}
              <Card className="shadow-none bg-background rounded-none border-muted">
                <CardHeader className="pb-4">
                  <CardTitle className="text-base font-medium">Cloud & Ops Engineering</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center gap-2">
                  <Button size="sm" asChild className="rounded-none">
                    <a href="/cloud-resume.pdf" target="_blank" rel="noopener noreferrer">View</a>
                  </Button>
                  <Button size="sm" variant="outline" asChild className="rounded-none gap-2">
                    <a href="/cloud-resume.pdf" download="Rakesh_Jha_Cloud_Resume.pdf">
                      <Download className="w-4 h-4" /> Save
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Sales Resume Card */}
              <Card className="shadow-none bg-background rounded-none border-muted">
                <CardHeader className="pb-4">
                  <CardTitle className="text-base font-medium">Corporate Sales & GTM</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center gap-2">
                  <Button size="sm" asChild className="rounded-none">
                    <a href="/sales-resume.pdf" target="_blank" rel="noopener noreferrer">View</a>
                  </Button>
                  <Button size="sm" variant="outline" asChild className="rounded-none gap-2">
                    <a href="/sales-resume.pdf" download="Rakesh_Jha_Sales_Resume.pdf">
                      <Download className="w-4 h-4" /> Save
                    </a>
                  </Button>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

      </main>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-muted">
        <p>© {new Date().getFullYear()} Rakesh Jha. All rights reserved.</p>
      </footer>
    </div>
  );
}