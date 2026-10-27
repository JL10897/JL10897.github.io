---
layout: page
permalink: /cv/
title: CV
description:
nav: true
nav_order: 3
---

{% assign cv_pdf = '/assets/pdf/jialin_li_cv.pdf' | relative_url %}

<object data="{{ cv_pdf }}#navpanes=0&view=FitH" type="application/pdf" width="100%" style="height: 90vh; border: 1px solid var(--global-divider-color);">
  <p>This browser cannot show the PDF here. <a href="{{ cv_pdf }}">Open the CV</a>.</p>
</object>
