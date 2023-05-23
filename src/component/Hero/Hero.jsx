const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-vector/superhero-man-giving-interview-video-camera_107791-9224.jpg?w=1380&t=st=1684849954~exp=1684850554~hmac=524abfdd559a4eb64f9e0f7997c42f85941b6f3216ee8777bf894c27d7717905")`,
        }}
      >
        <div className="hero-overlay bg-opacity-70 "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="mx-auto text-yellow-300  p-20">
            <h1 className="mb-5 text-5xl font-bold">Welcome to The Toy Store!</h1>
            <div className="text-2xl font-semibold">
              <p>
                Discover a world of premium action figures at The Toy Store. We
                are your ultimate destination for high-quality collectible
                action figures, specializing in renowned brands such as Marvel,
                Star Wars, Transformers, and more. Immerse yourself in the
                captivating universe of your favorite heroes and iconic
                characters.
              </p>
              <p>
                With our extensive selection, we bring you the finest and most
                sought-after action figures, meticulously crafted to capture
                every detail and essence. Whether you're a passionate collector
                or an enthusiast seeking the perfect addition to your
                collection, The Toy Store offers an unparalleled variety of
                exceptional figures that will ignite your imagination.
              </p>
              <p>
                Browse through our curated marketplace and explore an
                ever-growing catalog of action figures, ranging from beloved
                classics to the latest releases. Each piece is sourced from
                trusted sellers and meticulously authenticated, ensuring
                authenticity and quality you can trust.
              </p>
              <p>
                Unleash your inner hero and elevate your collection to new
                heights. Join us at The Toy Store, your gateway to extraordinary
                action figures and a haven for discerning collectors. Begin your
                adventure today and bring your favorite characters to life!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
