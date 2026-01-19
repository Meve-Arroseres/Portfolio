"use client"

import React from "react"
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { Inder } from "next/font/google"

const inder = Inder({
  weight: "400",
  subsets: ["latin"],
})

const navigation = [
  { name: "Accueil", href: "#" },
  { name: "A Propos", href: "#description" },
  { name: "Compétences", href: "#competences" },
  { name: "Experiences", href: "#experiences" },
  { name: "Projets", href: "#projets" },
  { name: "Contact", href: "#contact" },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

function Clock() {
  const [time, setTime] = React.useState(new Date())

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="text-right leading-tight text-sm">
      <div>{time.toLocaleDateString("fr-FR")}</div>
      <div>{time.toLocaleTimeString("fr-FR")}</div>
    </div>
  )
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className={`fixed w-full z-50 ${inder.className}`}>
      <div className="backdrop-blur">
        <div className="mx-4 my-6">
          <div className="flex h-16 items-center rounded-4xl bg-[#DCE9FF] px-6 shadow-lg">
            
            {/* MOBILE BUTTON */}
            <div className="absolute left-4 flex items-center sm:hidden">
              <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-[#0F172A] hover:text-[#2563EB]">
                <Bars3Icon className="block h-6 w-6 data-[open]:hidden" />
                <XMarkIcon className="hidden h-6 w-6 data-[open]:block" />
              </DisclosureButton>
            </div>

            {/* LOGO - GAUCHE */}
            <div className="flex shrink-0">
              <img
                src="assets/favicon-32x32.png"
                alt="Logo"
                className="h-8 w-auto drop-shadow-sm"
              />
            </div>

            {/* NAVIGATION - CENTRÉE */}
            <div className="mx-auto hidden sm:flex max-w-[60%] justify-center gap-5 overflow-hidden">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="whitespace-nowrap px-2 py-2 text-lg font-medium text-[#0F172A] hover:text-[#2563EB] transition"
                >
                  {item.name}
                </a>
              ))}
            </div>



            {/* DATE / HEURE - DROITE */}
            <div className="hidden sm:block text-[#0F172A] font-medium">
              <Clock />
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-4 pb-4">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium bg-[#DCE9FF] text-[#0F172A] hover:text-[#2563EB]"
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
