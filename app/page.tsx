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
            Platform & Cloud Operations Engineer
          </p>
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl leading-relaxed mt-4">
            Engineering high-availability cloud layouts, resilient CI/CD pipelines, and declarative infrastructure automation frameworks. Focused on optimizing cloud architecture, telemetry systems, and secure container networking.
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
              <h3 className="font-medium text-foreground">Cloud Infrastructure</h3>
              <p className="text-muted-foreground leading-relaxed">AWS (VPC, EC2, IAM, Route53, S3), Security Groups & NACLs, High-Availability Topology Design.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-foreground">Orchestration & Primitives</h3>
              <p className="text-muted-foreground leading-relaxed">Kubernetes (K8s Clusters, Pod Networking, Service Discovery), Docker, Docker Compose.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-foreground">Automation & CI/CD</h3>
              <p className="text-muted-foreground leading-relaxed">Jenkins (Pipelines-as-Code), ArgoCD GitOps, GitHub Actions, Infrastructure as Code (Terraform).</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-foreground">Systems & Observability</h3>
              <p className="text-muted-foreground leading-relaxed">Linux OS (Ubuntu Internals), Shell Scripting, Python, Prometheus, Grafana Telemetry, Relational Schemas</p>
            </div>
          </div>
        </section>

        {/* Technical Hands-on Experience Timeline */}
        <section id="experience" className="space-y-8">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-4">Professional Experience</h2>
          <div className="space-y-8 border-l border-muted ml-3 pl-8 relative">
            
            

            {/* Timeline Item 1: Technical/Cloud */}
            <div className="relative">
              <div className="absolute w-3 h-3 bg-muted border border-foreground rounded-full -left-[38px] top-1.5" />
              <h3 className="text-lg font-medium">DevOps & Systems Engineering Practitioner</h3>
              <span className="text-sm text-muted-foreground">Infrastructure Automation | April 2026 - Present</span>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                 Provisioned high-availability cloud infrastructure layouts on AWS using Terraform modules, implementing Nginx reverse proxies and PM2 cluster supervision.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                 Implemented automated multi-environment CI/CD release tracks with Jenkins, GitHub Actions, and ArgoCD state reconciliation loops to accelerate deployment velocity.
              </p>
               <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                 Programmed modular Python and Bash telemetry daemons anchored in Linux networking internals to dynamically capture live compute resource metrics.
              </p>

            </div>

          

        </div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="space-y-8">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-4">Selected Architecture & Engineering</h2>
          <div className="grid grid-cols-1 gap-8">
            
            {/* Project 1: AWS VPC, ASG, & ALB Network Infrastructure */}
            <Card className="shadow-none bg-transparent border-muted rounded-none">
              <CardHeader>
                <CardTitle className="text-lg">Highly Available AWS Network & Cloud Governance Framework</CardTitle>
                <CardDescription>Cloud Architecture & Automation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Engineered a custom Multi-AZ AWS VPC using isolated public and private subnet topologies to eliminate single points of failure. Configured perimeter network defenses using Security Groups and NACLs to completely isolate backend EC2 targets from public exposure. Integrated an Application Load Balancer (ALB) for smooth traffic routing backed by an Auto Scaling Group (ASG) to dynamically scale compute layers under high traffic strain. Additionally, developed a modular Bash governance script using the AWS CLI to automate active cloud resource monitoring and track cost footprints.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="rounded-sm font-normal">AWS VPC</Badge>
                  <Badge variant="secondary" className="rounded-sm font-normal">EC2 / ASG / ALB</Badge>
                  <Badge variant="secondary" className="rounded-sm font-normal">Security Groups & NACLs</Badge>
                  <Badge variant="secondary" className="rounded-sm font-normal">Bash Scripting</Badge>
                </div>
                <div className="pt-2">
                  <img 
                    src="/screenshots/3-tier.png" 
                    alt="AWS Network Infrastructure Demonstration Page" 
                    className="border border-muted max-h-96 w-auto object-contain"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Project 2: Automated GitOps Engine */}
            <Card className="shadow-none bg-transparent border-muted rounded-none">
              <CardHeader>
                <CardTitle className="text-lg">Automated GitOps Engine & CI/CD Release Pipeline</CardTitle>
                <CardDescription>Infrastructure Automation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Built a high-throughput, standardized continuous integration framework capable of handling multi-stage syntax compilation, structural code linting, and automated testing gates efficiently. Implemented declarative configurations and state reconciliation loops to eliminate manual infrastructure drift and ensure safe, repeatable promotions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="rounded-sm font-normal">Jenkins</Badge>
                  <Badge variant="secondary" className="rounded-sm font-normal">ArgoCD</Badge>
                  <Badge variant="secondary" className="rounded-sm font-normal">GitHub Actions</Badge>
                </div>
                <div className="pt-2">
                  <img 
                    src="/screenshots/CI-CD pipeline.png" 
                    alt="CI/CD Server Build and Deploy Logs" 
                    className="border border-muted max-h-96 w-auto object-contain"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Project 3: Multi-Container Platform Isolation */}
            <Card className="shadow-none bg-transparent border-muted rounded-none">
              <CardHeader>
                <CardTitle className="text-lg">Multi-Container Platform Isolation & Microservices Network</CardTitle>
                <CardDescription>Container Orchestration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Containerized a decoupled software application ecosystem, constructing optimized multi-stage Dockerfiles to minimize container image footprints and secure deployment boundaries. Designed isolated container networking topologies within a Kubernetes cluster using custom virtual network bridges to facilitate private cross-tier service discovery while completely closing public host interface exposure.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="rounded-sm font-normal">Docker</Badge>
                  <Badge variant="secondary" className="rounded-sm font-normal">Kubernetes</Badge>
                  <Badge variant="secondary" className="rounded-sm font-normal">Terraform</Badge>
                </div>
                <div className="pt-2">
                  <img 
                    src="/screenshots/docker-compose.png" 
                    alt="Kubernetes Targets and Load Balancer Status" 
                    className="border border-muted max-h-96 w-auto object-contain"
                  />
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

          

        {/*  Resume Integration Section */}
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
                  <CardTitle className="text-base font-medium">Cloud & Devops Engineering</CardTitle>
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