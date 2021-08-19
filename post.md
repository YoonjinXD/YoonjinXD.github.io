---
layout: page
title: Posts
submenu: false
description: 전체
---

<br>

<div class="posts">
  {% for post in site.posts %}
  <h3 class="post-title">
    <a href="{{ post.url }}">
      {{ post.title }}
    </a>
  </h3>
  <p class="description">{{ post.date | date_to_string }}</p>
  {% endfor %}
</div>