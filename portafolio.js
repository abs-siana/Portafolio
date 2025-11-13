
// Gallery
const trabajos = [
	
	{
  titulo: "Kit AromaZen",
  subtitulo: "Diseño de Producto | Experiencia de Usuario",
  descripcion: "Kit de té que combina comodidad, funcionalidad y estética para compartir momentos.",
  imagen: "AromaZen.png",
  alt: "Proyecto 1"
},

	{
	titulo: "Morpho",
	categoria: "Diseño de producto",
	imagen: "morpho.png",
	alt: "Proyecto 2",
	},

	{
	titulo: "SoundZ",
	categoria: "Pedido Personalizado",
	imagen: "SoundZ.png",
	alt: "Proyecto 3",
	},

	{
	titulo: "Mivory Join",
	categoria: "Diseño de Producto",
	imagen: "mivoryjoin.png",
	alt: "Proyecto 4",
	},

	{
	titulo: "Lumbra",
	categoria: "Diseño de Señaleticas",
	imagen: "Lumbra.png",
	alt: "Proyecto 5",
	},

	{
	titulo: "I am not plastic",
	categoria: "Pedido Personalizado",
	imagen: "iamnotplastic.png",
	alt: "Proyecto 6",
	},

	{
	titulo: "Ilumini",
	categoria: "Diseño por manufactura digital",
	imagen: "ilumini.png",
	alt: "Proyecto 7",
	},

	{
	titulo: "Equilibra-T",
	categoria: "Diseño de producto",
	imagen: "mim.png",
	alt: "Proyecto 8",
	},

	{
	titulo: "Llave Inglesa",
	categoria: "Diseño de Juego",
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
            <p>${trabajo.categoria}</p>
        </div>
    `;
    
    galleryGrid.appendChild(item);
});
        
