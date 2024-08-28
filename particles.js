particlesJS("particles", {
    particles: {
      number: { value: 135},
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
      },
      size: {
        value: 3,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#008a92",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        random: false,
        straight: false,
      },
    },
    interactivity: {
      events: {
        onhover: { enable: false, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 50, duration: 0.4 },
        push: { particles_nb: 3 },
      },
    },
  });
  