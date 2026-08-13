export interface CaseStudy {
  title: string
  subtitle?: string
  description: string
  category: string
  type: string
  link: string
  image: string
}

export interface Experience {
  title: string
  company: string
  period: string
  details: string[]
}

export interface ImpactStat {
  value: string
  label: string
}

export interface Certification {
  title: string
  org: string
  year: string
  link: string
}
