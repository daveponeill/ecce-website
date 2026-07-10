import type { Metadata } from 'next'
import PageHeader from '@/components/sections/PageHeader'
import PubSection from '@/components/sections/PubSection'
import { type PublicationItemProps } from '@/components/primitives/PublicationItem'

export const metadata: Metadata = { title: 'Publications — ECCE' }

const engineeringEducationPubs: PublicationItemProps[] = [
  {
    authors: 'Tabora, J., Manion, K., and <strong>O\'Neill, D.P.</strong>',
    title: 'Reliability of PERMA-V(N): A Qualitative Coding Framework for Capturing Well-being Dimensions in Engineering Doctoral Students.',
    venue: '133rd ASEE Annual Conference, Charlotte NC [accepted]',
    year: 2026,
  },
  {
    authors: 'Tabora, J., Manion, K., and <strong>O\'Neill, D.P.</strong>',
    title: 'Similar on Paper, Different in Practice: Well-being and Identity Divergence During BME Doctoral Qualifying Examinations.',
    venue: '133rd ASEE Annual Conference, Charlotte NC [accepted]',
    year: 2026,
  },
  {
    authors: 'Manion, K., Tabora, J., and <strong>O\'Neill, D.P.</strong>',
    title: 'Comparing Broad and Focused Interview Prompts for Biomedical Engineering Doctoral Students Discussing Well-being and Identity.',
    venue: '133rd ASEE Annual Conference, Charlotte NC [accepted]',
    year: 2026,
  },
  {
    authors: 'Cisneros, E. and <strong>O\'Neill, D.P.</strong>',
    title: 'Comparing Implicit and Explicit Measurements of Engineering and Research Science Identities in Engineering Doctoral Students.',
    venue: '132nd ASEE Annual Conference, Montreal',
    year: 2025,
  },
  {
    authors: '<strong>O\'Neill, D.P.</strong> and Lescott, C.',
    title: 'Work in Progress: Mapping Faculty Opinions of Student Skills Development in a Large-scale First-Year Design Program.',
    venue: '132nd ASEE Annual Conference, Montreal',
    year: 2025,
  },
  {
    authors: 'Tabora, J., and <strong>O\'Neill, D.P.</strong>',
    title: 'Work in Progress: Exploring Qualifying Exam Experiences in Engineering Doctoral Students using Well-Being Constructs.',
    venue: '132nd ASEE Annual Conference, Montreal',
    year: 2025,
  },
  {
    authors: 'Manion, K., Denzler, J., Strong, T.M., and <strong>O\'Neill, D.P.</strong>',
    title: 'Post-Pandemic Motivations and Barriers for Office Hours Attendance in Biomedical Engineering.',
    venue: '132nd ASEE Annual Conference, Montreal',
    year: 2025,
    award: 'ASEE BED (Biomedical Engineering Division) Best DEI Paper Award',
  },
  {
    authors: '<strong>O\'Neill, D.P.</strong>',
    title: 'Testing Aids and Their Impacts in Engineering Education: An Early Look at a Scoping Review.',
    venue: '2024 IEEE Frontiers in Education Conference (FIE), Washington DC',
    year: 2024,
  },
  {
    authors: 'Ankeny, C.J., <strong>O\'Neill, D.P.</strong>, Gentry, K., Eshun, P.',
    title: 'Effectiveness of Inclusive, Reflective Teaching Practices on Problem Solving Proficiency.',
    venue: '131st ASEE Annual Conference, Portland',
    year: 2024,
  },
  {
    authors: 'Schafer, E.A. and <strong>O\'Neill, D.P.</strong>',
    title: 'Work-in-Progress: Improving Student–Instructor Relationships and Help-seeking through Office Hours.',
    venue: '130th ASEE Annual Conference, Baltimore',
    year: 2023,
    award: 'Best of Works-in-Progress Finalist',
  },
  {
    authors: 'Ankeny, C.J., Gentry, K., <strong>O\'Neill, D.P.</strong>, Eshun, P.',
    title: 'Work-in-Progress: Can in-class peer reviews of written assignments improve problem solving and scientific writing in a standards-based, sophomore laboratory course?',
    venue: '130th ASEE Annual Conference, Baltimore',
    year: 2023,
    award: 'Best of Works-in-Progress Finalist',
  },
  {
    authors: 'Ankeny, C.J., Adkins, A., <strong>O\'Neill, D.P.</strong>',
    title: 'Impact of Two Reflective Practices in an Engineering Laboratory Course using Standards-based Grading.',
    venue: '129th ASEE Annual Conference, Minneapolis',
    year: 2022,
  },
  {
    authors: '<strong>O\'Neill, D.P.</strong>',
    title: 'Redesign of a BME Lab Class to Maintain Hands-on Experimentation Despite Remote Learning Constraints.',
    venue: 'Biomedical Engineering Education, 1: 229–235',
    year: 2021,
  },
  {
    authors: 'Adkins, A., Ankeny, C.J., <strong>O\'Neill, D.P.</strong>',
    title: 'Work-in-progress: Effectiveness of different reflection approaches for improving mastery in an engineering laboratory course.',
    venue: '128th ASEE Annual Conference, Online',
    year: 2021,
  },
  {
    authors: 'Ankeny, C.J., <strong>O\'Neill, D.P.</strong>, Beckmann, L.',
    title: 'Work-in-progress: Comparison of a standards-based assessment to a traditional, summative rubric in a biomedical engineering laboratory.',
    venue: '127th ASEE Annual Conference, Online',
    year: 2020,
  },
  {
    authors: '<strong>O\'Neill, D.P.</strong>, Ankeny, C.J.',
    title: 'Work in progress: Aligning and assessing learning objectives for a biomedical engineering course sequence using standards-based grading within a learning management system.',
    venue: '126th ASEE Annual Conference, Tampa',
    year: 2019,
    award: 'Best of Works-in-Progress Finalist',
  },
]

