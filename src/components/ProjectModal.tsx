
import { X, ExternalLink, Github } from "lucide-react";
import { useEffect } from "react";

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

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in border border-white/30">
        {/* Header */}
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-t-3xl" />
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 transform hover:scale-110 hover:rotate-90 shadow-lg"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-8">
          <div className="flex justify-between items-start mb-8">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent mb-3">
                {project.title}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="flex space-x-3 ml-4 animate-fade-in delay-200">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <ExternalLink size={18} className="group-hover:animate-bounce" />
                  <span className="font-medium">Live Demo</span>
                </a>
              )}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-xl hover:bg-slate-50 transition-all duration-300 transform hover:scale-105 bg-white/50 backdrop-blur-sm"
                >
                  <Github size={18} className="group-hover:animate-spin" />
                  <span className="font-medium">View Code</span>
                </a>
              )}
            </div>
          </div>
          
          {/* Technologies */}
          <div className="mb-8 animate-fade-in delay-300">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-xl text-sm font-medium transform hover:scale-105 transition-all duration-200 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Detailed Description */}
          <div className="mb-8 animate-fade-in delay-400">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Project Details</h3>
            <p className="text-slate-700 leading-relaxed text-lg">
              {project.detailedDescription}
            </p>
          </div>
          
          {/* Key Learnings */}
          <div className="animate-fade-in delay-500">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Key Learnings</h3>
            <ul className="space-y-3">
              {project.learnings.map((learning, index) => (
                <li 
                  key={index} 
                  className="flex items-start space-x-4 animate-fade-in"
                  style={{ animationDelay: `${(index * 100) + 500}ms` }}
                >
                  <span className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0 animate-pulse" />
                  <span className="text-slate-700 leading-relaxed">{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
