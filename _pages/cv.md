---
layout: page
permalink: /cv/
title: CV
description:
nav: true
nav_order: 3
---

{% assign cv_pdf = '/assets/pdf/jialin_li_cv.pdf' | relative_url %}

<p>
  <a href="{{ cv_pdf }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf"></i> Download PDF</a>
</p>

<object data="{{ cv_pdf }}" type="application/pdf" width="100%" style="height: 90vh; border: 1px solid var(--global-divider-color);">
  <p>This browser cannot show the PDF here. <a href="{{ cv_pdf }}">Open the CV</a>.</p>
</object>
