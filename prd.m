# PRD — AI UNIPOD Web Platform (Phase 1)

## 1) Background

Students, researchers, and faculty at the University of Lagos currently lack a transparent, accessible system to discover, book, and utilize innovation facilities or submit project proposals remotely. This fragmentation leads to underutilized resources, missed collaboration opportunities, and barriers for off-campus contributors. This PRD addresses the Charter's commitment to "Accessible Innovation" and "Transparent Systems" by creating a unified web platform that serves Chioma (the Student Innovator who needs dedicated workspace and equipment), Dr. Fashola (the Remote Researcher who wants to submit proposals from anywhere), and Prof. Okonkwo (the Faculty Coordinator who needs visibility into usage patterns). With UNDP support and UNILAG's growing innovation mandate, now is the ideal time to digitize and democratize access to AI UNIPOD's physical and intellectual resources.

## 2) Objectives & Desired Outcomes

- **Increased Booking Utilization:** Students and researchers confidently book workstations, meeting rooms, robotics labs, and other specialized spaces because they can see real-time availability, understand what each room offers, and complete reservations in under 3 minutes on mobile or desktop—resulting in higher occupancy rates and fewer abandoned bookings.
- **Remote Engagement Growth:** Alumni, visiting researchers, and students studying abroad submit project proposals, research datasets, and innovation ideas through the platform, expanding UNILAG's innovation ecosystem beyond Lagos and reducing geographic barriers to participation.
- **Operational Transparency:** Faculty coordinators and administrators access dashboards showing facility usage, active projects, and user demographics, enabling data-driven decisions about resource allocation, equipment purchases, and mentorship matching.
- **Cultural Belonging:** Users across all personas report feeling that the platform "feels like UNILAG"—warm, scholarly, and rooted in African heritage—not a generic tech product, which strengthens institutional pride and user retention.
- **Non-goals / Boundaries:** This phase does not include payment processing for paid bookings (assumed free or handled offline), AI-driven personalization, or external venue management—those are future enhancements.

## 3) Users & Stories

- **Primary Persona:** Chioma Adebayo (Student Innovator)
  - Story A: As Chioma, I want to browse all available rooms (workstation, creators room, robotics lab, etc.) with photos and descriptions, so I can choose the right space for my team's hardware prototyping session.
  - Story B: As Chioma, I want to see a visual calendar or timeline showing real-time availability and book a recurring weekly slot, so I don't waste time emailing administrators or showing up to a full room.
  - Story C: As Chioma, I want to submit my edtech project proposal with a pitch deck and team details through a clear form, so I can get official UNILAG recognition and potential mentorship without needing to visit an office.
  - Story D: As Chioma, I want to see success stories and active projects from other students on the homepage, so I feel inspired and understand what's possible at AI UNIPOD.

- **Secondary Persona:** Dr. Olumide Fashola (Remote Researcher)
  - Story E: As Dr. Fashola, I want to submit a detailed research proposal with attachments (PDFs, datasets) from Abuja or while traveling, so I can maintain my UNILAG affiliation and access collaboration opportunities without being physically present.
  - Story F: As Dr. Fashola, I want to check booking availability weeks in advance and reserve a conference room for a one-day visit, so I can coordinate with faculty and students during my rare trips to Lagos.
  - Story G: As Dr. Fashola, I want to track the status of my submitted proposal (pending review, approved, needs revision), so I know when to follow up or adjust my research plans.

- **Tertiary Persona:** Prof. Amaka Okonkwo (Faculty Coordinator)
  - Story H: As Prof. Okonkwo, I want to view a dashboard summarizing booking patterns, no-show rates, and peak usage times, so I can justify budget requests and optimize scheduling policies.
  - Story I: As Prof. Okonkwo, I want to review incoming project submissions, leave feedback, and approve or request revisions directly in the platform, so communication is centralized and students receive timely responses.

## 4) Key Feature

