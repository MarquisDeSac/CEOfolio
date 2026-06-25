<img src="/CEOfolio/profile.webp" alt="Profile Photo" class="w-48 h-48 md:w-64 md:h-64 object-cover object-[center_15%] rounded-full mx-auto shadow-[0_0_30px_rgba(255,255,255,0.1)] border-4 border-white/10 mb-6" />

<!-- CV Buttons -->
<div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
  <button onclick="document.getElementById('modal-cv').showModal()" class="flex items-center gap-2 px-6 py-2.5 rounded-full bg-neon-pink/10 border border-neon-pink/30 text-neon-pink font-bold hover:bg-neon-pink/20 hover:border-neon-pink transition-all no-underline shadow-[0_0_15px_rgba(255,0,127,0.15)] hover:shadow-[0_0_25px_rgba(255,0,127,0.3)] cursor-pointer">
    <span class="i-ri-eye-line text-lg"></span> View Resume
  </button>
  <a href="/CEOfolio/en/cv" target="_blank" onclick="setTimeout(() => window.open('/CEOfolio/en/cv', '_blank').print(), 100)" class="flex items-center gap-2 px-6 py-2.5 rounded-full bg-neon-pink border border-neon-pink text-white font-bold hover:brightness-110 transition-all no-underline shadow-[0_0_20px_rgba(255,0,127,0.3)] hover:shadow-[0_0_30px_rgba(255,0,127,0.5)] cursor-pointer">
    <span class="i-ri-download-2-line text-lg"></span> Download PDF
  </a>
</div>

