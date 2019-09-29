---
layout: page
title: Posts
submenu: false
description: 전체
---

<ul>
  {% for post in site.posts %}
      {% if post.tags contains "DeepLearning" %}
        <li>
          <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        </li>
      {% endif %}
  {% endfor %}
</ul>