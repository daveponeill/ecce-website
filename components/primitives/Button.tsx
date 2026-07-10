import Link from 'next/link'

interface ButtonProps {
  variant: 'primary' | 'ghost'
  href?: string
  children: React.ReactNode
  className?: string
}

export default function Button({ variant, href, children, className }: ButtonProps) {
  const cls = `btn ${variant === 'primary' ? 'btn-primary' : 'btn-ghost'}${className ? ` ${className}` : ''}`
  if (href) {
    return <Link href={href} className={cls}>{children}</Link>
  }
  return <button className={cls}>{children}</button>
}