- **Facility Discovery & Information Hub:** A visually-rich "Facilities" section showcasing each room type (workstation, meeting room, conference room, creators room, printing room, robotics lab, design room) with high-quality photos, equipment lists, capacity details, and recommended use cases—eliminating guesswork and building user confidence before booking.
- **Real-Time Booking System:** An intuitive interface (timeline or calendar view) where users select a facility, choose date/time, fill minimal fields (name, purpose, team size), and receive instant confirmation with calendar integration—no manual approval for standard bookings, enabling self-service efficiency.
- **Remote Project Submission Portal:** A dedicated "Submit Project" flow with structured fields (title, description, category, team members, resource needs) and file upload support (PDFs, slide decks, images), providing acknowledgment emails and status tracking so remote users stay connected to UNILAG's innovation ecosystem.
- **Innovation Showcase (Community Hub):** A homepage or "Projects" section featuring curated success stories, active initiatives, team profiles, and upcoming events (workshops, demo days) with visual storytelling—fostering inspiration, peer recognition, and network effects among users.
- **Admin Dashboard (Faculty Tools):** A backend interface for Prof. Okonkwo and coordinators to monitor bookings, review project submissions with inline commenting, generate usage reports, and flag maintenance issues—ensuring operational oversight and equitable access.

## 5) Key Flow

- **Example:** First-Time Student Booking a Workstation
  - **Trigger:** Chioma visits the AI UNIPOD website after hearing about it in class and wants to reserve a space for her team's sprint meeting.
  - **Path:** She navigates to "Book a Space," browses room options with photos, selects "Workstation" after reading it has power outlets and whiteboards, clicks a time slot on the visual calendar (Thursday 2 PM), fills a 3-field form (name, email, purpose), and submits.
  - **Result:** Chioma receives an on-screen confirmation and email with booking details, calendar invite, and directions to the facility—she's ready to show up with confidence on Thursday.

- **Example:** Remote Researcher Submitting a Proposal
  - **Trigger:** Dr. Fashola is in Abuja working on a climate research project and wants to propose a collaboration with UNILAG students and access robotics lab resources. | **Path:** He clicks "Submit Project" on the homepage, fills out a form (project title, abstract, funding status, team composition), uploads a PDF proposal and dataset, and clicks submit; the system sends him a confirmation email and assigns a tracking ID. | **Result:** Dr. Fashola sees a "Submitted Successfully" page with next steps, receives weekly status emails, and can log in later to check if his proposal is under review, approved, or needs revisions.

- **Example:** Faculty Reviewing and Approving a Project
  - **Trigger:** Prof. Okonkwo logs into the admin dashboard on Monday morning to review weekend submissions. | **Path:** She sees 5 new project proposals in a list view, clicks Chioma's edtech project, reads the description and pitch deck preview, leaves an inline comment ("Great idea—please specify your target grade levels"), and clicks "Request Revision"; the system emails Chioma with the feedback. | **Result:** Prof. Okonkwo's dashboard updates to show 4 pending, 1 awaiting revision; Chioma receives actionable feedback within 24 hours and can resubmit quickly.

- **Example:** Exploring Facilities Before Deciding
  - **Trigger:** A new graduate student hears about AI UNIPOD but doesn't know what's available. | **Path:** They visit the website, click "About" or "Facilities," scroll through a card-based layout showing the Robotics Lab (with Arduino kits, soldering stations), Design Room (Adobe Suite, 3D printers), and Creators Room (podcast equipment, video editing), each with a 360° photo or gallery. | **Result:** The student understands AI UNIPOD's full capabilities, decides the Design Room fits their animation project, and proceeds to book a slot with confidence.

## 6) Competitive Analysis

- **Landscape (who is solving this problem):**
  - **External Co-working Spaces (e.g., CcHub Lagos, Yaba Tech Hub):** Serve startups and freelancers with hot desks, meeting rooms, and event space.
  - **University Library Systems (e.g., UNILAG Main Library):** Provide study spaces and some equipment but lack booking systems or innovation-specific facilities.
  - **DIY Solutions (e.g., WhatsApp Groups, Google Sheets):** Students and faculty coordinate bookings manually through chat groups and shared spreadsheets.
  - **International Platforms (e.g., Calendly, Skedda):** Generic scheduling tools used by some organizations for room booking.
  - **Manual/Do Nothing:** Students show up hoping a space is available, or abandon projects due to access barriers.

