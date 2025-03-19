"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, ChevronRight, User } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Define the type for menu items
type MenuItem = {
  name: string
  href: string
  dropdown?: { name: string; href: string }[]
}

// Define the menu structure
const menuItems: MenuItem[] = [
  {
    name: "MPD",
    href: "#",
    dropdown: [
      { name: "General Information", href: "/mpd/general-information" },
      { name: "Staff (Teaching)", href: "/mpd/staff" },
      { name: "School Infrastructure", href: "/mpd/infrastructure" },
      { name: "Documents and Information", href: "/mpd/documents" },
      { name: "Result and Academics", href: "/mpd/results" },
      
      

    ],
  },
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
    dropdown: [
      { name: "Our History", href: "/about/history" },
      { name: "President Desk", href: "/about/president-desk" },
      { name: "Director Desk", href: "/about/director-desk" },
      { name: "Principal Desk", href: "/about/principal-desk" },
      { name: "Vision & Mission", href: "/about/vision-mission" },
      
    ],
  },
  {
    name: "Admission",
    href: "admission",
    dropdown: [
      { name: "Admission Form", href: "/admission/admission-form" },
      { name: " School Fee Structure", href: "/admission/schoool-fee-structure" },
      { name: " Transport Fee Structure ", href: "/admission/transport-fee-structure" },
    ],
  },
  {
    name: "Academic",
    href: "academic",
    dropdown: [
      { name: "Primary", href: "/academic/primary" },
      { name: "Pre-Primary", href: "/academic/pre-primary" },
      { name: "Secondary", href: "/academic/secondary" },
      { name: "Sr-Secondary", href: "/academic/sr-secondary" },
      { name: "Curriculum", href: "/academic/curriculum" },
      // { name: "Syllabus", href: "/academic/syllabus" },
    ],
  },
  {
    name: "Facilities",
    href: "/facilities",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
  {
    name: "Career",
    href: "#",
    dropdown: [
      { name: "View Jobs", href: "/career/view-jobs" },
      { name: "Apply", href: "/career/apply" },
    ],
  },
 
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<string[]>([])

  
  const toggleMobileDropdown = (name: string) => {
    setOpenMobileDropdowns((prev) => (prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]))
  }


  const isMobileDropdownOpen = (name: string) => {
    return openMobileDropdowns.includes(name)
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="http://snbpschool.co.in/Websitepages/images/NewPhotos/logo.jpeg?height=60&width=200"
              alt="SNBP INTERNATIONAL School"
              width={200}
              height={60}
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {menuItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-primary font-medium transition-colors focus:outline-none px-2 py-1">
                      {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-48">
                      {item.dropdown.map((dropdownItem) => (
                        <DropdownMenuItem key={dropdownItem.name} asChild>
                          <Link href={dropdownItem.href} className="w-full cursor-pointer">
                            {dropdownItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-primary font-medium transition-colors px-2 py-1"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Login Button for Desktop */}
          <div className="hidden lg:block">
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold">
              <User className="mr-2 h-4 w-4" />
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-1">
              {menuItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100 pb-2">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className="flex w-full justify-between items-center text-gray-700 hover:text-primary font-medium py-2 transition-colors"
                      >
                        {item.name}
                        <ChevronRight
                          className={`h-5 w-5 transition-transform ${
                            isMobileDropdownOpen(item.name) ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      {isMobileDropdownOpen(item.name) && (
                        <div className="pl-4 mt-1 space-y-1 border-l-2 border-gray-200">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block text-gray-600 hover:text-primary text-sm py-2 transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-gray-700 hover:text-primary font-medium py-2 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

