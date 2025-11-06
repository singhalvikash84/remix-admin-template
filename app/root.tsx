
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Swamade Contract Manufacturing</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background: #f8f9fa;
      color: #333;
      line-height: 1.6;
    }
    /* Navigation */
    nav {
      background: #003f5c;
      color: #fff;
      padding: 10px 0;
      position: sticky;
      top: 0;
      width: 100%;
      z-index: 100;
    }
    nav .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 20px;
    }
    nav h1 {
      margin: 0;
      font-size: 1.5rem;
    }
    nav ul {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;
    }
    nav ul li {
      margin-left: 20px;
    }
    nav ul li a {
      color: #fff;
      text-decoration: none;
      font-weight: bold;
      font-size: 0.95rem;
    }
    nav ul li a:hover {
      text-decoration: underline;
    }

    /* Hero */
    .hero {
      background: linear-gradient(rgba(0, 63, 92, 0.8), rgba(0, 63, 92, 0.8)), url('images/hero.png');
      background-size: cover;
      background-position: center;
      color: #fff;
      text-align: center;
      padding: 80px 20px;
    }
    .hero h2 {
      font-size: 2.4rem;
      margin-bottom: 10px;
    }
    .hero p {
      font-size: 1.2rem;
      margin-bottom: 20px;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
    .btn-primary {
      display: inline-block;
      background: #f49f0a;
      color: #fff;
      padding: 12px 24px;
      text-decoration: none;
      border-radius: 4px;
      font-weight: bold;
      transition: background 0.3s ease;
    }
    .btn-primary:hover {
      background: #d88c08;
    }
    /* Section styles */
    .section {
      padding: 60px 20px;
      max-width: 1100px;
      margin: 0 auto;
    }
    .section h3 {
      font-size: 1.8rem;
      margin-bottom: 20px;
      color: #003f5c;
    }
    .section p {
      margin-bottom: 20px;
    }
    .capabilities-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }
    .card {
      background: #fff;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
    .card h4 {
      margin-top: 0;
      color: #003f5c;
    }
    .card ul {
      margin: 0;
      padding-left: 20px;
      list-style-type: disc;
    }
    .two-column {
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
    }
    .two-column > div {
      flex: 1;
      min-width: 280px;
    }
    /* Footer */
    footer {
      background: #003f5c;
      color: #fff;
      text-align: center;
      padding: 20px;
    }
    footer a {
      color: #f49f0a;
      text-decoration: none;
    }
    footer a:hover {
      text-decoration: underline;
    }

    /* New Styles */
    /* Hero tagline */
    .hero .tagline {
      font-size: 1.6rem;
      font-weight: bold;
      color: #f49f0a;
      margin-top: 20px;
    }


    /* Card images */
    .card-image {
      width: 100%;
      height: auto;
      border-radius: 6px;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <!-- Navigation -->
  <nav>
    <div class="container">
      <h1>Swamade</h1>
      <ul>
        <li><a href="#about">About Us</a></li>
        <li><a href="#capabilities">Capabilities</a></li>
        <li><a href="#industries">Industries</a></li>
        <li><a href="#quality">Quality & Sustainability</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <h2>Your One‑Stop Partner for Plastics &amp; Metal Manufacturing</h2>
    <div class="tagline">Contract Manufacturing from India</div>
    <p>Swamade delivers end‑to‑end contract manufacturing solutions spanning injection molding, blow molding and metal fabrication. We turn ideas into reality with precision engineering, advanced tooling, and a commitment to quality and sustainability.</p>
    <a href="#contact" class="btn-primary">Request a Quote</a>
  </section>

  <!-- About Us -->
  <section id="about" class="section">
    <h3>About Us</h3>
    <p>With decades of experience in plastics and metal manufacturing, Swamade partners with brands and OEMs across the globe to bring their products to life. Our vertically integrated facilities house state‑of‑the‑art machinery, expert engineers and skilled technicians, enabling us to manage every stage of the product lifecycle—from concept and design to tooling, manufacturing, finishing and assembly.</p>
    <p>We pride ourselves on innovation, dedication and proactive service. Whether you need a trusted supplier for high‑volume production or a collaborator for complex prototypes, Swamade offers tailored solutions that balance cost efficiency with uncompromising quality.</p>
  </section>

  <!-- Capabilities -->
  <section id="capabilities" class="section">
    <h3>Capabilities</h3>
    <div class="capabilities-grid">
      <div class="card">
        <!-- Injection Molding illustration -->
        <img src="images/injection.png" alt="Injection molding illustration" class="card-image">
        <h4>Injection Molding</h4>
        <ul>
          <li>Fleet of machines ranging from 50 T to 650 T for thermoplastic and engineering‑grade resins.</li>
          <li>Insert molding, overmolding and multi‑shot capabilities.</li>
          <li>Dedicated tooling and process engineers for optimized production.</li>
        </ul>
      </div>
      <div class="card">
        <!-- Blow Molding icon -->
        <img src="images/blow.png" alt="Blow molding icon" class="card-image">
        <h4>Blow Molding</h4>
        <ul>
          <li>Extrusion and injection blow molding for bottles, containers and hollow parts.</li>
          <li>Precision control of wall thickness for consistent quality.</li>
          <li>Specialty materials including HDPE, PP, PETG and more.</li>
        </ul>
      </div>
      <div class="card">
        <!-- Metal fabrication illustration -->
        <img src="images/metal.png" alt="Metal fabrication illustration" class="card-image">
        <h4>Metal Fabrication</h4>
        <ul>
          <li>Sheet metal stamping, bending and forming.</li>
          <li>Tube cutting, welding and assembly.</li>
          <li>Integrated fabrication with plastic components for hybrid products.</li>
        </ul>
      </div>
      <div class="card">
        <!-- Tool Design & Manufacturing icon -->
        <img src="images/tool.png" alt="Tool design icon" class="card-image">
        <h4>Tool Design &amp; Manufacturing</h4>
        <ul>
          <li>In‑house tool room for mold design, fabrication and maintenance.</li>
          <li>Rapid prototyping &amp; sampling for quick design iterations.</li>
          <li>Transfer tooling services and program management.</li>
        </ul>
      </div>
      <div class="card">
        <!-- Engineering & Prototyping icon -->
        <img src="images/engineering.png" alt="Engineering & Prototyping icon" class="card-image">
        <h4>Engineering &amp; Prototyping</h4>
        <ul>
          <li>Design for manufacturability (DFM) and engineering support.</li>
          <li>3D CAD modeling, simulation and prototype development.</li>
          <li>Quick‑turn prototyping to accelerate time to market.</li>
        </ul>
      </div>
      <div class="card">
        <!-- Assembly & Finishing icon -->
        <img src="images/assembly.png" alt="Assembly & Finishing icon" class="card-image">
        <h4>Assembly &amp; Finishing</h4>
        <ul>
          <li>Cleanroom assembly, pad printing, laser marking and painting.</li>
          <li>Sub‑assembly, kitting and packaging services.</li>
          <li>End‑to‑end logistics and supply chain management.</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Industries -->
  <section id="industries" class="section">
    <h3>Industries & Applications</h3>
    <div class="two-column">
      <div>
        <p><strong>Toys & Mobility:</strong> We design and produce safe, durable and fun ride‑on toys, scooters, trikes and playsets for global brands.</p>
        <p><strong>Consumer Products:</strong> High‑quality plastic components for appliances, personal care, packaging and household goods.</p>
        <p><strong>Automotive:</strong> Precision components and assemblies for interiors, lighting, functional parts and decorative trims.</p>
      </div>
      <div>
        <p><strong>Industrial & Electronics:</strong> Enclosures, housings, gears and mechanical parts for industrial equipment and electronics.</p>
        <p><strong>Health & Safety:</strong> Components for medical devices and safety equipment produced under stringent quality standards.</p>
        <p><strong>Customized Solutions:</strong> Tailor‑made assemblies combining plastic and metal parts to meet your unique application requirements.</p>
      </div>
    </div>
  </section>

  <!-- Quality & Sustainability -->
  <section id="quality" class="section">
    <h3>Quality & Sustainability</h3>
    <p>Swamade is committed to delivering products that meet or exceed international quality standards. Our facilities operate under ISO 9001 and IATF 16949 quality management systems, and we conduct rigorous in‑process and final inspections using advanced metrology equipment. We maintain cleanroom assembly areas for products requiring controlled environments and traceability.</p>
    <p>We also believe that manufacturing excellence goes hand‑in‑hand with environmental responsibility. Our green initiatives include investing in renewable energy, recycling programs and process optimization to minimize waste. We strive to reduce our carbon footprint while helping our customers achieve their sustainability goals.</p>
  </section>

  <!-- Contact -->
  <section id="contact" class="section">
    <h3>Contact & Request a Quote</h3>
    <p>Ready to start your project or learn more about how Swamade can support your manufacturing needs? Reach out to our team to discuss your requirements.</p>
    <p><strong>Email:</strong> contact@swamade.com<br>
       <strong>Phone:</strong> +91 98XXXXXX00<br>
       <strong>Address:</strong> Swamade Manufacturing Campus, Industrial Estate, Secunderabad, Telangana, India</p>
    <p><a href="mailto:contact@swamade.com" class="btn-primary">Send Us an Email</a></p>
  </section>

  <!-- Footer -->
  <footer>
    &copy; 2025 Swamade Contract Manufacturing. All rights reserved.
  </footer>
</body>
</html>