<div class="flex flex-col gap-6 mt-8">

  <!-- Intro Card (Blue Theme) -->
  <div class="p-6 rounded-lg bg-black/5 dark:bg-white/5 border border-l-4 border-l-neon-blue border-t-white/10 border-r-white/10 border-b-white/10 backdrop-blur-md">
    <h1 class="mt-0! mb-2! text-3xl font-bold font-display">Hello, I am <span class="text-neon-blue">Nino Sacchi</span>.</h1>
    <p class="op-80 text-lg">
      Currently a Master's student in <span class="text-neon-blue font-bold">Audiovisual, Interactive Digital Media and Games</span> at INU Champollion.
    </p>
    <p class="op-70 mt-4 leading-relaxed">
      I am a developer passionate about video game creation, from development to design. My goal is to merge art and technology to create impactful games.
    </p>
  </div>

  <!-- Character Data -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <button onclick="document.getElementById('modal-international').showModal()" class="w-full text-left p-4 rounded border border-white/10 bg-white/5 hover:border-neon-pink/50 hover:bg-neon-pink/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer group/card relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-pink to-transparent"></div>
      <div class="text-xs font-bold op-50 uppercase tracking-widest mb-1">International Background</div>
      <div class="font-bold text-lg">France <span class="i-ri-arrow-right-line align-middle text-sm"></span> South Korea</div>
      <div class="text-sm op-60 mt-1">Exchange year at Ajou University & Internship at VHEX Lab.</div>
      <div class="text-xs font-bold text-neon-pink opacity-0 group-hover/card:opacity-100 transform translate-y-[10px] group-hover/card:translate-y-0 transition-all duration-300 flex items-center gap-1 mt-3">
        View links <span class="i-ri-arrow-right-line"></span>
      </div>
    </button>
    <button onclick="document.getElementById('modal-formation').showModal()" class="w-full text-left p-4 rounded border border-white/10 bg-white/5 hover:border-sunset-purple/50 hover:bg-sunset-purple/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer group/card relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sunset-purple to-transparent"></div>
      <div class="text-xs font-bold op-50 uppercase tracking-widest mb-1">Current Education</div>
      <div class="font-bold text-lg">Master AMINJ</div>
      <div class="text-sm op-60 mt-1">INU Champollion. Unity Dev, VR, Gamification, Project Management</div>
      <div class="text-xs font-bold text-sunset-purple opacity-0 group-hover/card:opacity-100 transform translate-y-[10px] group-hover/card:translate-y-0 transition-all duration-300 flex items-center gap-1 mt-3">
        View links <span class="i-ri-arrow-right-line"></span>
      </div>
    </button>
  </div>

  <!-- Modals for Character Data -->
  <dialog id="modal-international" class="backdrop:bg-black/60 backdrop:backdrop-blur-sm bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 p-6 rounded-xl text-black dark:text-white max-w-lg w-[90vw] m-auto shadow-2xl open:animate-fade-in outline-none">
    <h3 class="text-2xl font-bold mb-6 text-neon-pink font-display flex items-center gap-2"><span class="i-ri-earth-line"></span> International Background</h3>
    <div class="flex flex-col gap-3">
      <a href="https://st.univ-fcomte.fr/" target="_blank" class="p-4 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-neon-pink hover:bg-neon-pink/10 transition-colors flex justify-between items-center group no-underline text-black dark:text-white">
        <div>
          <div class="font-bold">UFR ST</div>
          <div class="text-sm opacity-60">Bachelor's Degree in Computer Science</div>
        </div>
        <div class="i-ri-external-link-line opacity-0 group-hover:opacity-100 transition-opacity text-neon-pink text-xl"></div>
      </a>
      <a href="https://www.ajou.ac.kr/en/index.do" target="_blank" class="p-4 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-neon-pink hover:bg-neon-pink/10 transition-colors flex justify-between items-center group no-underline text-black dark:text-white">
        <div>
          <div class="font-bold">Ajou University</div>
          <div class="text-sm opacity-60">Exchange Student</div>
        </div>
        <div class="i-ri-external-link-line opacity-0 group-hover:opacity-100 transition-opacity text-neon-pink text-xl"></div>
      </a>
      <a href="https://www.vhex.co.kr/" target="_blank" class="p-4 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-neon-pink hover:bg-neon-pink/10 transition-colors flex justify-between items-center group no-underline text-black dark:text-white">
        <div>
          <div class="font-bold">VHEX Lab</div>
          <div class="text-sm opacity-60">Internship</div>
        </div>
        <div class="i-ri-external-link-line opacity-0 group-hover:opacity-100 transition-opacity text-neon-pink text-xl"></div>
      </a>
    </div>
    <form method="dialog" class="mt-6 flex justify-end">
      <button class="px-5 py-2.5 rounded-lg bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors font-bold cursor-pointer">Close</button>
    </form>
  </dialog>

  <dialog id="modal-formation" class="backdrop:bg-black/60 backdrop:backdrop-blur-sm bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 p-6 rounded-xl text-black dark:text-white max-w-lg w-[90vw] m-auto shadow-2xl open:animate-fade-in outline-none">
    <h3 class="text-2xl font-bold mb-6 text-sunset-purple font-display flex items-center gap-2"><span class="i-ri-graduation-cap-line"></span> Current Education</h3>
    <div class="flex flex-col gap-3">
      <a href="https://www.univ-jfc.fr/masters/audiovisuel-medias-interactifs-numeriques-jeux" target="_blank" class="p-4 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-sunset-purple hover:bg-sunset-purple/10 transition-colors flex justify-between items-center group no-underline text-black dark:text-white">
        <div>
          <div class="font-bold">INUC - Master AMINJ</div>
          <div class="text-sm opacity-60">Audiovisual, Interactive Digital Media and Games</div>
        </div>
        <div class="i-ri-external-link-line opacity-0 group-hover:opacity-100 transition-opacity text-sunset-purple text-xl"></div>
      </a>
    </div>
    <form method="dialog" class="mt-6 flex justify-end">
      <button class="px-5 py-2.5 rounded-lg bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors font-bold cursor-pointer">Close</button>
    </form>
  </dialog>

  <dialog id="modal-cv" class="backdrop:bg-black/60 backdrop:backdrop-blur-sm bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 p-4 md:p-6 rounded-xl text-black dark:text-white w-[95vw] max-w-5xl h-[90vh] m-auto shadow-2xl open:animate-fade-in outline-none flex flex-col">
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-2xl font-bold text-neon-pink font-display flex items-center gap-2 m-0!"><span class="i-ri-profile-line"></span> Resume</h3>
      <form method="dialog">
        <button class="flex items-center justify-center w-8 h-8 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors cursor-pointer border-none text-black dark:text-white">
          <span class="i-ri-close-line text-xl"></span>
        </button>
      </form>
    </div>
    <div class="flex-1 w-full bg-white rounded-lg overflow-hidden border border-black/10 dark:border-white/10 relative">
      <iframe src="/CEOfolio/en/cv" class="absolute inset-0 w-full h-full border-none" title="Resume Nino Sacchi"></iframe>
    </div>
    <div class="mt-4 flex justify-end gap-3">
      <a href="/CEOfolio/en/cv" target="_blank" class="px-5 py-2.5 rounded-lg bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors font-bold no-underline text-black dark:text-white flex items-center gap-2">
        <span class="i-ri-external-link-line"></span> Full Screen
      </a>
      <a href="/CEOfolio/en/cv" target="_blank" onclick="setTimeout(() => window.open('/CEOfolio/en/cv', '_blank').print(), 100)" class="px-5 py-2.5 rounded-lg bg-neon-pink text-white hover:brightness-110 transition-colors font-bold no-underline flex items-center gap-2">
        <span class="i-ri-download-2-line"></span> Download
      </a>
    </div>
  </dialog>

  <!-- Quest Log (Terminal Style) -->
  <div class="p-5 rounded bg-[#111] border border-white/10 font-mono text-sm relative overflow-hidden group">
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue to-transparent"></div>
    <div class="op-50 mb-2">root@ninosacchi:~/vision# cat ambitions.txt</div>
    <div class="leading-relaxed">
      <span class="text-green-400">➜</span> "create my own video game company to bring my vision to life..."<br/><br/>
      <span class="op-50">➜ "...I would also like, if the opportunity arises, to pursue a career in politics. But that is not the topic for now."</span>
    </div>
  </div>

