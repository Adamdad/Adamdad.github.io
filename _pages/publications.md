---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: false
---

<!-- {% if author.googlescholar %} -->
  
<!-- {% endif %} -->
<style type="text/css">
  body{
  font-size: 12pt;
}
</style>

{% include base_path %}
You can also find my papers on <a href="https://scholar.google.com/citations?user=1n2OPtwAAAAJ">Google Scholar</a>.

-----------

{% capture written_year %}'None'{% endcapture %}
{% for post in site.publications reversed %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% if year != written_year %}
## {{ year }}
    {% capture written_year %}{{ year }}{% endcapture %}
  {% endif %}
  {% include archive-single.html %}
{% endfor %}


