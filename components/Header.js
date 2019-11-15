import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Passages</a>
      </Link>
      <Link href="/problems">
        <a style={linkStyle}>Problems</a>
      </Link>
    </div>
  )
}
