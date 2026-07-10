import Link from 'next/link'

export interface PublicationItemProps {
  authors: string
  title: string
  venue: string
  year: number
  award?: string
  link?: string
}

export default function PublicationItem({
  authors,
  title,
  venue,
  year,
  award,
  link,
}: PublicationItemProps) {
  const titleEl = link ? (
    <Link href={link} target="_blank" rel="noopener">{title}</Link>
  ) : (
    <span>{title}</span>
  )

  return (
    <li className="pub-item">
      <span dangerouslySetInnerHTML={{ __html: authors }} />{' '}
      {titleEl}{' '}
      <span className="pub-venue">{venue}, {year}.</span>
      {award && (
        <><br /><span className="pub-award">🏆 {award}</span></>
      )}
    </li>
  )
}
