# Prompt לבניית אתר Hana David - English Teacher

## הקדמה לפרויקט
אני צריך שתבנה לי אתר מקצועי עבור Hana David (חנה דוד), מורה לאנגלית שמתמחה בשיעורים פרטיים 1-על-1 וירטואליים למבוגרים. האתר צריך להיות **דו-לשוני מלא** (עברית + אנגלית) עם מיתוג בין-לאומי לשני השוקים.

---

## Stack טכנולוגי

### Core Technologies:
- **Framework:** Next.js 16 (App Router) - latest stable version
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Email:** Resend (for contact form)
- **Internationalization:** next-intl
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React
- **Fonts:** 
  - English: Inter (Google Fonts)
  - Hebrew: Heebo (Google Fonts)

### File Structure:
```
/app
  /[locale]
    /layout.tsx
    /page.tsx
    /about
    /services
    /process
    /contact
  /api
    /send-email (Resend integration)
/components
  /ui (reusable components)
  /sections (page sections)
  /layout (header, footer, language switcher)
/content
  /en.json
  /he.json
/lib
  /i18n.ts
  /resend.ts
/public
  /images
  /logo.png (transparent background)
```

---

## Design System

### Color Palette:
**Soft Neutral Base (עיקרי רך ונייטרלי):**
- Background: `#FAFAF8` (warm cream white)
- Surface: `#FFFFFF` (pure white)
- Text Primary: `#2D2D2D` (soft black)
- Text Secondary: `#6B6B6B` (medium gray)

**Light Accent Colors (צבעי אקסנט קלילים):**
- Primary Accent: `#A8C5DD` (soft pale blue)
- Secondary Accent: `#B8D4C8` (light sage green)
- Tertiary Accent: `#E8E4DF` (warm light beige)

**Borders & Dividers:**
- Light: `#E5E3DE`
- Medium: `#D4D0C8`

**Note:** הצבעים רכים ונייטרליים עם אקסנטים קלילים - לא בולטים מדי, פרופסיונלי אבל לא משעמם.

### Typography:
**English:**
- Font Family: Inter
- Headings: 600-700 weight
- Body: 400 weight
- Line height: 1.6

**Hebrew:**
- Font Family: Heebo
- RTL support with proper text alignment
- Same weight hierarchy

### Spacing System:
- Base unit: 4px
- Section padding: 80px (desktop) / 40px (mobile)
- Component spacing: 16px, 24px, 32px, 48px

---

## עיצוב ונגישות

### Design Principles:
1. **Clean & Educational** - inspired by StudyCELTA and British Council
2. **Professional but Warm** - not boring, approachable
3. **Whitespace-heavy** - breathing room between sections
4. **Mobile-first** - responsive on all devices
5. **Accessibility** - WCAG 2.1 AA compliant

### UI Components Style:
- **Buttons:** Rounded corners (8px), subtle shadow on hover
- **Cards:** White background, soft shadow, 12px border radius
- **Inputs:** Clean borders, focus states with accent color
- **Images:** Rounded corners (16px for hero, 8px for cards)

---

## מבנה האתר - Pages & Sections

### 1. Home Page (`/`)

**Hero Section:**
- Large heading: "Personalized English Learning, Just For You" / "לימוד אנגלית אישי, במיוחד בשבילך"
- Subheading: Brief value proposition
- Profile image of Hana (professional but warm)
- Primary CTA: "Schedule a Free Consultation" / "תזמנו שיחת היכרות חינם"
- Secondary CTA: "Learn About My Approach" / "גלו את השיטה שלי"

**Value Propositions (3 Cards):**
1. **1-on-1 Personalized Learning** / **למידה אישית מותאמת**
   - Icon: User focus
   - Text: Custom learning plan for each student
   
2. **Virtual Convenience** / **נוחות וירטואלית**
   - Icon: Video
   - Text: Learn from anywhere, flexible scheduling
   
3. **Real-World English** / **אנגלית לשימוש יומיומי**
   - Icon: Globe
   - Text: Practical, relevant lessons

**Who I Help (Target Audiences):**
Grid of 4 cards:
1. **Business Professionals** / **אנשי עסקים**
   - Icon: Briefcase
   - Brief description
   
2. **Travel Enthusiasts** / **טיילים**
   - Icon: Plane
   - Brief description
   
3. **Test Preparation** / **הכנה לפסיכומטרי**
   - Icon: GraduationCap
   - Brief description
   
4. **General Improvement** / **שיפור כללי**
   - Icon: TrendingUp
   - Brief description

