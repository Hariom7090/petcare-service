function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>We offer a wide range of services</p>
        </div>

        <div className="services-grid">
          {[
            {
              title: "Pet Grooming",
              desc: "Professional grooming services",
              img: "'https://media.istockphoto.com/id/2187149127/photo/prinia-bird.jpg?s=612x612&w=0&k=20&c=U3StMIya7LP9dtGvEC0B2ACPcSwm0bySr1j00s0Syo8='",
            },
            {
              title: "Veterinary Care",
              desc: "Comprehensive medical services",
              img: "'https://media.istockphoto.com/id/1336021035/photo/black-and-white-color-cat-looking-at-camera-curiosity.jpg?s=612x612&w=0&k=20&c=AJ_iL-qizme2a0s3UYJjqVxRaD_edlwbYykLdocQ7bE='",
            },
            {
              title: "Pet Boarding",
              desc: "Safe and comfortable boarding",
              img: "'https://media.istockphoto.com/id/1808810198/photo/fluffy-pembroke-welsh-corgi-puppy-sits-on-a-meadow.webp?a=1&b=1&s=612x612&w=0&k=20&c=6M73V3EnjK5QzDx-lUqdho_V-x5A2wxvj8l5sHmHnxI='",
            },
            {
              title: "Training",
              desc: "Professional training programs",
              img: "https://images.unsplash.com/photo-1591561582301-7ce6588cc286",
            },
          ].map((s, i) => (
            <div className="service-card" key={i}>
              <div
                className="service-img"
                style={{ backgroundImage: `url(${s.img})` }}
              />
              <div className="service-content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
