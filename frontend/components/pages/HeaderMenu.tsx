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
      { title: "Помощь в кредите", href: "/services/help/creditassistance" },
      { title: "Кредитный брокер", href: "/services/help/creditbroker" },
      { title: "Кредит пенсионерам", href: "/services/help/credittopensioners" }, 
      { title: "Кредит безработным", href: "/services/help/creditforunemployed" }, 
      { title: "Помощь в кредите без предоплаты", href: "/services/help/creditwithoutprepayment" },
    ],
  },
  {
    category: "Кредит наличными",
    items: [
      { title: "Одобрение кредита", href: "/services/cash/creditapproval" }, 
      { title: "Взять кредит в Москве", href: "/services/cash/takecreditinmoscow" }, 
      { title: "Кредит без справок", href: "/services/cash/creditwithoutdocuments" }, 
      { title: "Кредит с плохой кредитной историей", href: "/services/cash/creditwithbadcredit" }
    ],
  },
  {
    category: "Кредит под залог",
    items: [
      { title: "Кредит под залог квартиры", href: "/services/pledge/creditagainstapartment" },
      { title: "Кредит под залог комнаты", href: "/services/pledge/creditagainstroom" }, 
      { title: "Кредит под залог недвижимости", href: "/services/pledge/creditagainstproperty" }, 
      { title: "Кредит под залог дома", href: "/services/pledge/creditagainsthouse" }, 
      { title: "Кредит под залог земли", href: "/services/pledge/creditagainstland" }, 
      { title: "Кредит под залог ПТС", href: "/services/pledge/creditagainstpts" },
    ],
  },
  {
    category: "Кредит для бизнеса",
    items: [
      { title: "Кредит для ИП", href: "/services/business/creditforindividual" }, 
      { title: "Кредит для ООО", href: "/services/business/creditforlegalentity" }, 
    ],
  },
  {
    category: "Помощь в получении ипотеки",
    items: [
      { title: "Помощь в ипотеке", href: "/services/mortgages/mortgageassistance" }, 
      { title: "Ипотечный брокер", href: "/services/mortgages/mortgagebroker" }, 
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
        <nav className="">
          <ul className="hidden md:flex gap-2 ml-auto text-white justify-between items-center max-lg:text-[13px]">
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
              <Link href="/about">О нас</Link>
            </li>
            <li>
              <Link href="/news">Новости</Link>
            </li>
            <li>
              <a href="#reviews">Отзывы</a>
            </li>
            <li>
              <a href="#contact-us">Контакты</a>
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
                <li><Link href="/news" className="">Новости</Link></li>
                <li><a href="#reviews" className="">Отзывы</a></li>
                <li><a href="#contact-us" className="">Контакты</a></li>
                <li>
                  <div className="text-center md:text-start md:order-2 md:flex md:justify-end md:items-center">
                    <a href="tel:+74951284454" className="me-5 inline-block text-sm text-white">
                        +7 (495) 128-44-54
                    </a>
                    <p className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border-2 border-white text-white">
                        Ежедневно 9:00-19:00
                    </p>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        )}

        <div className="absolute left-1/2 transform -translate-x-1/2 md:hidden">
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
          <div className="text-center md:text-start md:order-2 md:flex md:justify-end md:items-center">
            <a href="tel:+74951284454" className="me-2 max-lg:text-[13px] inline-block text-sm text-white">
                +7 (495) 128-44-54
            </a>
            <p className="py-2 px-3 max-lg:text-[13px] inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border-2 border-white text-white">
                Ежедневно 9:00-19:00
            </p>
          </div>
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
