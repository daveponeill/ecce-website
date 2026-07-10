import SectionLabel from '@/components/primitives/SectionLabel'

interface PageHeaderProps {
  label: string
  title: string
  description?: string
}

export default function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <div className="page-header">
      <div className="page-header-inner">
        <SectionLabel>{label}</SectionLabel>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </div>
  )
}
