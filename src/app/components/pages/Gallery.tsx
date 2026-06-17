import { Link } from "react-router";
import { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import HeroImg from "../../../imports/Gallery/Hero.jpg";
import Img1 from "../../../imports/Gallery/1.jpg";
import Img2 from "../../../imports/Gallery/2.JPEG";
import Img3 from "../../../imports/Gallery/3.JPEG";
import Img4 from "../../../imports/Gallery/4.JPEG";
import Img5 from "../../../imports/Gallery/5.JPEG";
import Img6 from "../../../imports/Gallery/6.JPEG";
import Img7 from "../../../imports/Gallery/7.JPEG";
import Img8 from "../../../imports/Gallery/8.JPEG";
import Img9 from "../../../imports/Gallery/9.JPEG";
import Img10 from "../../../imports/Gallery/10.JPEG";
import Img11 from "../../../imports/Gallery/11.JPEG";
import Img12 from "../../../imports/Gallery/12.JPEG";
import Img13 from "../../../imports/Gallery/13.JPEG";
import Img14 from "../../../imports/Gallery/14.jpg";
import Img15 from "../../../imports/Gallery/15.jpg";
import g11 from "../../../imports/property/g11.jpg";


const galleryImages = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Img12,
  Img13,
  Img14,
  Img15,
  g11,
];

export function gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative h-[90svh] min-h-[450px]">
          
              <ImageWithFallback
                src={HeroImg}
                alt="Modern Living — Ranch Retreat"
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 flex flex-col items-start justify-end pb-16 px-6 sm:px-12 lg:px-20">
                <nav className="flex items-center gap-2 text-white/90 text-[11px] tracking-wider uppercase mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                  <Link to="/" className="hover:text-white transition-colors">Home</Link>
                  <span>/</span>
                  <span className="text-white">Gallery.</span>
                </nav>
                <p className="text-[11px] tracking-[0.3em] uppercase text-white mb-2" style={{ fontFamily: "Inter, sans-serif" }}>Gallery</p>
                <h1
                  className="text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-3"
                  style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}
                >
                  PROPERTY GALLERY
                </h1>
                <p
                  className="text-3xl sm:text-4xl text-white/90 "
                  style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 400 }}
                >
                  Explore a curated collection of interiors,
              architecture, <br/>outdoor living spaces, and scenic
              surroundings that <br/>define the character of this
              exceptional property.
                </p>
              </div>
            </section>

      {/* INTRO */}
      <section className="py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-[15px] tracking-[0.3em] uppercase text-gray-700 mb-2"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Visual Experience
          </p>

          <h2
            className="text-4xl md:text-5xl mb-8"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Every Detail Tells A Story
          </h2>

          <p
            className="text-gray-800 leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            From thoughtfully designed interiors to expansive
            outdoor spaces, each image captures the quality,
            comfort, and timeless appeal that make this property
            truly unique.
          </p>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="px-6 pb-10">
        <div className="max-w-7xl mx-auto overflow-hidden">
          <ImageWithFallback
            src={Img1}
            alt="Featured Property"
            className="w-full h-[70svh] object-cover hover:scale-105 transition-transform duration-1000"
          />
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="px-6 pb-10">
        <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <div
  key={index}
  className="overflow-hidden break-inside-avoid group cursor-pointer"
  onClick={() => setSelectedImage(image)}
>
              <ImageWithFallback
  src={image}
  alt={`Gallery ${index + 1}`}
  className="w-full object-cover transition-all duration-700 group-hover:scale-105"
/>
            </div>
          ))}
        </div>
      </section>



      {/* STATS */}
      {/*<section className="border-t border-gray-200 py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <h3
              className="text-4xl mb-2"
              style={{ fontFamily: "Georgia, serif" }}
            >
              4+
            </h3>
            <p className="text-gray-600 uppercase tracking-widest text-xs">
              Bedrooms
            </p>
          </div>

          <div>
            <h3
              className="text-4xl mb-2"
              style={{ fontFamily: "Georgia, serif" }}
            >
              3+
            </h3>
            <p className="text-gray-600 uppercase tracking-widest text-xs">
              Bathrooms
            </p>
          </div>

          <div>
            <h3
              className="text-4xl mb-2"
              style={{ fontFamily: "Georgia, serif" }}
            >
              1500+
            </h3>
            <p className="text-gray-600 uppercase tracking-widest text-xs">
              Sq Ft
            </p>
          </div>

          <div>
            <h3
              className="text-4xl mb-2"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Lake
            </h3>
            <p className="text-gray-600 uppercase tracking-widest text-xs">
              Views
            </p>
          </div>
        </div>
      </section>*/}

      {/* CTA */}
      <section className="bg-black text-white py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-white/90 text-sam mb-4">
            Schedule A Visit
          </p>

          <h2
            className="text-4xl md:text-6xl mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Experience It In Person
          </h2>

          <p className="text-[17px] text-white/90 leading-relaxed mb-5">
            Photographs capture the beauty of a home, but
            nothing compares to walking through the property
            and experiencing its atmosphere firsthand.
          </p>

          <Link
            to="/schedule-showing"
            className="inline-block px-8 py-4 bg-white text-black uppercase tracking-[0.2em] text-sm hover:bg-gray-100 transition-colors"
          >
            Schedule Showing
          </Link>
        </div>
      </section>
      {selectedImage && (
  <div
    className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
    onClick={() => setSelectedImage(null)}
  >
    <button
      className="absolute top-6 right-6 text-white text-4xl"
      onClick={() => setSelectedImage(null)}
    >
      ×
    </button>

    <img
      src={selectedImage}
      alt="Gallery Preview"
      className="max-w-[95vw] max-h-[90vh] object-contain"
      onClick={(e) => e.stopPropagation()}
    />
  </div>
)}
    </div>
  );
}