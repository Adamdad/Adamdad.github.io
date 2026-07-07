---
layout: archive
title: "Selected Publications"
permalink: /publications/
author_profile: false
---

{% include base_path %}
A selected set of papers that best represents my research agenda. A complete publication list is available on <a href="https://scholar.google.com/citations?user=1n2OPtwAAAAJ">Google Scholar</a>.

-----------

{% assign selected_publications = site.data.selected_publications %}
{% for selected in selected_publications %}
  {% assign selected_path = selected.id | prepend: "_publications/" | append: ".md" %}
  {% assign selected_post = nil %}
  {% for publication in site.publications %}
    {% if publication.path == selected_path %}
      {% assign selected_post = publication %}
    {% endif %}
  {% endfor %}

  {% if selected_post %}
    {% include archive-single.html post=selected_post %}
  {% else %}
    <!-- Missing selected publication: {{ selected.id }} -->
  {% endif %}
{% endfor %}