**CTA Section:**
- "Ready to Start Your English Journey?" / "מוכנים להתחיל את המסע שלכם באנגלית?"
- Button to contact page

---

### 2. About Page (`/about`)

**Header:**
- Title: "About Hana" / "אודות חנה"
- Subtitle: "Your Guide to Confident English" / "המדריכה שלכם לאנגלית בטוחה"

**My Story Section:**
Use the content from CONTENT.md file

**Qualifications Box:**
- CELTA Certified (2025)
- BA in History & Languages, University of Memphis
- Native English Speaker (US)
- 5+ years teaching experience

**Teaching Philosophy:**
Short paragraph about personalized learning approach

---

### 3. Services Page (`/services`)

**Header:**
- Title: "How I Can Help" / "איך אני יכולה לעזור"
- Subtitle: "Tailored English Instruction for Your Goals" / "הוראת אנגלית מותאמת ליעדים שלכם"

**Service Categories (Detailed Cards):**

**1. Business English** / **אנגלית עסקית**
- Icon: Briefcase
- What you'll learn:
  - Professional email writing
  - Presentations and meetings
  - Negotiations and networking
  - Industry-specific vocabulary
- Ideal for: Professionals, managers, entrepreneurs

**2. Travel English** / **אנגלית לטיולים**
- Icon: Plane
- What you'll learn:
  - Conversational skills
  - Booking accommodations and transport
  - Ordering at restaurants
  - Asking for directions and help
- Ideal for: Travelers planning international trips

**3. Test Preparation (Psychometric)** / **הכנה לפסיכומטרי**
- Icon: GraduationCap
- What you'll learn:
  - Reading comprehension strategies
  - Academic vocabulary
  - Test-taking techniques
  - Time management
- Ideal for: Students preparing for university entrance

**4. General English Improvement** / **שיפור אנגלית כללי**
- Icon: BookOpen
- What you'll learn:
  - Grammar fundamentals
  - Vocabulary expansion
  - Speaking fluency
  - Reading and writing skills
- Ideal for: Anyone wanting to strengthen their English

**What Makes My Approach Different:**
- ✓ 100% personalized curriculum
- ✓ Flexible scheduling (virtual lessons)
- ✓ Real-world, practical materials
- ✓ Ongoing progress tracking
- ✓ Supportive, encouraging environment

---

### 4. Process Page (`/process`)

**Header:**
- Title: "How We'll Work Together" / "איך נעבוד ביחד"
- Subtitle: "A Clear Path to English Confidence" / "מסלול ברור לביטחון באנגלית"

**Timeline/Steps (Visual with numbers):**

**Step 1: Free Consultation** / **שיחת היכרות חינם**
- 20-30 minute video call
- Discuss your goals and needs
- Get to know each other
- No commitment required

**Step 2: Level Assessment** / **הערכת רמה**
- Evaluate your current English level
- Identify strengths and areas for improvement
- Understand your learning style

**Step 3: Custom Learning Plan** / **תוכנית לימודים אישית**
- Design a personalized curriculum
- Set clear, achievable goals
- Choose lesson frequency and schedule

**Step 4: Begin Learning** / **התחלת הלמידה**
- Weekly virtual lessons (or your preferred frequency)
- Interactive, engaging sessions
- Homework and practice materials

**Step 5: Track Progress** / **מעקב והתקדמות**
- Regular feedback and adjustments
- Celebrate milestones
- Adapt the plan as you grow

**My Expectations from Students:**
(Important section - warm but clear tone)

"Learning a language is a partnership. To get the most from our lessons, I ask that you:"

- ✓ Come prepared and ready to engage
- ✓ Complete practice exercises between lessons
- ✓ Be patient with yourself - progress takes time
- ✓ Communicate openly about what's working and what isn't
- ✓ Practice English outside of our lessons when possible

"I'm here to guide, support, and challenge you - but your commitment is what makes real progress possible."

---

### 5. Contact Page (`/contact`)

**Header:**
- Title: "Let's Start Your English Journey" / "בואו נתחיל את המסע שלכם"
- Subtitle: "Schedule a free consultation today" / "תזמנו שיחת היכרות חינם היום"

**Contact Form:**
Fields:
- Name / שם
- Email / אימייל
- Phone / טלפון
- Preferred Language / שפה מועדפת (English/עברית)
- Message / הודעה
  - Placeholder: "Tell me about your English goals..." / "ספרו לי על יעדי האנגלית שלכם..."
