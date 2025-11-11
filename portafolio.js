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
	titulo: "Bioplástico",
	categoria: "Diseño de Biomateriales",
	imagen: "bioplastico.jpeg",
	alt: "Proyecto 2",
	},

	{
	titulo: "Bolsas a pedido",
	categoria: "Pedido Personalizado",
	imagen: "bolsas.png",
	alt: "Proyecto 3",
	},

	{
	titulo: "Botris",
	categoria: "Diseño de Producto",
	imagen: "boltris.png",
	alt: "Proyecto 4",
	},

	{
	titulo: "Señaletica",
	categoria: "Diseño de Señaleticas",
	imagen: "senal.png",
	alt: "Proyecto 5",
	},

	{
	titulo: "Cartas Personalizadas",
	categoria: "Pedido Personalizado",
	imagen: "cartas.png",
	alt: "Proyecto 6",
	},

	{
	titulo: "Autito",
	categoria: "Diseño por manufactura digital",
	imagen: "kachow.png",
	alt: "Proyecto 7",
	},

	{
	titulo: "Lámpara",
	categoria: "Diseño de producto",
	imagen: "lampara.png",
	alt: "Proyecto 8",
	},

	{
	titulo: "Olerium",
	categoria: "Diseño de Juego",
	imagen: "olerium.png",
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
        
