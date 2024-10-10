import { Code, Database, Server } from 'lucide-react'

export const skills = [
    {
      title: "Full-Stack Development",
      icon: <Code className="h-6 w-6" />,
      items: [
        "React.js for dynamic front-end interfaces",
        "Node.js & Express.js for robust back-end services",
        "MongoDB for flexible, scalable databases",
        "GraphQL for efficient API queries",
        "Next.js for server-side rendering and static site generation",
        "TypeScript for type-safe JavaScript development"
      ]
    },
    {
      title: "Golang Expertise",
      icon: <Database className="h-6 w-6" />,
      items: [
        "High-performance microservices architecture",
        "Concurrent programming with goroutines",
        "RESTful API development using Gin framework",
        "gRPC for efficient inter-service communication",
        "Go modules for dependency management",
        "Testing with Go's built-in testing package"
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <Server className="h-6 w-6" />,
      items: [
        "Docker for containerization and consistent environments",
        "Kubernetes for container orchestration",
        "Terraform for infrastructure as code",
        "CI/CD pipelines with GitLab CI and GitHub Actions",
        "Prometheus and Grafana for monitoring and alerting",
        "ELK stack (Elasticsearch, Logstash, Kibana) for log management"
      ]
    }
  ]