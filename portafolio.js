console.log("hola");

// Gallery
const trabajos = [
	
	{
	titulo: "Ilumini",
	categoria: "Iluminaria para niños",
	imagen: "Ilumini.png",
	alt: "Proyecto 1",
	},

	{
	titulo: "Lumbra",
	categoria: "Mósulo urbano",
	imagen: "Lumbra.png",
	alt: "Proyecto 2",
	},

	{
	titulo: "Equilibra-T",
	categoria: "Colaboración con MIM",
	imagen: "MIM.png",
	alt: "Proyecto 3",
	},

	{
	titulo: "AromaZen",
	categoria: "Diseño de Producto",
	imagen: "AromaZen.png",
	alt: "Proyecto 4",
	},

	{
	titulo: "I AM NOT PLASTIC",
	categoria: "Colaboración con "Iam not plastic"",
	imagen: "I AM NOT PLASTIC.png",
	alt: "Proyecto 5",
	},

	{
	titulo: "Llave Inglea",
	categoria: "Mejora ergonomica de herramienta",
	imagen: "Llave Inglesa.png",
	alt: "Proyecto 6",
	},

	{
	titulo: "SondZ",
	categoria: "Diseño por manufactura",
	imagen: "SoundZ.png",
	alt: "Proyecto 7",
	},

	{
	titulo: "Morpho",
	categoria: "Diseño de producto",
	imagen: "Morpho.png",
	alt: "Proyecto 8",
	},

	{
	titulo: "Mivory",
	categoria: "Diseño de Juego",
	imagen: "Mivory Join.png",
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
        