const otherPubs: PublicationItemProps[] = [
  {
    authors: 'Curtis, M.K., McGing, J.J., Stubbs, B.J., Ball, V., Cochlin, L.E., <strong>O\'Neill, D.P.</strong>, Laustsen, C., Cole, M.A., Robbins, P.A., Tyler, D.J., and Miller, J.J.',
    title: 'Hyperpolarized ¹³C-MRS can quantify lactate production and oxidative PDH flux in murine skeletal muscle during exercise.',
    venue: 'NMR in Biomedicine, 38(5):e70020',
    year: 2025,
  },
  {
    authors: 'Maldonado, C., Wang, G., Faruquee, S., Huff, G., Dean, J., Brown, K., Buchsbaum, W., Yadav, P., and <strong>O\'Neill, D.</strong>',
    title: 'A Novel Abdominal Phantom with Deformable Organs.',
    venue: 'American Association of Physicists in Medicine, Los Angeles',
    year: 2024,
  },
  {
    authors: 'Mountain, J.E., Santer, P., <strong>O\'Neill, D.P.</strong>, Smith, N.M.J., Ciaffoni, L., Couper, J.H., Ritchie, G.A.D., Hancock, G., Whiteley, J.P., and Robbins, P.A.',
    title: 'Potential for non-invasive assessment of lung inhomogeneity using highly precise, highly time-resolved, measurements of gas exchange.',
    venue: 'Journal of Applied Physiology, 124(3): 615–631',
    year: 2018,
  },
  {
    authors: '<strong>O\'Neill, D.P.</strong> and Robbins, P.A.',
    title: 'A mechanistic physicochemical model of carbon dioxide transport in blood.',
    venue: 'Journal of Applied Physiology, 122: 283–295',
    year: 2017,
  },
  {
    authors: 'Robbins, P.A., Mountain, J.E., <strong>O\'Neill, D.P.</strong>, Ciaffoni, L., Couper, J.H., Whiteley, J.P., Hancock, G., Ritchie, G.A.D.',
    title: 'Measuring lung inhomogeneity in early chronic lung disease.',
    venue: 'European Respiratory Journal, 48: 615–631',
    year: 2016,
  },
  {
    authors: '<strong>O\'Neill, D.P.</strong>*, Ciaffoni, L.*, Couper, J., Ritchie, G.A.D., Hancock, G., and Robbins, P.A.',
    title: 'In-airway molecular flow sensing: A new technology for continuous, non-invasive monitoring of oxygen consumption in critical care. (*equal contribution)',
    venue: 'Science Translational Medicine, 2(8): e1600560',
    year: 2016,
  },
  {
    authors: 'Nickol, A.H., Frise, M.C., Cheng, H.Y., et al., <strong>O\'Neill, D.P.</strong>, et al., Robbins, P.A.',
    title: 'A cross-sectional study of the prevalence and associations of iron deficiency in a cohort of patients with chronic obstructive pulmonary disease.',
    venue: 'BMJ Open, 5:e007911',
    year: 2015,
  },
  {
    authors: 'Orlowski, P., <strong>O\'Neill, D.</strong>, Grau, G., Ventikos, V., and Payne, S.',
    title: 'Modelling of the physiological response of the brain to ischaemic stroke.',
    venue: 'Interface Focus, 3: 20120079',
    year: 2013,
  },
  {
    authors: '<strong>O\'Neill, D.P.</strong>, Peng, T., Stiegler, P., Mayrhauser, U., Koestenbauer, S., Tscheliessnigg, K. and Payne, S.J.',
    title: 'A three-state mathematical model of hyperthermic cell death.',
    venue: 'Annals of Biomedical Engineering, 39: 570–579',
    year: 2011,
  },
  {
    authors: 'Payne, S.J., Flanagan, R., Pollari, M., Alhonnoro, A., Bost, C., <strong>O\'Neill, D.P.</strong>, Peng, T., and Stiegler, P.',
    title: 'Image-based multi-scale physiological planning for ablation cancer treatment.',
    venue: 'Philosophical Transactions of the Royal Society A, 369: 4233–4254',
    year: 2011,
  },
  {
    authors: 'Peng, T., <strong>O\'Neill, D.P.</strong>, and Payne, S.J.',
    title: 'A two-equation coupled system for determination of liver tissue temperature during thermal ablation.',
    venue: 'International Journal of Heat and Mass Transfer, 54: 2100–2109',
    year: 2011,
  },
  {
    authors: 'Payne, S.J., Peng, T., and <strong>O\'Neill, D.P.</strong>',
    title: 'Mathematical modelling of thermal ablation.',
    venue: 'Critical Reviews in Biomedical Engineering, 38: 21–30',
    year: 2010,
  },
]

export default function PublicationsPage() {
  return (
    <main>
      <PageHeader label="Our Work" title="Publications" />
      <section className="section">
        <div className="section-inner">
          <PubSection category="Engineering Education" publications={engineeringEducationPubs} />
          <PubSection category="Other" publications={otherPubs} />
        </div>
      </section>
    </main>
  )
}
