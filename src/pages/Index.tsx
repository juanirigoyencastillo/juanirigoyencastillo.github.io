
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { Github, Linkedin, Mail, ExternalLink, Code, Cpu } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
    image: "/lovable-uploads/931def5c-7006-480b-9fba-390f2286eee1.png",
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
    image: "/lovable-uploads/0d06552d-be4d-49c7-8584-f32382b12ed4.png",
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
    image: "/Personal_Website/EKGdata.jpg",
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

const Index = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 relative overflow-hidden">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, white 2px, transparent 2px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 45%, white 45%, white 55%, transparent 55%),
            linear-gradient(-45deg, transparent 45%, white 45%, white 55%, transparent 55%)
          `,
          backgroundSize: '30px 30px',
          opacity: 0.3
        }}></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md shadow-lg sticky top-0 z-40 border-b border-white/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent animate-fade-in">
              Juan Irigoyen Castillo
            </h1>
            <h1>Hello from GitHub! 🚀</h1>
            <div className="flex space-x-6">
              <a href="#about" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105 font-medium">About</a>
              <a href="#projects" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105 font-medium">Projects</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105 font-medium">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 animate-scale-in border-4 border-white/30">
              <img 
                src="/lovable-uploads/28c8cedb-6f1f-47f4-8aba-a50bb35086c6.png" 
                alt="Juan Irigoyen Castillo"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-6xl font-bold text-white mb-6 animate-fade-in delay-200">
              Hello, I'm Juan Irigoyen Castillo
            </h2>
            <div className="flex justify-center items-center gap-4 mb-6 animate-fade-in delay-300">
              <span className="text-xl text-white/90 font-medium">Electrical Engineer from Stanford University</span>
              <Code className="text-blue-200 animate-pulse" size={24} />
            </div>
            <p className="text-xl text-white/80 mb-8 leading-relaxed animate-fade-in delay-400 max-w-3xl mx-auto">
              Rising junior at Stanford University studying electrical engineering with the aspiration and ambitions of using 
              <span className="font-semibold text-blue-200"> software and hardware</span> to innovate and create meaningful solutions 
              focused on innovation and growth within hardware and software.
            </p>
            <div className="flex justify-center items-center gap-6 mb-8 animate-fade-in delay-500">
              <div className="flex items-center gap-2 text-white/70">
                <Cpu className="text-purple-200" size={20} />
                <span>Hardware Design</span>
              </div>
              <div className="w-2 h-2 bg-blue-200 rounded-full animate-pulse"></div>
              <div className="flex items-center gap-2 text-white/70">
                <Code className="text-green-200" size={20} />
                <span>Software Development</span>
              </div>
              <div className="w-2 h-2 bg-purple-200 rounded-full animate-pulse"></div>
              <div className="flex items-center gap-2 text-white/70">
                <span>Innovation</span>
              </div>
            </div>
            <div className="flex justify-center space-x-4 animate-fade-in delay-600">
              <a href="https://github.com/juanirigoyencastillo" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-2 bg-gradient-to-r from-blue-700 to-purple-700 text-white px-8 py-4 rounded-xl hover:from-blue-800 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Github size={20} className="group-hover:animate-spin" />
                <span className="font-medium">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/juan-irigoyen-castillo-1593a3286" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-2 bg-gradient-to-r from-slate-700 to-slate-800 text-white px-8 py-4 rounded-xl hover:from-slate-800 hover:to-slate-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Linkedin size={20} className="group-hover:animate-bounce" />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a href="mailto:irigoyen@stanford.edu" className="group flex items-center space-x-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/10 hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white/5 backdrop-blur-sm">
                <Mail size={20} className="group-hover:animate-pulse" />
                <span className="font-medium">Contact</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white/10 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Explore some of my recent work combining electrical engineering principles with cutting-edge software development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => handleProjectClick(project.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-5xl font-bold text-white mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Interested in collaborating on innovative projects that bridge hardware and software?
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="mailto:irigoyen@stanford.edu" 
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-700 to-purple-700 text-white px-10 py-5 rounded-xl hover:from-blue-800 hover:to-purple-800 transition-all duration-300 text-lg font-medium transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail size={24} className="group-hover:animate-bounce" />
              <span>Get In Touch</span>
            </a>
            <a 
              href="tel:6232032803" 
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white px-10 py-5 rounded-xl hover:from-slate-800 hover:to-slate-900 transition-all duration-300 text-lg font-medium transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Call: (623) 203-2803</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/90 backdrop-blur-sm text-white py-8 px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-300">&copy; 2024 Juan Irigoyen Castillo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
