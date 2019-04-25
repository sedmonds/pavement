var html = require('choo/html')

module.exports = function (state, emit) {
  emit('DOMTitleChange', 'A to Z Road Inc.' )

  return html`<body translate="no">
  <style>
  * {
    box-sizing: border-box;
    grid-column: 1/-1;
  }

  ::before,
  ::after {
    box-sizing: inherit;
  }

  body {
    font-family: "Signika", sans-serif;
    -moz-osx-font-smoothing: grayscale;
    color: #525c65;
    font-size: 16px;
    margin: 0;
  }

  .grid-wrapper {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    max-width: 1530px;
    margin: 0 auto;
  }

  .masthead-inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .masthead-inner .masthead-image img {
    border-radius: 10%;
    margin: 0 1rem 1em 0;
    padding: 1rem 0;
    width: 50%;
  }

  .info-group {
    text-align: right;
    margin: 0 0 1rem 0;
    padding: 0.5rem 0 1em 0.5rem;
  }
  .info-group h1 {
    font-family: "Open Sans", sans-serif;
    font-size: 4.3rem;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }
  .info-group p {
    font-size: 1.3rem;
    margin: 1rem 0 0;
    padding: 0;
  }

  hr {
    color: #029fcb;
    margin: 0;
    padding: 0;
  }

  .hero {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("/assets/yoel-j-gonzalez-304137-unsplash.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 76vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hero-inner {
    max-width: 70vw;
    margin: auto;
    padding-left: 2rem;
  }
  .hero-inner p {
    font-size: 4.2rem;
    font-weight: lighter;
    text-align: center;
    color: white;
    line-height: 6.3rem;
    padding-right: 1.2rem;
  }

  section.features {
    padding: 2em 1.7rem;
  }
  section.features h2 {
    font-size: 2.8rem;
  }

  .features-inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .features-group {
    width: 80%;
    margin: 0 auto;
   white-space: pre-line; 
   padding-bottom: 4em;
  }

  .features-title h3 {
    font-size: 2rem;
    text-transform: uppercase;
    margin: 1rem 0 1rem;
  }
  .features-title .features-link {
    color: #525c65;
    text-decoration: none;
    display: inherit;
    margin-bottom: 3rem;
  }
  .features-title .features-link:hover {
    color: rgba(82, 92, 101, 0.8);
  }

  .features-image img {
    width: 100%;
  }

  .features-group p {
    font-family: "Signika", sans-serif;
    font-size: 1.2em;
    font-weight: lighter;
    line-height: 34px;
  }

  footer {
   border-top: 1px solid rgba(82, 92, 101, 0.8);
   text-align: center;
  }

  .bold {
   font-weight: bold;
  }

  .wlr {
   font-size: 1.4em;
  }

  @media (max-width: 768px) {
    .hero-inner {
      padding-left: 0;
    }

    .hero-inner p {
      font-size: 2rem;
      font-weight: 800;
      text-align: center;
      color: white;
      line-height: 4rem;
      font-weight: lighter;
    }
  }
  @media (max-width: 768px) {
    section.features h2 {
      font-size: 1.8rem;
      text-align: center;
      width: 100%;
      font-weight: bolder;
    }
  }
  @media (max-width: 768px) {
    .masthead-inner {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
    }

    .info-group {
      text-align: center;
      margin: 0 1rem;
      padding: 0.5rem 1rem;
    }
    .info-group h1 {
      font-size: 2rem;
      font-weight: lighter;
      margin: 0;
      padding: 0;
    }
    .info-group p {
      font-size: 1.2rem;
      margin: 0.2rem 0 2rem;
      padding: 0;
    }
    .features-group p span {
      font-size: 1em;
      font-weight: bold;  
    }
   footer {
    padding: 3em 6em;
    margin: 0;
    background-color: black;
    color: #fff;
   }
  }
  @media (max-width: 768px) {
    .features-title h3 {
      font-size: 1rem;
      text-transform: uppercase;
      margin: 3rem 0 0.5rem;
    }
    .features-title .features-link {
      color: #525c65;
      text-decoration: none;
      display: inherit;
      margin: 0 0 3rem;
      font-size: 1rem;
    }
    .features-title .features-link:hover {
      color: rgba(82, 92, 101, 0.8);
    }
    .features-title .features-link:after {
      content: "⇓";
      display: inline-block;
      width: 100%;
      margin: 2rem 0 0;
    }
  }
  @media (max-width: 768px) {
    .features-group:nth-child(6) .features-link:after {
      content: "the end for now :-)";
      font-size: 0.7rem;
      font-weight: bolder;
    }
  }
    
  </style>
  <div class="grid-wrapper">
    <header class="masthead">
      <div class="masthead-inner">
        <div class="masthead-image"><img alt="Logo for A to Z Road"
        src="/assets/logo_yellow.jpg" /></div>
        <div class="info-group">
          <h1>A to Z Road, Inc</h1>
          <p>Highway Striping & Pavement Marking</p>
        </div>
      </div>
    </header>
    <hr/>
    <section class="hero">
      <div class="hero-inner">
        <p>A to Z Road is a Company specializing in pavement delineation/striping.</p>
      </div>
    </section>
    <section class="features">
      <h2>About Us</h2>
      <div class="features-inner">
        <article class="features-group">
          <div class="features-image"><img alt="" src="" /></div>
          <p><span class="bold wlr">A to Z Road is a Company specializing in
          pavement delineation/striping. We will be certified as a DVBE
          (disabled veteran-owned business enterprise), DBE (disadvantaged
          business enterprise), Small business, and Minority Owned (Native
          American).</span></p>          
          <p> Caltrans has a State mandated percentage requirement on advertised
          contracts, for utilization of these business certifications. Besides
          being a profitable work scope, there is significant demand for
          striping companies with set aside business certifications.</p>            
          <p>Additionally, California is just beginning a significant and rigorous overhaul of its highways/freeways (Prop 6 revenues) that will span over the next decade. A significant part of this overhaul includes replacing all 4 inch wide existing stripes with 6 inch and 8 inch stripes to increase visibility/safety, as well as provide greater sensitivity to autonomous automobiles. The striping replacement will take place whether or not new surfacing is placed on a particular alignment or not.</p>
        </article>
      </div>
    </section>

  </div>
     <footer>
      <div>
        <p>
         <span class="bold">A to Z Road, Inc.</span>
          - 42 Union Way Vacaville, CA 95688
          - 707.685.9522</p>
      </div>
    </footer>
</body>
  `
}
