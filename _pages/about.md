---
layout: about
title: About
permalink: /
subtitle: PhD Student, <a href='https://cs.nyu.edu/'>Computer Science</a>, New York University. Advised by <a href='https://nyuad.nyu.edu/en/academics/divisions/science/faculty/hanan-salam.html'>Hanan Salam</a> at the <a href='https://smartlab-nyu.com/'>SMART Lab</a>.

profile:
  align: right
  image: prof_pic.jpg
  image_circular: true
  more_info: >
    <p>jialin.li [at] nyu.edu</p>

selected_papers: true
social: true

announcements:
  enabled: true
  scrollable: true
  limit: 5

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
---

I am a third-year PhD student in Computer Science at [New York University](https://cs.nyu.edu/), advised by [Hanan Salam](https://nyuad.nyu.edu/en/academics/divisions/science/faculty/hanan-salam.html) at the [SMART (Social Machines and Robotics) Lab](https://smartlab-nyu.com/). I am supported by the NYU Abu Dhabi Global PhD Fellowship. Before joining NYU, I received my BS in Data Science from [NYU Shanghai](https://shanghai.nyu.edu/) in 2023.

**AI for everyone is AI for no one.** I work on making large language models *people-aware*, designing agents that attend to a user's preferences and affect across their interaction history, and adapt to them over time. While today's models are increasingly capable, generic alignment produces averaged behavior that still struggles to accommodate how each person actually wants to be assisted. So I study what kind of interaction paradigm allows highly functional agents and full human agency to coexist. My goal is to rethink and design personalized interactions where people can ultimately cultivate a grounded partnership with AI through the very process of using and shaping it.

My research realizes this vision across three core threads.

- **Modeling individual differences in affect and personality.** To become people-aware, an agent first needs to attend to the underlying human signals that vary from person to person. I model what makes each user distinct across affect, personality, and engagement from multimodal behavioral cues. This includes our work on personality-aware engagement in online learning ([*MOPSE*, ACM MM 2025 MRAC](https://dl.acm.org/doi/10.1145/3746270.3760234)), per-user affect prediction with data augmentation ([*ACII 2025*, Oral](https://drive.google.com/file/d/1hnG0q4Wspp5A1FVEk79y-_wmOvoFONfN/view?usp=drive_link)), and our foundational [survey on personalized affective computing](https://arxiv.org/abs/2304.00377).

- **Defining, adapting, and maintaining interaction preferences over time.** Rather than only modeling what content a user likes, I introduced the concept of interaction preferences to capture how a person wants to be assisted, requiring agents to dynamically understand and adapt to users during collaboration ([*PrefIx*, ACL Findings 2026](https://aclanthology.org/2026.findings-acl.1506/)). Because a preference only helps over the long run if an agent recalls it in the right situation and updates it as the user shifts, we further study how long-horizon memory systems handle interaction preferences across work and personal contexts ([*MemPABench*](https://mempabench.com/), under review). We find that current memories struggle to retrieve interaction preferences over task events, keep them within the right context boundary, and override the model's default interaction habits.

- **Evolving models and harnesses from user feedback (ongoing).** Motivated by how hard it is to shift a model's default behavior, my ongoing work explores how user feedback during interaction can directly drive the next round of model alignment and harness optimization. Instead of forcing everyone to adapt to a static, generic setup, I study how an agent's harness can self-evolve with each user, giving people full agency to shape their AI and cultivate a grounded partnership through everyday use.
