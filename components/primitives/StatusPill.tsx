interface StatusPillProps {
  variant: 'nsf-active' | 'nsf-pending' | 'internal'
  children: React.ReactNode
}

export default function StatusPill({ variant, children }: StatusPillProps) {
  return (
    <span className={`status-pill ${variant}`}>{children}</span>
  )
}
