import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

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

const projects: Project[] = [
  {
    id: "1",
    title: "Stanford Robosub",
    description: "Autonomous submarine development with electrical and mechanical team contributions, focusing on underwater component integration.",
    detailedDescription: "As a member of both the electrical and mechanical teams, I contributed to developing the structure of our autonomous submarine, carefully balancing the integration of electrical components with materials suited for underwater conditions.",
    technologies: ["Circuitry", "KiCad", "Autocad (Fusion360)", "Welding", "Soldering", "Digital Multimeter", "Prototyping", "Design", "Laser Cut"],
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=300&fit=crop",
    learnings: [
      "Working on Stanford's newly founded RoboSub team came with its share of challenges, but it gave me valuable insight into designing and executing mechanical and electrical systems for autonomous underwater vehicles",
      "I deepened my understanding of 3D design software and saw firsthand how critical detailed planning is, especially when it comes to teamwork and real-world engineering applications",
      "Despite limited resources and time, our team found creative ways to push forward and succeed"
    ]
  },
  {
    id: "2",
    title: "AC-DC Converter",
    description: "Designed and built an AC-DC converter with rectifier, capacitor smoothing, and Zener diode regulation for stable DC output.",
    detailedDescription: "For this project, I designed and built an AC-DC converter that takes in an AC signal and outputs a stable DC voltage. I used diodes to create a rectifier, turning the AC input into a pulsating DC signal, which gets smoothed and stored in a capacitor. To keep the output steady at the desired RMS voltage, I added a Zener diode to regulate the discharge and maintain a consistent voltage level. There's also a MOSFET that acts as a voltage regulator and helps prevent short circuits. Right before the output wires, I placed a bypass capacitor to filter the signal and cut down on noise.",
    technologies: ["Circuits", "Capacitors", "Diodes", "Oscilloscope", "MOSFETs", "Waveform Generators", "Digital Multimeter", "Waveform Display", "Soldering"],
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop",
    learnings: [
      "This project gave me a much better understanding of how AC signals are converted and regulated in real-world circuits",
      "I learned how each component, diodes, capacitors, Zener diodes, and MOSFETs, plays a role in shaping and stabilizing the output",
      "It also taught me the importance of noise filtering and protecting components from voltage spikes or shorts",
      "Overall, it was a solid hands-on intro to power electronics and circuit design beyond the basics"
    ]
  },
  {
    id: "3",
    title: "Useless Box",
    description: "Arduino-controlled interactive box with personality modes (shy, mad, confused) using motor control and behavioral programming.",
    detailedDescription: "I built a useless box using an Arduino, a motor, a toggle switch, and a limit switch, but instead of a single, repetitive reaction, I gave it personality. The toggle switch acts as the main user input, while the limit switch provides physical feedback, letting the system detect when the lid reaches its mechanical limits. I programmed several distinct behavioral \"modes\": shy, mad, and confused, each uploaded separately to the Arduino. In the shy mode, the lid slowly and reluctantly creeps open. In mad mode, it snaps the switch aggressively. In confused mode, it jitters erratically, unsure of what it's doing. Each behavior was controlled through timing, motor direction, and delay patterns, designed to give the illusion of emotion.",
    technologies: ["Arduino Programming", "Motor Control", "Limit/Toggle Switch Integration", "Behavioral Design", "Timing/Delay Logic", "User Interactive Design", "Soldering"],
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=500&h=300&fit=crop",
    learnings: [
      "This project gave me a deeper appreciation for how much personality can be conveyed through basic hardware and well-tuned timing",
      "I learned how to use limit switches for mechanical control and how to coordinate motion and program in a way that feels reactive, even with simple components",
      "It also taught me to think about physical design and code as two parts of the same system: each shaping how the final interaction feels",
      "It was a fun way to explore embedded control while making something weirdly expressive and entertaining"
    ]
  },
  {
    id: "4",
    title: "EKG Circuit",
    description: "Bioelectric signal amplification circuit using op-amps and filters to read and display heart electrical activity in real-time.",
    detailedDescription: "I built an EKG circuit that reads and displays the electrical activity of my heart. Using a combination of resistors, capacitors, and op-amp modules, I designed a signal chain that amplified and filtered the weak bioelectric signals coming from the electrodes. I used the Analog Discovery 2 to visualize the output waveform in real time and verify that the signal matched the expected pattern of a heartbeat. The circuit involved multiple stages—including high-pass and low-pass filters, and an instrumentation amplifier—to isolate and clean up the signal from noise.",
    technologies: ["Op-Amp Modules", "Resistors", "Capacitors", "Instrumentation Amplifier", "High-pass Filters", "Low-pass Filters", "Analog Discovery 2", "Signal Processing"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
    learnings: [
      "This project taught me how sensitive and precise analog circuits need to be when working with bio-signals",
      "I gained hands-on experience designing active filters and chaining them together to control both gain and bandwidth",
      "It was eye-opening to see my own heartbeat on a scope, made possible through a circuit I built from scratch"
    ]
  },
  {
    id: "5",
    title: "Game of Pong",
    description: "LED matrix Pong game with Arduino control, featuring paddle control, randomized blocks, and complete game logic implementation.",
    detailedDescription: "I created a Pong-style game using an LED matrix, an Arduino, and a combination of resistors, MOSFETs, and diodes. The paddle was controlled using a toggle switch, and I programmed the full game logic through Arduino. The matrix displayed the ball, paddle, and a set of 4–6 blocks that spawned randomly on the upper half of the grid. As the ball bounced around the display, the player had to deflect it using the switch-controlled paddle. The game included a life system, with four total chances before you lost. If you won, the screen lit up completely; if you lost, a red \"X\" appeared on the display. I managed paddle movement in real time, handled boundary conditions for collisions, and implemented game logic to control lives, block generation, and win/loss states, all while keeping the display responsive and readable.",
    technologies: ["Arduino Programming", "LED Matrix Control", "Randomized Block Generation", "Soldering", "MOSFETs", "Resistors", "Diodes"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
    learnings: [
      "This project gave me a deeper understanding of how to manage real-time graphics on limited hardware",
      "I learned how to control a full LED matrix with minimal I/O, use MOSFETs and diodes effectively for switching and display control, and translate physical inputs into game actions",
      "It also taught me how to structure code around game states, manage timing, and optimize logic under microcontroller constraints, all while making something fun and fully interactive"
    ]
  },
  {
    id: "6",
    title: "Smart Mirror",
    description: "Raspberry Pi-powered smart mirror displaying time, weather, and calendar with voice control, built with custom wooden frame.",
    detailedDescription: "For this project, my roommate and I built a \"Magic Mirror\" that works as both a smart display and a regular mirror. We used a Raspberry Pi to run a dashboard that shows useful info like time, weather, and calendar events. All of this is projected onto a TV screen with a reflective film, which gives it the appearance that the text is floating on the mirror. We also added a voice assistant so you can control it hands-free. We built a custom wooden frame for it in the Stanford Product Realization Lab, which brought everything together into a clean, modern-looking setup.",
    technologies: ["Python", "Git", "Raspberry Pi", "Woodwork", "APIs"],
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&h=300&fit=crop",
    learnings: [
      "This was my first time combining hardware, software, and design in one project, and it really showed me how powerful Raspberry Pi can be for prototyping",
      "I learned how to work with reflective displays, integrate voice control, and structure a user-friendly interface",
      "On the hardware side, building the frame pushed my skills in fabrication and precision work",
      "It was a great mix of coding, electronics, and hands-on building"
    ]
  },
  {
    id: "7",
    title: "FPGA Music Synthesizer",
    description: "Verilog-based music player on FPGA with real-time tempo control, harmonic adjustment, and volume control via rotary encoder.",
    detailedDescription: "In my Digital System Design course, I worked with a team of three to build a music player on an FPGA using Verilog. We wrote modules to read and play notes stored in ROM, with a Note Player module generating the correct frequencies and a Sine Reader pulling audio wave samples that we displayed. A Song Reader module handled playback using a finite state machine to control the sequence and timing of each note. Alongside the core music playback, I implemented a button that allows the user to adjust the speed of the notes being played in real time, essentially letting you control the tempo on the fly. I also worked on a harmonic control system that changes the tonal quality of the music, letting us experiment with different instrument-like effects by modifying the harmonic weights in playback. Something we also implemented was a rotary encoder that would control the volume of our songs, which I then synced with the brightness of some LEDs.",
    technologies: ["Verilog", "FlipFlops", "Sine Reader", "ROMs", "Audio", "Shift Registers", "Buttons", "Rotary Encoder"],
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&h=300&fit=crop",
    learnings: [
      "This project gave me a deeper appreciation for how digital audio systems work at the hardware level",
      "Working with FPGAs pushed me to think carefully about timing, state machines, and how to coordinate multiple modules",
      "I also learned how to design interactive controls that let the user influence both the sound and feel of the output, bringing together logic design and creative expression in a pretty cool way",
      "Debugging was essential!"
    ]
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Project not found</h1>
          <button 
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      {/* Header with back button */}
      <header className="bg-white/10 backdrop-blur-md shadow-lg sticky top-0 z-40 border-b border-white/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-slate-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 font-medium"
            >
              <ArrowLeft size={20} />
              <span>Back to Portfolio</span>
            </button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Juan Irigoyen Castillo
            </h1>
          </div>
        </div>
      </header>

      {/* Project hero section */}
      <div className="relative">
        <div className="h-96 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        
        <div className="absolute bottom-8 left-0 right-0">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex justify-between items-end">
              <div className="text-white">
                <h1 className="text-5xl font-bold mb-4 animate-fade-in">
                  {project.title}
                </h1>
                <p className="text-xl opacity-90 animate-fade-in delay-200">
                  {project.description}
                </p>
              </div>
              
              <div className="flex space-x-3 animate-fade-in delay-300">
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
                    className="group flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/30"
                  >
                    <Github size={18} className="group-hover:animate-spin" />
                    <span className="font-medium">View Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Technologies */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Technologies Used</h2>
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
        <div className="mb-12 animate-fade-in delay-200">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Project Details</h2>
          <div className="bg-blue-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-200/50">
            <p className="text-slate-700 leading-relaxed text-lg">
              {project.detailedDescription}
            </p>
          </div>
        </div>
        
        {/* Key Learnings */}
        <div className="animate-fade-in delay-300">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Key Learnings</h2>
          <div className="bg-blue-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-200/50">
            <ul className="space-y-4">
              {project.learnings.map((learning, index) => (
                <li 
                  key={index} 
                  className="flex items-start space-x-4 animate-fade-in"
                  style={{ animationDelay: `${(index * 100) + 300}ms` }}
                >
                  <span className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0 animate-pulse" />
                  <span className="text-slate-700 leading-relaxed text-lg">{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
