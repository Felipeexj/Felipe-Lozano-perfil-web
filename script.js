/* ============================================================
   WEB PROFILE TEMPLATE - SCRIPT
   UniEspinal · Técnico Profesional en Programación Web
   ============================================================ */

/* ------------------------------------------------------------
   1. SPANISH TEXTS
   ------------------------------------------------------------ */
const ES = {
  "nav.home":      "INICIO",
  "nav.about":     "SOBRE MÍ",
  "nav.skills":    "HABILIDADES",
  "nav.resume":    "FORMACIÓN",
  "nav.portfolio": "PROYECTOS",
  "nav.contact":   "CONTACTO",

  "hero.role": "Desarrollador Web · Soporte Técnico",

  "about.title":          "Sobre Mí",
  "about.text":           "Estudio Ingeniería de Sistemas y entreno voleibol. Me caracterizo por mi disciplina y busco crecer profesionalmente en el área de desarrollo de software e infraestructura tecnológica.",
  "about.infoTitle":      "Información",
  "about.labelLocation":  "Ubicación",
  "about.valueLocation":  "Espinal, Colombia",
  "about.labelEmail":     "Correo",
  "about.labelLanguages": "Idiomas",
  "about.valueLanguages": "Español (nativo) · Inglés (B2)",
  "about.labelStatus":    "Disponibilidad",
  "about.valueStatus":    "Abierto a prácticas",
  "about.interestsTitle": "Intereses",

  "interest.1": "CÓDIGO",
  "interest.2": "SOPORTE",
  "interest.3": "LECTURA",
  "interest.4": "JUEGOS",

  "skills.title":        "Habilidades",
  "skills.technical":    "Habilidades técnicas",
  "skills.professional": "Habilidades profesionales",
  "skill.support":       "Soporte al usuario",
  "skill.teamwork":      "Trabajo en equipo",
  "skill.problem":       "Resolución de problemas",
  "skill.english":       "Inglés técnico",

  "resume.title":      "Formación y experiencia",
  "resume.education":  "Formación",
  "resume.experience": "Experiencia",

  "edu.1.title": "Técnico Profesional en Programación Web",
  "edu.1.text":  "Desarrollo de interfaces gráficas de usuario en Eclipse y diseño e implementación de bases de datos relacionales SQL.",
  "edu.2.title": "Diplomado en Redes de Computadores",
  "edu.2.text":  "Interconexión de dispositivos de red, estructuración y asignación de direcciones IP, y gestión de servicios DNS y DHCP.",

  "exp.1.title": "Desarrollador de Software & Videojuegos",
  "exp.1.text":  "Creación del videojuego 2D 'Matar o Morir' mediante G-Develop, además del desarrollo de lógica de aplicaciones, calculadoras y gestión de bases de datos utilizando Eclipse y Visual Studio.",
  "exp.2.title": "Proyecto de Infraestructura de Redes",
  "exp.2.text":  "Diseño e implementación de mejoras en la arquitectura de red para una institución educativa como proyecto de grado, optimizando la conectividad y el direccionamiento IP.",

  "portfolio.title": "Proyectos",
  "project.1.title": "Matar o Morir",
  "project.1.text":  "G-Develop · Diseño 2D · Lógica de Juego",
  "project.2.title": "Aplicaciones Desktop & Bases de Datos",
  "project.2.text":  "Java · Eclipse · Visual Studio · SQL",
  "project.3.title": "Optimización de Red Escolar",
  "project.3.text":  "Infraestructura de Red · IPv4 · DNS / DHCP",

  "contact.title":         "Contacto",
  "contact.intro":         "¿Tienes preguntas sobre proyectos tecnológicos o deseas colaborar? Escríbeme.",
  "contact.emailLabel":    "oscarfelipepilo@gmail.com",
  "contact.linkedinValue": "[Tu perfil profesional]",

  "footer.note": "Felipe Lozano · Técnico Profesional en Programación Web · UniEspinal"
};


/* ------------------------------------------------------------
   2. ENGLISH TEXTS
   ------------------------------------------------------------ */
