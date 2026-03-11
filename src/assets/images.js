import profilePhoto  from "./profilephoto/rahel-profile.png";
import abtphoto   from "./abtphoto/abtrahel.png";

// ── Ganti null dengan variable foto yang sudah diimport ──
export const images = {
  // Foto profil bulat di Hero
  profile: profilePhoto,           // contoh: profilePhoto

  // Foto di section About
  about: abtphoto,             // contoh: aboutPhoto

  // Screenshot / preview tiap project (key harus sama dengan project id)
  projects: {
    "01": null,            // contoh: selvoImg
    "02": null,            // contoh: lyfeStockImg
    "03": null,            // contoh: pblogImg
  },

  // Foto galeri dokumentasi (tambah sesuai kebutuhan)
  gallery: [
    null,                  // contoh: gallery1
    null,                  // contoh: gallery2
    null,                  // contoh: gallery3
  ],
};
