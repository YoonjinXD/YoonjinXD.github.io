---
layout: page
title: projects
permalink: /projects/
description:
nav: true
nav_order: 2
---

<!-- pages/projects.md: Notion-style gallery. Each project can set `icon` (emoji), `img` (cover) and `tags`. -->

{% assign sorted_projects = site.projects | sort: "importance" %}

<div class="gallery">
  {% for project in sorted_projects %}
    {% include projects_gallery.liquid index=forloop.index0 %}
  {% endfor %}
</div>