- Submit button: "Send Message" / "שלחו הודעה"

**Alternative Contact:**
- Email: channa@example.com
- WhatsApp: +972-XX-XXX-XXXX

**Call-to-Action Box:**
"Prefer to talk first? Schedule a free 20-minute video call"
- Link to Calendly (if available)

---

## Components לבניה

### Header/Navigation:
```typescript
<Header>
  - Logo (text-based: "Hana David | English Teacher" or logo.png)
  - Navigation: Home, About, Services, Process, Contact
  - Language Switcher (EN/HE toggle)
  - Mobile: Hamburger menu
</Header>
```

### Footer:
```typescript
<Footer>
  - Quick links: All pages
  - Contact info
  - Social media icons (if applicable)
  - Copyright
  - Language switcher
</Footer>
```

### Reusable Components:
1. **Button** - Primary, Secondary, Outline variants
2. **Card** - For services, testimonials, info boxes
3. **Section** - Consistent padding and max-width wrapper
4. **ContactForm** - With validation
5. **LanguageSwitcher** - Toggle between EN/HE with flag/text
6. **IconCard** - Icon + Title + Description
7. **Timeline** - For process page
8. **Hero** - Large header sections

---

## Internationalization Setup

### next-intl Configuration:

**File: `/content/en.json`**
```json
{
  "nav": {
    "home": "Home",
    "about": "About",
    "services": "Services",
    "process": "Process",
    "contact": "Contact"
  },
  "home": {
    "hero": {
      "title": "Personalized English Learning, Just For You",
      "subtitle": "One-on-one virtual lessons tailored to your goals",
      "cta_primary": "Schedule Free Consultation",
      "cta_secondary": "Learn My Approach"
    }
  }
}
```

**File: `/content/he.json`**
```json
{
  "nav": {
    "home": "בית",
    "about": "אודות",
    "services": "שירותים",
    "process": "תהליך",
    "contact": "צור קשר"
  },
  "home": {
    "hero": {
      "title": "לימוד אנגלית אישי, במיוחד בשבילך",
      "subtitle": "שיעורים וירטואליים אחד על אחד המותאמים ליעדים שלך",
      "cta_primary": "תזמנו שיחת היכרות חינם",
      "cta_secondary": "גלו את השיטה שלי"
    }
  }
}
```

### RTL Support:
```css
[dir="rtl"] {
  /* All RTL-specific styles */
  text-align: right;
}

[dir="ltr"] {
  text-align: left;
}
```

---

## SEO & Meta Tags

### Per Page Meta:
```typescript
export const metadata = {
  title: "Hana David | English Teacher - Personalized 1-on-1 Lessons",
  description: "CELTA-certified English teacher offering personalized virtual lessons for business professionals, travelers, and test preparation.",
  keywords: "English teacher, CELTA, online English lessons, business English, travel English, Hana David"
}
```

Hebrew equivalent for each page.

---

## Performance Requirements

- Lighthouse score: 90+ on all metrics
- First Contentful Paint: < 1.5s
- Total Blocking Time: < 200ms
- Image optimization: Next.js Image component
- Font optimization: next/font

---

## דברים חשובים לזכור

1. **RTL/LTR:** כל דף צריך לתמוך במעבר חלק בין עברית לאנגלית
2. **Responsive:** Mobile-first approach
3. **Accessibility:** Semantic HTML, ARIA labels, keyboard navigation
4. **Forms:** Proper validation and error messages in both languages
5. **Images:** Placeholders for now (can add real images later)
6. **Content:** Use the content from CONTENT.md file
7. **Tone:** Professional but warm, not boring
8. **Colors:** Stick to the soft neutral + light accent palette

---

## Deliverables

אני צריך:
1. ✅ Full Next.js project ready for Vercel
2. ✅ All pages implemented with content
3. ✅ Full internationalization (EN/HE)
4. ✅ Responsive design
5. ✅ Working contact form (with basic validation)
6. ✅ Clean, documented code
7. ✅ README with setup instructions

---

## Reference Websites

1. **StudyCELTA Athens:** https://www.studycelta.com/tefl/greece/athens/celta-courses/
   - Clean educational design
   - Soft colors (blues, grays)
   - Clear navigation
   - Professional but approachable

2. **TeachingEnglish British Council:** https://www.teachingenglish.org.uk/
   - Educational style
   - Organized resources
   - Accessible design
   - Trustworthy branding

---

זהו! זה הפרומפט המלא. תתחיל לבנות את האתר לפי המפרט הזה.