const EN = {
  "nav.home":      "HOME",
  "nav.about":     "ABOUT",
  "nav.skills":    "SKILLS",
  "nav.resume":    "RESUME",
  "nav.portfolio": "PROJECTS",
  "nav.contact":   "CONTACT",

  "hero.role": "Web Developer · Technical Support",

  "about.title":          "About Me",
  "about.text":           "I am studying Systems Engineering and training in volleyball. I am committed to building a solid professional career in software development and technical infrastructure.",
  "about.infoTitle":      "Information",
  "about.labelLocation":  "Location",
  "about.valueLocation":  "Espinal, Colombia",
  "about.labelEmail":     "Email",
  "about.labelLanguages": "Languages",
  "about.valueLanguages": "Spanish (native) · English (B2)",
  "about.labelStatus":    "Availability",
  "about.valueStatus":    "Open to internships",
  "about.interestsTitle": "Interests",

  "interest.1": "CODE",
  "interest.2": "SUPPORT",
  "interest.3": "READING",
  "interest.4": "GAMING",

  "skills.title":        "Skills",
  "skills.technical":    "Technical skills",
  "skills.professional": "Professional skills",
  "skill.support":       "User support",
  "skill.teamwork":      "Teamwork",
  "skill.problem":       "Problem solving",
  "skill.english":       "Technical English",

  "resume.title":      "Education and experience",
  "resume.education":  "Education",
  "resume.experience": "Experience",

  "edu.1.title": "Professional Technician in Web Programming",
  "edu.1.text":  "Designing graphical user interfaces in Eclipse and building relational SQL database structures.",
  "edu.2.title": "Diploma in Computer Networking",
  "edu.2.text":  "Configuring network device interconnection, managing IP address allocation, and setting up DNS and DHCP services.",

  "exp.1.title": "Software & Game Developer",
  "exp.1.text":  "Developed the 2D game 'Matar o Morir' using G-Develop, alongside creating desktop utility applications and relational databases using Eclipse and Visual Studio.",
  "exp.2.title": "Network Infrastructure Project",
  "exp.2.text":  "Designing and implementing network infrastructure upgrades for an educational institution as a final capstone project, optimizing connectivity and IP configuration.",

  "portfolio.title": "Projects",
  "project.1.title": "Matar o Morir Game",
  "project.1.text":  "G-Develop · 2D Game Design · Game Logic",
  "project.2.title": "Desktop Apps & SQL Databases",
  "project.2.text":  "Java · Eclipse · Visual Studio · SQL",
  "project.3.title": "School Network Upgrade",
  "project.3.text":  "Network Infrastructure · IPv4 · DNS / DHCP",

  "contact.title":         "Contact",
  "contact.intro":         "Looking to collaborate on a technology project? Reach out to me.",
  "contact.emailLabel":    "oscarfelipepilo@gmail.com",
  "contact.linkedinValue": "[Your professional profile]",

  "footer.note": "Felipe Lozano · Professional Technician in Web Programming · UniEspinal"
};


/* ============================================================
   3. LANGUAGE SWITCHER
   ============================================================ */

const DICCIONARIOS = { es: ES, en: EN };
let idiomaActual = "es";

function aplicarIdioma(idioma) {
  const textos = DICCIONARIOS[idioma];
  if (!textos) return;

  document.querySelectorAll("[data-i18n]").forEach(elemento => {
    const clave = elemento.getAttribute("data-i18n");
    if (textos[clave] !== undefined) {
      elemento.textContent = textos[clave];
    } else {
      console.warn("Missing translation key:", clave);
    }
  });

  document.documentElement.lang = idioma;

  const boton = document.getElementById("btn-idioma");
  if (boton) {
    const otro = idioma === "es" ? "en" : "es";
    boton.innerHTML =
      '<span class="idioma-activo">'   + idioma.toUpperCase() + '</span>' +
      '<span class="idioma-sep">/</span>' +
      '<span class="idioma-inactivo">' + otro.toUpperCase()   + '</span>';
    boton.setAttribute("aria-label",
      idioma === "es" ? "Switch to English" : "Cambiar a español");
  }

  idiomaActual = idioma;
}

function cambiarIdioma() {
  aplicarIdioma(idiomaActual === "es" ? "en" : "es");
}


/* ============================================================
   4. RESPONSIVE MENU
   ============================================================ */

let menuVisible = false;

function mostrarOcultarMenu() {
  const nav = document.getElementById("nav");
  menuVisible = !menuVisible;
  nav.className = menuVisible ? "responsive" : "";
}

function cerrarMenu() {
  document.getElementById("nav").className = "";
  menuVisible = false;
}


/* ============================================================
   5. SKILL BARS
   ============================================================ */

function animarHabilidades() {
  const barras = document.querySelectorAll(".progreso");

  const mostrar = barra => {
    const porcentaje = barra.getAttribute("data-percent") || "0";
    barra.style.width = porcentaje + "%";
    const etiqueta = barra.querySelector("span");
    if (etiqueta) etiqueta.textContent = porcentaje + "%";
  };

  if (!("IntersectionObserver" in window)) {
    barras.forEach(mostrar);
    return;
  }

  const observador = new IntersectionObserver((entradas, obs) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        mostrar(entrada.target);
        obs.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.4 });

  barras.forEach(barra => observador.observe(barra));
}


/* ============================================================
   6. START
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  aplicarIdioma("es");
  animarHabilidades();
});
