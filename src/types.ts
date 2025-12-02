export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
}

// Data Context for the AI
export const PORTFOLIO_CONTEXT = `
Name: سعد فهيد (Saad Fuhaid)
Birth Info: Born 1988, Riyadh (مواليد 1988، الرياض).
Current Role: Shift Manager (مدير مناوب).
Summary: 
(AR): متخصص محترف في إدارة الأمن والسلامة وضمان الجودة، خبرة حوالي ٢٠ عام في مجال الأمن والسلامة والإدارة الأمنية، تشمل إدارة المشاريع وضمان الجودة في كبرى المشاريع الوطنية (الدرعية، البحر الأحمر، STC). خبرة في Power BI و Google Maps API.
(EN): Professional specialist in Security & Safety Management and Quality Assurance, about 20 years of experience in Security, Safety, and Security Management, including project management and quality assurance in major national projects (Diriyah, Red Sea, STC). Skilled in Power BI and Google Maps API for operations.

Experience History:
1. Shift Manager - Diriyah Gate (Traffic & Security Project) | June 2025 - Present.
2. Quality Specialist - Diriyah Gate (Traffic & Security) | July 2024 - June 2025.
3. Safety Specialist - At-Turaif Historical District (Diriyah) | May 2024 - July 2024.
4. Team Leader - Red Sea Global | April 2024 - May 2024.
5. Shift Manager - Saif Security (STC HQ) | Jan 2021 - April 2024.
6. Security & Safety Supervisor - Aqalat (STC) | Feb 2018 - Jan 2021.
7. Control Room Supervisor - Moshnan (MOFA Housing) | Sep 2016 - Jan 2019.
8. Assistant Site Manager - Wardat Al-Salhiya | July 2011 - Sep 2016.
9. Admin Assistant - Amha | July 2006 - June 2011.

Key Projects:
- Power BI Dashboard for security reports.
- Google Maps API for patrol distribution.
- Employee Performance Evaluation Web Page.
- Digital Asset Management System (Checklists).
- Employee Services Portal.
- Security Plans & SOPs.
- Training Materials (Security, Safety, Computer skills).

Certifications:
- Security Risk Management (Regional & National).
- PMP.
- ISO (9001, 14001, 45001, 31000).
- TOT (IBCT).
- OSHA.
- G4S Certified Security Officer.
- Crisis Management.
- Advanced Excel & Data Analysis.
- And many others (58+ certifications).

Contact:
- Phone: 0571441777
- Email: sa888e@gmail.com
- LinkedIn: https://www.linkedin.com/in/s3dsu
- Location: Riyadh, Saudi Arabia.
`;