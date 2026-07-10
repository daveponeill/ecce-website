import StatusPill from '@/components/primitives/StatusPill'
import PublicationItem, { type PublicationItemProps } from '@/components/primitives/PublicationItem'

type StatusVariant = 'nsf-active' | 'nsf-pending' | 'internal'

interface ResearchDetailProps {
  status: StatusVariant
  statusLabel: string
  title: string
  description: React.ReactNode
  publications?: PublicationItemProps[]
}

export default function ResearchDetail({
  status,
  statusLabel,
  title,
  description,
  publications,
}: ResearchDetailProps) {
  return (
    <div className="research-detail">
      <StatusPill variant={status}>{statusLabel}</StatusPill>
      <h2>{title}</h2>
      <div>{description}</div>
      {publications && publications.length > 0 && (
        <details className="pub-expander">
          <summary>Related publications</summary>
          <ul className="pub-list">
            {publications.map((pub, i) => (
              <PublicationItem key={i} {...pub} />
            ))}
          </ul>
        </details>
      )}
    </div>
  )
}
