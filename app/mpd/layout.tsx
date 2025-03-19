import type React from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function MPDLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

