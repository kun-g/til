import { Navbar, NavbarItem, NavbarSection } from '@/components/catalyst-ui/navbar.tsx'

export default function Component({ module }: { module: string }) {
  return (
    <Navbar>
      <NavbarSection className="max-lg:hidden">
        <NavbarItem href="/" current={module === "home"}> Home </NavbarItem>
        <NavbarItem href="/tils" current={module === "tils"}>TIL</NavbarItem>
      </NavbarSection>
    </Navbar>
  )
}