</div>


### <span class="glitch text-neon-pink" data-text="Skills">Skills</span>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class="p-4 rounded border border-white/10 bg-white/5">
    <h4 class="font-bold text-lg mb-2">Engines & Languages</h4>
    <ul class="list-disc list-inside op-70 text-sm leading-relaxed">
      <li>Unity 2D / 3D / WebGL / VR / AR</li>
      <li>C#, C, Java, Python, HTML/CSS</li>
      <li>Godot Engine / Processing</li>
    </ul>
  </div>
  
  <div class="p-4 rounded border border-white/10 bg-white/5">
    <h4 class="font-bold text-lg mb-2">Specialties</h4>
    <ul class="list-disc list-inside op-70 text-sm leading-relaxed">
      <li>Project Manager</li>
      <li>Lead Developer</li>
      <li>Game Designer</li>
    </ul>
  </div>
</div>

---

### <span class="glitch text-sunset-purple" data-text="Navigation">Navigation</span>

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
  <div class="relative p-4 rounded border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:border-sunset-purple transition-colors text-center group flex flex-col items-center justify-center gap-2">
    <a href="./projects" class="absolute inset-0 z-10 w-full h-full cursor-pointer print:hidden"></a>
    <div class="i-ri-gamepad-line text-3xl mb-1 group-hover:scale-110 transition-transform text-sunset-purple relative z-0"></div>
    <div class="font-bold text-base relative z-0">Projects</div>
  </div>
  <div class="relative p-4 rounded border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:border-sunset-purple transition-colors text-center group flex flex-col items-center justify-center gap-2">
    <a href="./experiences" class="absolute inset-0 z-10 w-full h-full cursor-pointer print:hidden"></a>
    <div class="i-ri-briefcase-line text-3xl mb-1 group-hover:scale-110 transition-transform text-sunset-purple relative z-0"></div>
    <div class="font-bold text-base">Experiences</div>
  </div>
  <div class="relative p-4 rounded border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:border-sunset-purple transition-colors text-center group flex flex-col items-center justify-center gap-2">
    <a href="./parcours" class="absolute inset-0 z-10 w-full h-full cursor-pointer print:hidden"></a>
    <div class="i-ri-road-map-line text-3xl mb-1 group-hover:scale-110 transition-transform text-sunset-purple relative z-0"></div>
    <div class="font-bold text-base">Education</div>
  </div>
  <div class="relative p-4 rounded border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:border-sunset-purple transition-colors text-center group flex flex-col items-center justify-center gap-2">
    <a href="./skills" class="absolute inset-0 z-10 w-full h-full cursor-pointer print:hidden"></a>
    <div class="i-ri-code-box-line text-3xl mb-1 group-hover:scale-110 transition-transform text-sunset-purple relative z-0"></div>
    <div class="font-bold text-base">Skills</div>
  </div>
  <div class="relative p-4 rounded border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:border-sunset-purple transition-colors text-center group flex flex-col items-center justify-center gap-2">
    <a href="./contact" class="absolute inset-0 z-10 w-full h-full cursor-pointer print:hidden"></a>
    <div class="i-ri-mail-send-line text-3xl mb-1 group-hover:scale-110 transition-transform text-sunset-purple relative z-0"></div>
    <div class="font-bold text-base">Contact</div>
  </div>
</div>

---

### <span class="glitch text-neon-blue" data-text="Follow me">Follow me</span>

<p class="flex justify-center items-center gap-8 mt-12 mb-8">
  <a class="flex flex-col items-center gap-3 hover:text-neon-blue transition-colors no-underline! group" href="https://www.linkedin.com/in/nino-sacchi-806aa9340/" target="_blank">
    <span class="i-simple-icons-linkedin text-6xl group-hover:scale-110 group-hover:text-neon-blue! transition-all"></span>
    <span class="font-bold text-xl">LinkedIn</span>
  </a>
  <span class="op-20 text-4xl">|</span>
  <a class="flex flex-col items-center gap-3 hover:text-neon-blue transition-colors no-underline! group" href="https://github.com/MarquisDeSac" target="_blank">
    <span class="i-simple-icons-github text-6xl group-hover:scale-110 group-hover:text-neon-blue! transition-all"></span>
    <span class="font-bold text-xl">GitHub</span>
  </a>
</p>
