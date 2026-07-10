import Image from 'next/image'

interface CollaboratorItemProps {
  name: string
  affiliation: string
  imageSrc?: string
}

export default function CollaboratorItem({ name, affiliation, imageSrc }: CollaboratorItemProps) {
  return (
    <li>
      {imageSrc && (
        <Image src={imageSrc} alt={name} width={48} height={48} className="mini-avatar" style={{ objectFit: 'cover' }} />
      )}
      <span><strong>{name}</strong><br /><span style={{ fontSize: '0.88rem', color: 'var(--ink-soft)' }}>{affiliation}</span></span>
    </li>
  )
}
