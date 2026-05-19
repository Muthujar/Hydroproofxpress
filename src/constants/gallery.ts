export type GalleryPhoto = {
  id: string;
  title: string;
  alt: string;
  src: string;
};

/** Local project photos under /public/gallery/ */
export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "g1",
    title: "Terrace surface preparation",
    alt: "Workers preparing a large residential terrace for waterproofing",
    src: "/gallery/g1.jpg",
  },
  {
    id: "g2",
    title: "Liquid membrane on terrace slab",
    alt: "Worker rolling white waterproofing membrane onto a flat roof",
    src: "/gallery/g2.jpg",
  },
  {
    id: "g3",
    title: "Industrial slab coating",
    alt: "Crew spray-applying grey waterproofing coating on a wide concrete slab",
    src: "/gallery/g3.jpg",
  },
  {
    id: "g4",
    title: "Rooftop membrane application",
    alt: "Worker applying white ISOTOP waterproofing paint on a terrace",
    src: "/gallery/g4.jpg",
  },
  {
    id: "ga1",
    title: "Interior damp patch repair",
    alt: "Technician preparing filler for wall damp repair indoors",
    src: "/gallery/ga1.jpg",
  },
  {
    id: "ga2",
    title: "Wall–floor joint sealing",
    alt: "Blue waterproofing membrane brushed along a concrete wall and floor corner",
    src: "/gallery/ga2.jpg",
  },
  {
    id: "ga3",
    title: "Bathroom tub edge sealing",
    alt: "Sealant applied along bathtub and tiled wall joint",
    src: "/gallery/ga3.jpg",
  },
  {
    id: "ga4",
    title: "Wet-room floor membrane",
    alt: "Fresh white waterproofing coat applied across a bathroom floor",
    src: "/gallery/ga4.jpg",
  },
  {
    id: "ga5",
    title: "Crack injection repair",
    alt: "Injection packer installed in a wall crack with resin sealant",
    src: "/gallery/ga5.jpg",
  },
  {
    id: "ga6",
    title: "Masonry corner treatment",
    alt: "Fresh cement and corner finishing on a block wall",
    src: "/gallery/ga6.jpg",
  },
  {
    id: "ga7",
    title: "Exterior wall coating on scaffold",
    alt: "Worker applying exterior wall finish from scaffolding",
    src: "/gallery/ga7.jpg",
  },
  {
    id: "ga8",
    title: "Exterior wall surface finish",
    alt: "Decorative exterior wall coating with window grille detail",
    src: "/gallery/ga8.jpg",
  },
];

/** @deprecated Use galleryPhotos — kept for any legacy imports */
export const featuredProjects = galleryPhotos;

export type GalleryProject = GalleryPhoto;
