import Image from 'next/image'

interface PastMemberProps {
  name: string
  description: React.ReactNode
  imageSrc?: string
}

export default function PastMember({ name, description, imageSrc }: PastMemberProps) {
  return (
    <div className="past-member">
      {imageSrc && (
        <Image src={imageSrc} alt={name} width={48} height={48} className="mini-avatar" style={{ objectFit: 'cover' }} />
      )}
      <div className="pm-body">
        <p className="pm-name">{name}</p>
        <div>{description}</div>
      </div>
    </div>
  )
}
