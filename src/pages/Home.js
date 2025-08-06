import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import pic1 from "../images/FourElms/Four Elms 1.png";
import pic2 from "../images/FourElms/Four Elms 2.png";
import pic3 from "../images/FourElms/Four Elms 3.png";
import pic4 from "../images/FourElms/Four Elms 4.png";
import pic5 from "../images/FourElms/Four Elms 5.png";

function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="text-gray-600" id="home">
        <div className="grid md:grid-cols-4">
          <section className="navbar" id="nav-home">
            <Navbar />
          </section>

          <main
            className="background px-7 md:px-10 lg:px-16 py-6 md:col-span-3"
            id="home-main"
          >
            <header>
              <h2 className="text-gray-700 text-6xl font-semibold">
                Four Elms
              </h2>
              <h3 className="text-gray-700 text-2xl font-semibold mt-2 hidden lg:block">
                {lang === "english" ? "Home Guide" : "Guía de inicio"}
              </h3>
            </header>

            <div>
              <h4 className="font-bold mt-4 pb-2 border-b">
                {lang === "english" ? "About" : "Acerca de"}
              </h4>

              <div className="mt-8 grid lg:grid-cols-3 gap-10">
                <div
                  className="bg-white rounded overflow-hidden shadow-md relative hover:shadow-lg cursor-pointer"
                  onClick={() => openImage(pic1)}
                >
                  <img
                    src={pic1}
                    alt="Front View"
                    className="w-full h-32 sm:h-48 object-cover"
                  />
                  <div className="m-4">
                    <span className="font-bold">
                      {lang === "english"
                        ? "Located in rural Surrey"
                        : "En Surrey rural"}
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded overflow-hidden shadow-md relative hover:shadow-lg">
                  <p className="text-sm ml-1 mr-1 font-bold">
                    {lang === "english"
                      ? "Four Elms is a large family house in a quiet upscale road near the centre of Godalming. It is a tastefully decorated, tile hung Edwardian house built in the Arts and Crafts style. The interior is light with many double aspect rooms. The newly renovated traditional kitchen leads to a large open-plan breakfast room and even larger conservatory. The beautiful garden won the Godalming in Bloom best garden award."
                      : "Four Elms es una gran casa familiar en una tranquila calle de lujo cerca del centro de Godalming. Es una casa eduardiana decorada con buen gusto, colgada de azulejos, construida en el estilo Arts and Crafts. La cocina tradicional recientemente renovada conduce a una gran sala de desayunos de planta abierta y un invernadero aún más grande.El hermoso jardín ganó el premio al mejor jardín Godalming in Bloom."}
                  </p>
                </div>

                <div
                  className="bg-white rounded overflow-hidden shadow-md relative hover:shadow-lg cursor-pointer"
                  onClick={() => openImage(pic2)}
                >
                  <img
                    src={pic2}
                    alt="Kitchen"
                    className="w-full h-32 sm:h-48 object-cover"
                  />
                  <div className="m-4">
                    <span className="font-bold">
                      {lang === "english"
                        ? "Traditional Kitchen"
                        : "Cocina Tradicional"}
                    </span>
                  </div>
                </div>

                <div
                  className="bg-white rounded overflow-hidden shadow-md relative hover:shadow-lg cursor-pointer"
                  onClick={() => openImage(pic4)}
                >
                  <img
                    src={pic4}
                    alt="Garden"
                    className="w-full h-32 sm:h-48 object-cover"
                  />
                  <div className="m-4">
                    <span className="font-bold">
                      {lang === "english"
                        ? "Award-winning Garden"
                        : "Jardín premiado"}
                    </span>
                  </div>
                </div>

                <div
                  className="bg-white rounded overflow-hidden shadow-md relative hover:shadow-lg cursor-pointer"
                  onClick={() => openImage(pic3)}
                >
                  <img
                    src={pic3}
                    alt="Conservatory"
                    className="w-full h-32 sm:h-48 object-cover"
                  />
                  <div className="m-4">
                    <span className="font-bold">
                      {lang === "english"
                        ? "Beautiful Conservatory"
                        : "Hermoso Conservatorio"}
                    </span>
                  </div>
                </div>

                <div
                  className="bg-white rounded overflow-hidden shadow-md relative hover:shadow-lg cursor-pointer"
                  onClick={() => openImage(pic5)}
                >
                  <img
                    src={pic5}
                    alt="Decorated Room"
                    className="w-full h-32 sm:h-48 object-cover"
                  />
                  <div className="m-4">
                    <span className="font-bold">
                      {lang === "english"
                        ? "Tastefully Decorated"
                        : "Decorado con buen gusto"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
          onClick={closeModal}
        >
          <img
            src={selectedImage}
            alt="Full View"
            className="max-w-full max-h-full rounded shadow-lg"
          />
        </div>
      )}
    </>
  );
}

export default Home;
