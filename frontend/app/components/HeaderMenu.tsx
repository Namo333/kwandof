'use client'

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"


const components = [
  {
    category: "Категория 1",
    items: [
      { title: "Alert Dialog", href: "/docs/primitives/alert-dialog" },
      { title: "Hover Card", href: "/docs/primitives/hover-card" },
      { title: "Progress", href: "/docs/primitives/progress" },
      { title: "Scroll-area", href: "/docs/primitives/scroll-area" },
      { title: "Tabs", href: "/docs/primitives/tabs" },
    ],
  },
  {
    category: "Категория 2",
    items: [
      { title: "Tooltip", href: "/docs/primitives/tooltip" },
      { title: "Accordion", href: "/docs/primitives/accordion" },
      { title: "Dialog", href: "/docs/primitives/dialog" },
      { title: "Dropdown", href: "/docs/primitives/dropdown" },
      { title: "Popover", href: "/docs/primitives/popover" },
    ],
  },
  {
    category: "Категория 3",
    items: [
      { title: "Avatar", href: "/docs/primitives/avatar" },
      { title: "Checkbox", href: "/docs/primitives/checkbox" },
      { title: "Radio Group", href: "/docs/primitives/radio-group" },
      { title: "Switch", href: "/docs/primitives/switch" },
      { title: "Slider", href: "/docs/primitives/slider" },
    ],
  },
  {
    category: "Категория 4",
    items: [
      { title: "Separator", href: "/docs/primitives/separator" },
      { title: "Button", href: "/docs/primitives/button" },
      { title: "Toggle Group", href: "/docs/primitives/toggle-group" },
      { title: "Badge", href: "/docs/primitives/badge" },
      { title: "Toast", href: "/docs/primitives/toast" },
    ],
  },
]

const HeaderMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [openCategories, setOpenCategories] = React.useState({})

  const toggleCategory = (category) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  return (
    <header className="bg-[#111111] rounded-[20px] mt-[31px]">
      <div className="flex h-16 items-center justify-between px-[31px]">
        <nav>
          <ul className="hidden md:flex gap-6 ml-auto text-white justify-between items-center">
            <li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Услуги</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-4 lg:w-[600px] bg-foreground text-white">
                      {components.map((category) => (
                        <div key={category.category}>
                          <h3 className="py-2 font-semibold">{category.category}</h3>
                          <ul>
                            {category.items.map((item) => (
                              <ListItem 
                                key={item.href} 
                                title={item.title} 
                                href={item.href}>
                                
                              </ListItem>
                            ))}
                          </ul>
                        </div>
                      ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>




            </li>
            <li>
              <Link href="/about" className="">О нас</Link>
            </li>
            <li>
              <Link href="/news" className="">Новости</Link>
            </li>
            <li>
              <Link href="/reviews" className="">Отзывы</Link>
            </li>
            <li>
              <Link href="/contacts" className="">Контакты</Link>
            </li>
          </ul>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="text-white md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>

        {isMobileMenuOpen && (
          <div className="absolute z-[1000000] top-[95px] left-[44px] right-[44px] bg-[#111111] mt-2 p-4 rounded-[20px] md:hidden text-white">
            <nav>
              <ul className="flex flex-col space-y-2">
                <li>
                  <button
                    className="w-full text-left font-medium flex items-center gap-2"
                    onClick={() => toggleCategory("Услуги")}
                  >
                    Услуги
                    <svg viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[15px] h-[15px]">
                      <path d="M0.876386 1.11454L0.796386 1.05454V1.15454V2.10597V2.13097L0.816386 2.14597L4.41639 4.84597L4.44639 4.86847L4.47639 4.84597L8.07639 2.14597L8.09639 2.13097V2.10597V1.15454V1.05454L8.01639 1.11454L4.44639 3.79204L0.876386 1.11454Z" fill="white" stroke="black" strokeWidth="0.1"/>
                    </svg>
                  </button>
                  {openCategories["Услуги"] && (
                    <div className="pl-4 space-y-2 mt-2">
                      {components.map((category) => (
                        <div key={category.category}>
                          <button
                            className="w-full text-left text-sm font-medium"
                            onClick={() => toggleCategory(category.category)}
                          >
                            {category.category}
                          </button>
                          {openCategories[category.category] && (
                            <div className="pl-4 space-y-1 mt-1">
                              {category.items.map((item) => (
                                <Link key={item.title} href={item.href} className="block py-1">
                                  {item.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </li>

                <li><Link href="/about" className="">О нас</Link></li>
                <li><Link href="/projects" className="">Проекты</Link></li>
                <li><Link href="/blog" className="">Блог</Link></li>
                <li><Link href="/contacts" className="">Контакты</Link></li>
                <li>
                  <Button className="bg-white text-black hover:bg-slate-100 mt-4 w-full rounded-[16px]">
                    Оставить заявку
                    <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.2 9.67L4.14 9.75H4.24H5.19143H5.21643L5.23143 9.73L7.93143 6.13L7.95393 6.1L7.93143 6.07L5.23143 2.47L5.21643 2.45H5.19143H4.24H4.14L4.2 2.53L6.8775 6.1L4.2 9.67ZM0.96 9.67L0.9 9.75H1H1.95143H1.97643L1.99143 9.73L4.69143 6.13L4.71393 6.1L4.69143 6.07L1.99143 2.47L1.97643 2.45H1.95143H1H0.9L0.96 2.53L3.6375 6.1L0.96 9.67Z" fill="black" stroke="black" strokeWidth="0.1"/>
                    </svg>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        )}

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="text-white font-bold">
          <Image
            src='/img/Logo.svg'
            width={100}
            height={100}
            alt="Logo"
          />
          </Link>
        </div>

        <div className="hidden md:block">
          <Button className="bg-white text-black hover:bg-slate-100 px-[30px] rounded-[16px]">
            Оставить заявку
            <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.2 9.67L4.14 9.75H4.24H5.19143H5.21643L5.23143 9.73L7.93143 6.13L7.95393 6.1L7.93143 6.07L5.23143 2.47L5.21643 2.45H5.19143H4.24H4.14L4.2 2.53L6.8775 6.1L4.2 9.67ZM0.96 9.67L0.9 9.75H1H1.95143H1.97643L1.99143 9.73L4.69143 6.13L4.71393 6.1L4.69143 6.07L1.99143 2.47L1.97643 2.45H1.95143H1H0.9L0.96 2.53L3.6375 6.1L0.96 9.67Z" fill="black" stroke="black" strokeWidth="0.1"/>
            </svg>
          </Button>
        </div>

      </div>
    </header>
  )
}

export default HeaderMenu


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#ececec33] hover:text-white focus:bg-[#ececec33] focus:text-white",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </li>
  )
})
ListItem.displayName = "ListItem"