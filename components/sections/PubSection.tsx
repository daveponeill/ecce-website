import PublicationItem, { type PublicationItemProps } from '@/components/primitives/PublicationItem'

interface PubSectionProps {
  category: string
  publications: PublicationItemProps[]
}

export default function PubSection({ category, publications }: PubSectionProps) {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem, 2.6vw, 1.9rem)', marginBottom: '1.25rem' }}>
        {category}
      </h2>
      <ul className="pub-list">
        {publications.map((pub, i) => (
          <PublicationItem key={i} {...pub} />
        ))}
      </ul>
    </div>
  )
}
