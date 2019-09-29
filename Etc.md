---
layout: page
title: Etc
submenu: false
description: 전체
---

<ul>
  {% for post in site.posts %}
      {% if post.tags contains "Etc" %}
        <li>
          <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        </li>
      {% endif %}
  {% endfor %}
</ul>