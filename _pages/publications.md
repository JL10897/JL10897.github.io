---
layout: page
permalink: /publications/
title: Publications
description: In reverse chronological order. <sup>*</sup> denotes equal contribution.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

{% include bib_search.liquid %}

## First Author

<div class="publications">

{% bibliography --query @*[first_author=true] %}

</div>

## Co-authored

<div class="publications">

{% bibliography --query @*[coauthor=true] %}

</div>

&nbsp;

For a full list, see my [Google Scholar](#) <!-- TODO: add Scholar URL once available -->.
