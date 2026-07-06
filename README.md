# Xingyi Yang Personal Website

This is a small Jekyll site for <https://adamdad.github.io>. The site uses a custom minimal academic layout instead of Minimal Mistakes.

## Main Content

- Home: `_pages/about.md`
- Publications: `_pages/publications.md`
- Experience: `_pages/experience.md`
- Openings: `opening.html`
- Publication entries: `_publications/*.md`

The publications page intentionally keeps the existing Jekyll collection pattern:

```liquid
{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
```

Each publication is a Markdown file in `_publications/` with front matter for title, venue, citation, date, and teaser image. Markdown links in the publication body, such as `[paper](...)` or `[code](...)`, are rendered in the publication list by `_includes/archive-single.html`.

## Template Structure

- `_layouts/default.html`: global shell, navigation, footer
- `_layouts/single.html`: regular content pages
- `_layouts/archive.html`: list/archive pages
- `_includes/head.html`: minimal metadata and CSS link
- `_includes/archive-single.html`: publication list item renderer
- `assets/css/main.scss`: the main stylesheet

The legacy `_sass/` and many old includes remain in the repository for now, but the active pages above no longer depend on the Minimal Mistakes theme.

## Local Development

Install dependencies:

```bash
bundle install
```

Build the site:

```bash
bundle exec jekyll build
```

Serve locally:

```bash
bundle exec jekyll serve
```

Then open <http://localhost:4000>.
