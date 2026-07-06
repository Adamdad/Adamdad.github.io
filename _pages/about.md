---
layout: home-minimal
permalink: /
title: "Xingyi Yang"
excerpt: "About me"
author_profile: false
redirect_from: 
  - /about/
  - /about.html
---

{% include base_path %}

<section class="xy-home-hero">
  <div>
    <p class="xy-eyebrow">PolyU DSAI / Hong Kong</p>
    <h1 class="xy-home-title">Xingyi Yang</h1>
    <p class="xy-home-subtitle">Efficient Generative AI for Physical Worlds.</p>
    <p class="xy-home-meta">Hi, my name is Xingyi Yang (Adam). I am a Tenure-Track Assistant Professor in the <a href="https://www.polyu.edu.hk/dsai/?sc_lang=en">Department of Data Science and Artificial Intelligence (DSAI)</a> at The Hong Kong Polytechnic University. I am also honored to have been selected as the prestigious <strong>Presidential Young Scholars</strong> at PolyU.</p>
    <div class="xy-action-row">
      <a class="xy-action xy-action--primary" href="{{ base_path }}/opening">Openings</a>
      <a class="xy-action" href="{{ base_path }}/publications/">Publications</a>
      <a class="xy-action" href="https://scholar.google.com/citations?user=1n2OPtwAAAAJ">Google Scholar</a>
      <a class="xy-action" href="{{ base_path }}/files/CV_XingyiYang_202506.pdf">CV</a>
    </div>
  </div>

  <aside class="xy-portrait-panel" aria-label="Xingyi Yang profile">
    <img src="{{ base_path }}/images/726691746359914_.pic_hd.jpg" alt="Xingyi Yang">
    <p class="xy-portrait-caption">Assistant Professor, PolyU DSAI. Generative AI, multimodal learning, efficient AI, and intelligent systems for physical worlds.</p>
  </aside>
</section>

<section class="xy-section">
  <div class="xy-section-header">
    <div>
      <p class="xy-section-kicker">About</p>
      <h2 class="xy-section-title">Research Identity</h2>
    </div>
  </div>
  <div class="xy-copy">
    <p>I received my Ph.D. from the National University of Singapore (NUS), advised by Prof. Xinchao Wang. I also had a wonderful experience as a visiting Ph.D. student at the University of Oxford, working with Prof. Philip Torr. Prior to that, I completed my Master's at UC San Diego (UCSD) and my Bachelor's at Southeast University (SEU).</p>
    <p>My research lies at the intersection of <strong>generative AI</strong> and <strong>multi-modal learning</strong>, with a strong emphasis on their computational <strong>efficiency</strong>. Our mission is to build intelligent systems that robustly understand, generate, and interact with physical worlds. We hope to achieve this with minimum cost, by tapping and repurposing the rich capabilities of large foundation models through modular, compositional, and post-training techniques.</p>
  </div>

  <div class="xy-keyword-grid">
    <article class="xy-keyword">
      <span>01</span>
      <h3>Generative AI</h3>
      <p>Models that create, edit, reconstruct, and reason over visual and physical content.</p>
    </article>
    <article class="xy-keyword">
      <span>02</span>
      <h3>Multimodal Learning</h3>
      <p>Systems that connect language, images, video, 3D, and embodied interaction.</p>
    </article>
    <article class="xy-keyword">
      <span>03</span>
      <h3>Efficient AI</h3>
      <p>Adaptation, reuse, compression, and post-training techniques for foundation models.</p>
    </article>
    <article class="xy-keyword">
      <span>04</span>
      <h3>Physical Worlds</h3>
      <p>AI that understands, generates, and interacts with scenes, geometry, and dynamics.</p>
    </article>
  </div>
</section>

<section class="xy-section">
  <div class="xy-section-header">
    <div>
      <p class="xy-section-kicker">Research</p>
      <h2 class="xy-section-title">Selected Works</h2>
    </div>
    <a class="xy-action" href="{{ base_path }}/publications/">All Papers</a>
  </div>

  <div class="xy-featured-list">
    {% assign selected_work_ids = "/publications/2026_iclr_sparsed|/publications/2026_iclr_dirmoe|/publications/2025_cvpr_hash3d|/publications/2025_iccv_ominicontrol|/publications/2025_iclr_kat|/publications/2022_neurips_dery" | split: "|" %}
    {% for selected_work_id in selected_work_ids %}
      {% for post in site.publications reversed %}
        {% if post.permalink == selected_work_id %}
          {% include archive-single.html %}
        {% endif %}
      {% endfor %}
    {% endfor %}
  </div>
</section>

<section class="xy-section">
  <div class="xy-opening-panel">
    <div>
      <p class="xy-section-kicker">Join</p>
      <h2 class="xy-section-title">Open Positions</h2>
      <div class="xy-copy">
        <p>I am looking for self-motivated Ph.D. students, postdocs, and research assistants for Spring/Fall 2026. For more details, please see <a href="{{ base_path }}/opening">Opening</a>. If you are interested in working with me, feel free to reach out via email at <strong>x3yang@outlook.com</strong> with your resume.</p>
        <p><em>PS: Please do not use my NUS email as it will be expiring soon.</em></p>
      </div>
      <div class="xy-action-row">
        <a class="xy-action xy-action--primary" href="{{ base_path }}/opening">View Openings</a>
        <a class="xy-action" href="mailto:x3yang@outlook.com">Email</a>
      </div>
    </div>
    <div class="xy-opening-side">
      <div class="xy-step-grid">
        <article class="xy-step">
          <span>01</span>
          <h3>Ph.D.</h3>
          <p>Spring/Fall 2026 candidates interested in generative, multimodal, and efficient AI.</p>
        </article>
        <article class="xy-step">
          <span>02</span>
          <h3>Postdoc / RA</h3>
          <p>Researchers who want to build strong systems and publish rigorous work.</p>
        </article>
        <article class="xy-step">
          <span>03</span>
          <h3>Contact</h3>
          <p>Send a CV, representative work, and a concise statement of research interest.</p>
        </article>
      </div>
    </div>
  </div>
</section>

<section class="xy-section">
  <p class="xy-section-kicker">Notes</p>
  <div class="xy-copy">
    <p>I believe in <a href="http://slow-science.org/">Slow Science</a>.</p>
  </div>
</section>
