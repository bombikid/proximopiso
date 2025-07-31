  // FIRST hide everything
  function hideFunction() {
  var x = document.getElementById("demo");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
    hideFunction();

// DATABASES
    const calle3 = {
        nombre : "Se renta departamento en Loma Bonita",
        casadepa : "depa",
        ventarenta : "renta",
        ter : "65",
        const : "65",
        rec : "2",
        bc : "1",
        est : "1",
        precio : "14 000",
        ubicacion : "C. 3 3480, Loma Bonita, 45086 Zapopan, Jal.",
        desc : "Departamento en renta totalmente remodelado incluyendo instalación eléctrica e hidráulica ubicado en Calle 3, Loma Bonita Residencial, en tercer piso. Cuenta con 2 recámaras, un baño completo, área de sala comedor, cocina integral, patio de servicio y cochera para un auto.",
    
        bgimg : "./calle3/bgimg.jpg",
        img1 : "./calle3/img1.jpg",
        img2 : "./calle3/img2.jpg",
        img3 : "./calle3/img3.jpg"
    }
    const puntosur = {
    nombre : "Se vende casa en Punto Sur Elite",
    casadepa : "casa",
    ventarenta : "venta",
    ter : "180",
    const : "270 ",
    rec : "3",
    bc : "3",
    est : "2",
    precio : "9 200 000",
    ubicacion : "Av. Punto Sur 6259, 45645 Los Gavilanes, Jal.",
    maps: "https://maps.app.goo.gl/c3a7h5ogVZ4PeaVRA",
    mapsembed : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1867.7722143446026!2d-103.44776312996251!3d20.565812797001993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428acab4041817b%3A0x141e5c2aa620d401!2sAv.%20Punto%20Sur%206259%2C%2045645%20Los%20Gavilanes%2C%20Jal.!5e0!3m2!1sen!2smx!4v1753907195696!5m2!1sen!2smx",
    desc : "Excelente casa nueva en venta en PUNTO SUR ELITE, con terminados de lujo, a un costado de la Plaza Punto Sur",
    
    bgimg : "./puntosur/bgimg.jpg",
    img1 : "./puntosur/img1.jpg",
    img2 : "./puntosur/img2.jpg",
    img3 : "./puntosur/img3.jpg",

    };

    const tormenta = {
      nombre : "Se vende casa en Jardines del Bosque",
      casadepa : "casa",
      ventarenta : "venta",
      ter : "145",
      const : "224",
      rec : "3",
      bc : "3",
      est : "2",
      precio : "6 450 000",
      ubicacion : "C. Tormenta 847, Jardines del Bosque, 44520 Guadalajara, Jal.",
      maps : "https://maps.app.goo.gl/7SwifZtiHS3hSia89",
      mapsembed : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2717.0766586696827!2d-103.37920270018157!3d20.663994135581756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae0a7b739c8d%3A0xd00a8be39aabb3f2!2sTormenta%20847%2C%20Jardines%20del%20Bosque%2C%2044520%20Guadalajara%2C%20Jal.!5e0!3m2!1sen!2smx!4v1753906654060!5m2!1sen!2smx",
      desc : "Casa en venta en Jardines del bosque, cuenta con área de sala comedor, recibidor, cocina integral con cubierta de granito, jardín posterior, medio baño y cochera para 2 autos en planta baja y en planta alta cuenta con 3  recámaras, 3 baños completos y una terraza",
      bgimg : "./tormenta/bgimg.jpg",
      img1 : "./tormenta/img1.jpg",
      img2 : "./tormenta/img2.jpg",
      img3 : "./tormenta/img3.jpg"
    };

    const bosquereal = {
      nombre : "Se vende casa en Fraccionamiento Bosque Real",
      casadepa : "casa",
      ventarenta : "venta",
      ter : "136",
      const : "190",
      rec : "4",
      bc : "3",
      est : "2",
      precio : "4 500 000",
      ubicacion : "45645 Bosque Real Fraccionamiento, Jalisco",
      desc : "Excelente casa en Bosque Real, con 4 recámaras, 3 baños completos y un medio baño, estacionamiento para 2 autos y patio privado. Ubicada en Fraccionamiento Bosque Real, con amenidades como gimnasio, alberca, áreas verdes, casa club y espacio de coworking. ",
      maps : "https://maps.app.goo.gl/KYyzork62tQYNJUGA",
      mapsembed : "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d643.6827786690162!2d-103.4944957020257!3d20.5692933839242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1753907094429!5m2!1sen!2smx",
      bgimg : "./bosquereal/bgimg.jpg",
      img1 : "./bosquereal/img1.jpg",
      img2 : "./bosquereal/img2.jpg",
      img3 : "./bosquereal/img3.jpg"
    };



// BUTTON FUNCTIONS
    const originalHTML = document.body.innerHTML;
     // 2. Main function to load and replace
    function loadAndReplace(jsonFile) {
      // Reset the document content to original template
      document.body.innerHTML = originalHTML;
      // Wait a moment to let the DOM re-render before running replacement
      setTimeout(() => {
        fetch(jsonFile)
          .then(res => res.json())
          .then(data => replacePlaceholders(data))
          .catch(err => console.error("Failed to load JSON:", err));
      }, 0);
    }

    function replacePlaceholders(obj) {
        loadAndReplace();
        hideFunction();
        
      // 1. Replace placeholders in text nodes
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
      );

      let node;
      while ((node = walker.nextNode())) {
        node.nodeValue = node.nodeValue.replace(/{{(.*?)}}/g, (_, key) => {
          key = key.trim();
          return obj[key] !== undefined ? obj[key] : `{{${key}}}`;
        });
      }

      // 2. Replace placeholders in element attributes (e.g. <img src="{{imageUrl}}">)
      document.querySelectorAll("*").forEach(el => {
        for (let attr of el.attributes) {
          if (attr.value.includes("{{")) {
            attr.value = attr.value.replace(/{{(.*?)}}/g, (_, key) => {
              key = key.trim();
              return obj[key] !== undefined ? obj[key] : `{{${key}}}`;
            });
          }
        }
      });
    }