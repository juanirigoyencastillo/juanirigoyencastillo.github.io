
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  learnings: string[];
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div 
      className="bg-blue-50/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-3 hover:rotate-1 border border-blue-200/50"
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-slate-600 mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index}
              className="text-xs bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full font-medium transform hover:scale-105 transition-transform duration-200"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs text-slate-500 font-medium">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <span 
            className="text-sm text-blue-600 font-semibold group-hover:text-blue-700 transition-all duration-300 cursor-pointer hover:underline hover:scale-105 hover:text-blue-800"
            onClick={onClick}
          >
            View Details
          </span>
          <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
            {project.liveUrl && (
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.liveUrl, '_blank');
                }}
                className="p-2 text-slate-500 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                title="View Live"
              >
                <ExternalLink size={16} />
              </button>
            )}
            {project.githubUrl && (
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.githubUrl, '_blank');
                }}
                className="p-2 text-slate-500 hover:text-slate-800 transition-all duration-300 transform hover:scale-110 hover:-rotate-12"
                title="View Code"
              >
                <Github size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
