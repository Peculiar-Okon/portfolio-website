document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
  
    // Toggle the menu visibility on hamburger click
    hamburger.addEventListener('click', (event) => {
      navLinks.classList.toggle('show');
      event.stopPropagation(); // Prevent click from propagating to the document
    });
  
    // Close the menu if clicked outside
    document.addEventListener('click', (event) => {
      const isClickInsideMenu = navLinks.contains(event.target);
      const isClickOnHamburger = hamburger.contains(event.target);
  
      if (!isClickInsideMenu && !isClickOnHamburger) {
        navLinks.classList.remove('show');
      }
    });
  });
  


document.addEventListener('scroll', function() {
    const lines = document.querySelectorAll('.line_');
    const windowHeight = window.innerHeight;
  
    lines.forEach(line => {
        const lineTop = line.getBoundingClientRect().top;
  
        // Check if the line is in the viewport
        if (lineTop < windowHeight - 100) { // Adjust the threshold as needed
            line.classList.add('visible');
        }else {
            line.classList.remove('visible'); // Remove the class when out of viewport
        }
    });
  });


  document.addEventListener('scroll', function() {
  const lines = document.querySelectorAll('.line');
  const windowHeight = window.innerHeight;

  lines.forEach((line, index) => {
      const lineTop = line.getBoundingClientRect().top;

      // Check if the line is in the viewport
      if (lineTop < windowHeight - 100) { // Adjust the threshold as needed
          // Add a delay based on the index
          setTimeout(() => {
              line.classList.add('visible');
          }, index * 300); // 2000ms = 2 seconds delay for each line
      }else {
        line.classList.remove('visible'); // Remove the class when out of viewport
    }
  });
});

document.addEventListener('scroll', function() {
    const mySkills = document.querySelectorAll('.myskills');
    const windowsHeight = window.innerHeight;
  
    mySkills.forEach((line, index) => {
        const linesTop = line.getBoundingClientRect().top;
  
        // Check if the line is in the viewport
        if (linesTop < windowsHeight - 100) { // Adjust the threshold as needed
            // Add a delay based on the index
            setTimeout(() => {
                line.classList.add('visible');
            }, index * 300); // 2000ms = 2 seconds delay for each line
        }else {
          line.classList.remove('visible'); // Remove the class when out of viewport
      }
    });
  });

  document.addEventListener('scroll', function() {
    const skills = document.querySelectorAll('.skills');
    const windowHeights = window.innerHeight;
  
    skills.forEach(line => {
        const lineTops = line.getBoundingClientRect().top;
  
        // Check if the line is in the viewport
        if (lineTops < windowHeights - 100) { // Adjust the threshold as needed
            line.classList.add('visible');
        }else {
            line.classList.remove('visible'); // Remove the class when out of viewport
        }
    });
  });

  document.addEventListener('scroll', function() {
    const recent = document.querySelectorAll('.recent');
    const windowyHeight = window.innerHeight;
  
    recent.forEach((line, index) => {
        const linessTop = line.getBoundingClientRect().top;
  
        // Check if the line is in the viewport
        if (linessTop < windowyHeight - 100) { // Adjust the threshold as needed
            // Add a delay based on the index
            setTimeout(() => {
                line.classList.add('visible');
            }, index * 300); // 2000ms = 2 seconds delay for each line
        }else {
          line.classList.remove('visible'); // Remove the class when out of viewport
      }
    });
  });

  document.addEventListener('scroll', function() {
    const sectflex = document.querySelectorAll('.sect3-flex');
    const windowsHeightss = window.innerHeight;
  
    sectflex.forEach(line => {
        const lineTopy = line.getBoundingClientRect().top;
  
        // Check if the line is in the viewport
        if (lineTopy < windowsHeightss - 100) { // Adjust the threshold as needed
            line.classList.add('visible');
        }else {
            line.classList.remove('visible'); // Remove the class when out of viewport
        }
    });
  });

  document.addEventListener('scroll', function() {
    const sec4 = document.querySelectorAll('.fir4st');
    const windowforHeight = window.innerHeight;
  
    sec4.forEach((line, index) => {
        const linesonTop = line.getBoundingClientRect().top;
  
        // Check if the line is in the viewport
        if (linesonTop < windowforHeight - 100) { // Adjust the threshold as needed
            // Add a delay based on the index
            setTimeout(() => {
                line.classList.add('visible');
            }, index * 300); // 2000ms = 2 seconds delay for each line
        }else {
          line.classList.remove('visible'); // Remove the class when out of viewport
      }
    });
  });

  document.addEventListener('scroll', function() {
    const sect4flex = document.querySelectorAll('.seco4nd');
    const windowsforHeight = window.innerHeight;
  
    sect4flex.forEach(line => {
        const linesTops = line.getBoundingClientRect().top;
  
        // Check if the line is in the viewport
        if (linesTops < windowsforHeight - 100) { // Adjust the threshold as needed
            line.classList.add('visible');
        }else {
            line.classList.remove('visible'); // Remove the class when out of viewport
        }
    });
  });



