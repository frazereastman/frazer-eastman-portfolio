# Accessibility Audit & Revamp – Postgraduate Course Discovery Platform

## Overview
I led a full accessibility audit and remediation project for a large UK platform used by prospective Master's students to discover postgraduate courses. The site serves a large national audience and is widely used by both students and institutional stakeholders managing course data.

At the time of the project, the platform did not meet WCAG 2.1 AA compliance, creating usability barriers for users relying on assistive technologies.

I was responsible for the **entire audit and remediation process**, working as the sole developer and tester to identify accessibility issues, prioritise fixes, implement improvements, and communicate best practices to the wider team.

---

## The Challenge
Initial reviews revealed that the platform had accumulated a range of accessibility issues over time. These included structural HTML problems, inaccessible interactions, and visual design elements that did not meet accessibility standards.

Key issues included:

- Missing **alt text** for images delivered through a CDN-backed API  
- Incomplete **keyboard navigation support**  
- Incorrect or non-semantic HTML elements  
- **Heading hierarchy** that did not follow a logical structure  
- Colour combinations failing **WCAG contrast requirements**

Because the platform contained a large number of pages and components, these issues were repeated throughout the site and required a systematic remediation strategy.

---

## Audit Process
I began by establishing a baseline accessibility score using Google Lighthouse.

To ensure coverage beyond automated testing, I conducted a manual accessibility review aligned with WCAG 2.1 AA criteria, which included:

- Manual **keyboard navigation testing**
- **Screen reader testing**
- Semantic HTML inspection
- Contrast validation against WCAG standards
- Verification of automated Lighthouse findings

Issues were then converted into structured development tasks. I created a prioritised backlog, estimated the required effort, and organised the work in a Kanban workflow to systematically address accessibility issues across the platform.

---

## Implementation
The remediation work focused on resolving systemic accessibility problems and improving the overall robustness of the front-end implementation.

### Accessible image handling
Images were hosted through a CDN and retrieved via API calls. I updated the image retrieval logic to support accessible metadata, enabling consistent **alt text implementation across the platform**.

### Keyboard accessibility
Interactive elements were refactored to ensure they could be **fully operated using keyboard navigation**, improving access for users who cannot use a mouse.

### Semantic HTML improvements
Incorrect markup was replaced with appropriate semantic elements, improving compatibility with assistive technologies and strengthening the document structure.

### Heading hierarchy
Page layouts were updated so headings followed a **clear and sequential hierarchy**, improving navigation for screen reader users.

### Accessible colour usage
Several brand colour combinations failed WCAG contrast guidelines. I worked with the design team to adjust colour usage while maintaining brand consistency.

---

## Measurable Impact
The improvements produced immediate and measurable results.

- Accessibility scores in **Google Lighthouse** improved significantly (moving from failing to passing accessibility benchmarks)
- The platform achieved **WCAG 2.1 AA compliance**
- Core user flows became **fully keyboard navigable**
- Screen reader usability improved through better semantic markup

Beyond the technical improvements, the project also raised awareness of accessibility within the team and introduced clearer development standards for future work.

---

## Knowledge Sharing
To ensure accessibility improvements were sustained, I documented the audit findings and remediation patterns in internal documentation using Confluence.

I also ran a knowledge-sharing session with the wider team to walk through:

- The accessibility issues identified
- Implementation approaches used to fix them
- Best practices for maintaining accessible components going forward

This helped embed accessibility thinking into the development workflow rather than treating it as a one-off fix.

---

## Key Takeaways
This project significantly deepened my understanding of accessible development and its relationship to overall code quality.

Improving accessibility resulted in:

- Cleaner semantic HTML
- More predictable component behaviour
- Improved usability across devices and input methods

The experience reinforced my belief that **accessible design leads to better development practices overall**.

Following this work, I became a **go-to reference within the company for accessibility questions and implementation guidance**, and later wrote a blog post sharing my perspective on accessibility-driven development.