- **Value Thesis (each player's proposition):**
  - **CcHub/Yaba Hubs:** "Professional startup ecosystem with networking events and investor access"—but costs ₦30,000–₦50,000/month, excludes students without funding, and lacks academic credibility.
  - **UNILAG Library:** "Free, on-campus study space with WiFi"—but no specialized equipment, no booking system (first-come, first-served chaos), and limited to daytime hours.
  - **WhatsApp/Google Sheets:** "Flexible, no-cost coordination"—but no accountability, frequent double-bookings, and no project submission infrastructure.
  - **Calendly/Skedda:** "Streamlined scheduling with automation"—but generic UX feels impersonal, no cultural identity, and requires technical setup by admins unfamiliar with university workflows.

- **Strengths / Weaknesses (experience pros/cons):**
  - **CcHub Strengths:** Polished, modern UX; strong community vibe; reliable infrastructure. **Weaknesses:** Cost prohibitive for students; requires commute outside campus; no academic affiliation limits grant eligibility.
  - **Library Strengths:** Free; familiar location; trusted institution. **Weaknesses:** Overcrowded during exams; no visibility into availability; lacks innovation-specific tools (3D printers, robotics kits); no remote access for submissions.
  - **WhatsApp/Sheets Strengths:** Zero learning curve; flexible communication. **Weaknesses:** No data persistence; prone to miscommunication and double-bookings; excludes remote users; no status tracking for projects.
  - **Generic Platforms Strengths:** Feature-rich; scalable; well-tested. **Weaknesses:** Sterile, corporate aesthetic alienates academic users; no integration with university identity (UNILAG branding, cultural motifs); admins struggle with customization.

- **Our Differentiators (our unique points):**
  AI UNIPOD's web platform uniquely combines **zero-cost access** (no membership fees, open to all UNILAG community members) with **institutional legitimacy** (official university backing strengthens grant applications and mentorship connections) and **cultural grounding** (warm, Afrocentric design with UNILAG maroon/gold and UNDP blue reinforces pride and belonging). Unlike generic scheduling tools, we integrate **project submission and tracking** alongside booking, creating a holistic innovation ecosystem rather than just a calendar. Our Academic Minimalist aesthetic—warm off-white backgrounds, modern serif headers, watermarked Adinkra symbols—signals both scholarly rigor and approachable warmth, distinguishing us from sterile corporate platforms or chaotic DIY solutions. We prioritize **mobile-first accessibility** (students book on phones between classes) and **remote inclusion** (Dr. Fashola submits proposals from Abuja), addressing the full spectrum of innovation participation, not just physical space logistics.

- **Switching Costs & Risks (migration costs and risks):**
  Users accustomed to WhatsApp coordination may initially distrust a new platform ("Will my booking really be honored?") until faculty champions demonstrate reliability. Students comfortable with the library's walk-in model may need gentle nudging (orientation sessions, peer testimonials) to adopt booking habits. Remote users like Dr. Fashola face minimal switching cost (submitting online vs. emailing PDFs to multiple people) but expect clear feedback loops—if proposals disappear into a black hole, they'll revert to informal channels. Faculty like Prof. Okonkwo may resist learning a new admin tool unless onboarding is seamless and time-saving benefits are immediate. Mitigations: phased rollout with in-person demos, clear "How It Works" guides, and early wins (showcase successful bookings and approved projects prominently).

- **Notes (reference links):**
  - CcHub Lagos website and membership tiers: https://cchubnigeria.com
  - University booking system case studies: MIT Maker Workbench, Stanford d.school reservation systems
  - Academic design inspiration: UNILAG official website color palette, UNDP brand guidelines
  - Student feedback from pilot WhatsApp group interviews (internal document, TBD link)
