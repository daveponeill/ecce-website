import Image from 'next/image'
import Link from 'next/link'

interface PeoplePreviewCardProps {
  name: string
  role: string
  imageSrc: string
  href?: string
}

export default function PeoplePreviewCard({ name, role, imageSrc, href }: PeoplePreviewCardProps) {
  const card = (
    <div className="p-card">
      <div className="p-avatar">
        <Image src={imageSrc} alt={name} width={108} height={108} style={{ objectFit: 'cover' }} />
      </div>
      <p className="p-name">{name}</p>
      <p className="p-role">{role}</p>
    </div>
  )
  return href ? <Link href={href} style={{ textDecoration: 'none' }}>{card}</Link> : card
}
