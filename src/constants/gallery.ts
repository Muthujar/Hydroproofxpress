export type GalleryProject = {
  id: string;
  title: string;
  beforeSrc: string;
  afterSrc: string;
};

export const featuredProjects: GalleryProject[] = [
  {
    id: "gp-1",
    title: "Terrace redo — Jubilee Hills duplex",
    beforeSrc:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=800&q=75&auto=format&fit=crop",
    afterSrc:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=75&auto=format&fit=crop",
  },
  {
    id: "gp-2",
    title: "Parking deck leak fix — Raidurg tower",
    beforeSrc:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=75&auto=format&fit=crop",
    afterSrc:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=75&auto=format&fit=crop",
  },
  {
    id: "gp-3",
    title: "Bathroom repair — gated community flat",
    beforeSrc:
      "https://images.unsplash.com/photo-1595526114035-0d456edcdf85?w=800&q=75&auto=format&fit=crop",
    afterSrc:
      "https://images.unsplash.com/photo-1631889993954-faac960947c9?w=800&q=75&auto=format&fit=crop",
  },
];
