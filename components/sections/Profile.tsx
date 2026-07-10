import Image from 'next/image'
import Link from 'next/link'
import SocialIcon from '@/components/primitives/SocialIcon'

interface ProfileProps {
  name: string
  credentials: string
  pronouns?: string
  role: string
  affiliation: string
  bio: React.ReactNode
  imageSrc: string
  linkedin?: string
  scholar?: string
  publicationsHref?: string
}

export default function Profile({
  name, credentials, pronouns, role, affiliation,
  bio, imageSrc, linkedin, scholar, publicationsHref,
}: ProfileProps) {
  return (
    <div className="profile">
      <div className="profile-avatar">
        <Image src={imageSrc} alt={name} width={140} height={140} style={{ objectFit: 'cover' }} />
      </div>
      <div className="profile-body">
        <h3>
          {name}{credentials && `, ${credentials}`}
          {pronouns && <span style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', fontWeight: 400, color: 'var(--ink-soft)', marginLeft: '0.5rem' }}>{pronouns}</span>}
        </h3>
        <p className="profile-role">
          {role}{affiliation && <><br />{affiliation}</>}
        </p>
        {bio}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
          {linkedin && <SocialIcon type="linkedin" href={linkedin} />}
          {scholar && <SocialIcon type="scholar" href={scholar} />}
          {publicationsHref && (
            <Link href={publicationsHref} style={{ fontSize: '0.85rem' }}>View publications</Link>
          )}
        </div>
      </div>
    </div>
  )
}
