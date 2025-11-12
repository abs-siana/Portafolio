
// Gallery
const trabajos = [
	
	{
	titulo: "AromaZen",
	categoria: "Diseño de Interfaz",
	imagen: "AromaZen.png",
	alt: "Proyecto 1",
	},

	{
	titulo: "I AM NOT PLASTIC",
	categoria: "Diseño de Biomateriales",
	imagen: "IAMNOTPLASTIC.png",
	alt: "Proyecto 2",
	},

	{
	titulo: "Ilumini",
	categoria: "Pedido Personalizado",
	imagen: "Ilumini.png",
	alt: "Proyecto 3",
	},

	{
	titulo: "Llave Ingles",
	categoria: "Diseño de Producto",
	imagen: "LlaveInglesa.png",
	alt: "Proyecto 4",
	},

	{
	titulo: "Lumbra",
	categoria: "Diseño de Señaleticas",
	imagen: "Lumbra.png",
	alt: "Proyecto 5",
	},

	{
	titulo: "MIM",
	categoria: "Pedido Personalizado",
	imagen: "mim.png",
	alt: "Proyecto 6",
	},

	{
	titulo: "Mivory Join",
	categoria: "Diseño por manufactura digital",
	imagen: "mivoryjoin.png",
	alt: "Proyecto 7",
	},

	{
	titulo: "Morpho",
	categoria: "Diseño de producto",
	imagen: "Morpho.png",
	alt: "Proyecto 8",
	},

	{
	titulo: "SoundZ",
	categoria: "Diseño de Juego",
	imagen: "SoundZ.png",
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
        
