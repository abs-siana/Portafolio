
// Gallery
const trabajos = [
	
	{
  titulo: "Kit AromaZen",
  subtitulo: "Diseño de Producto | Experiencia de Usuario",
  descripcion: "Kit de té que combina comodidad, funcionalidad y estética para compartir momentos con amigos o familia.",
  imagen: "AromaZen.png",
  alt: "Proyecto 1"
},

	{
	titulo: "Morpho",
	subtitulo: "Diseño médico | Tecnólogia 3D",
	descripcion: "Órtesis para la mano impresa en 3D, adaptada a las necesidades del usuario.",
	imagen: "morpho.png",
	alt: "Proyecto 2",
	},

	{
	titulo: "SoundZ",
	subtitulo: "Prototipo tecnológico | Experimentación",
	descripcion: "Mini parlante desarrollado para explorar técnicas de fabricación digital.",
	imagen: "SoundZ.png",
	alt: "Proyecto 3",
	},

	{
	titulo: "Mivory Join",
	subtitulo: "Diseño sustentable | Juguete",
	descripcion: "Juguete de equilibrio en madera que promueve el juego consciente y la motricidad infantil.",
	imagen: "mivoryjoin.png",
	alt: "Proyecto 4",
	},

	{
	titulo: "Lumbra",
	subtitulo: "Diseño urbano | Impacto social",
	descripcion: "Módulo urbano sustentable que aporta sombra y luz a espacios comunitarios.",
	imagen: "Lumbra.png",
	alt: "Proyecto 5",
	},

	{
	titulo: "I am not plastic",
	subtitulo: "Packaging | Colaboración empresarial",
	descripcion: "Envase ecológico para pipeta de aceite, en alianza con una empresa real.",
	imagen: "iamnotplastic.png",
	alt: "Proyecto 6",
	},

	{
	titulo: "Ilumini",
	subtitulo: "Diseño educativo | Producto infantil",
	descripcion: "Lámpara interactiva que enseña el abecedario y animales mediante luz y forma.",
	imagen: "ilumini.png",
	alt: "Proyecto 7",
	},

	{
	titulo: "Equilibra-T",
	subtitulo: "Diseño interactivo | Proyecto colaborativo",
	descripcion: "Rediseño de módulos del Museo Interactivo Mirador para mejorar su experiencia.",
	imagen: "mim.png",
	alt: "Proyecto 8",
	},

	{
	titulo: "Llave Inglesa",
	subtitulo: "Diseño ergonómico | Producto funcional",
	descripcion: "Rediseño de herramienta con agarre mejorado y nuevo mecanismo de activación.",
	imagen: "llave.png",
	alt: "Proyecto 9",
	}
]


const galleryGrid = document.querySelector(".gallery-grid");

trabajos.forEach((trabajo) => {
    const item = document.createElement("div");
    item.classList.add("gallery-item");

	item.innerHTML = `
  <img src="${trabajo.imagen}" alt="${trabajo.alt}">
  <div class="gallery-overlay">
      <h3>${trabajo.titulo}</h3>
      <p class="subtitulo">${trabajo.subtitulo}</p>
      <p class="descripcion">${trabajo.descripcion}</p>
  </div>
`;
    
    galleryGrid.appendChild(item);
});
        
