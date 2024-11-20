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
import TestForm from "./activeComp/TestForm"

interface ComponentItem {
  title: string;
  href: string;
}

interface ComponentCategory {
  category: string;
  items: ComponentItem[];
}

const components: ComponentCategory[] = [
  {
    category: "Помощь в получении кредита",
    items: [
      { title: "Помощь в кредите", href: "/docs/primitives/alert-dialog" },
      { title: "Кредитный брокер", href: "/docs/primitives/hover-card" },
      { title: "Кредит пенсионерам", href: "/docs/primitives/progress" },
      { title: "Кредит безработным", href: "/docs/primitives/scroll-area" },
      { title: "Помощь в кредите без предоплаты", href: "/docs/primitives/tabs" },
    ],
  },
  {
    category: "Кредит наличными",
    items: [
      { title: "Одобрение кредита", href: "/docs/primitives/tooltip" },
      { title: "Взять кредит в Москве", href: "/docs/primitives/accordion" },
      { title: "Кредит без справок", href: "/docs/primitives/accordion" },
      { title: "Кредит с плохой кредитной историей", href: "/docs/primitives/accordion" },
      { title: "Взять кредит", href: "/docs/primitives/accordion" },
    ],
  },
  {
    category: "Кредит под залог",
    items: [
      { title: "Кредит под залог квартиры", href: "/docs/primitives/avatar" },
      { title: "Кредит под залог комнаты", href: "/docs/primitives/checkbox" },
      { title: "Кредит под залог недвижимости", href: "/docs/primitives/radio-group" },
      { title: "Кредит под залог дома", href: "/docs/primitives/switch" },
      { title: "Кредит под залог земли", href: "/docs/primitives/slider" },
      { title: "Кредит под залог ПТС", href: "/docs/primitives/slider2" },
    ],
  },
  {
    category: "Кредит для бизнеса",
    items: [
      { title: "Кредит для ИП", href: "/docs/primitives/separator" },
      { title: "Кредит для ООО", href: "/docs/primitives/button" },
    ],
  },
  {
    category: "Помощь в получении ипотеки",
    items: [
      { title: "Помощь в ипотеке", href: "/docs/primitives/tooltip" },
      { title: "Ипотечный брокер", href: "/docs/primitives/accordion" },
    ],
  },
]

const HeaderMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  
  // Define state type for openCategories
  const [openCategories, setOpenCategories] = React.useState<{ [key: string]: boolean }>({})

  // Type the category parameter as string
  const toggleCategory = (category: string) => {
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
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-4 lg:w-[900px] bg-foreground text-white">
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
                  <TestForm 
                    buttonClass="bg-white text-black hover:bg-slate-100 mt-4 w-full rounded-[16px]"
                    svgColor="black"
                  />
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
          <TestForm 
            buttonClass="bg-white text-black hover:bg-slate-100 px-[30px] rounded-[16px]"
            svgColor="black"
          />
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
