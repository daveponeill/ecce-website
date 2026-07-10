import Link from 'next/link'

interface ResearchCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}

export default function ResearchCard({ icon, title, description, href }: ResearchCardProps) {
  return (
    <div className="r-card">
      <div className="r-card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={href} className="r-card-link">Learn more →</Link>
    </div>
  )
}
