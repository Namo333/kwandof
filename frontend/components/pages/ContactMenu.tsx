"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react"; // Icons for better UX

const ContactMenu: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none flex gap-[10px] items-center"
          >
            <Phone className="h-4 w-4" />
            <p>Позвони нам</p>
          </motion.button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Контакты</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Phone className="mr-2 h-4 w-4" /> <a href="tel:+74951284454">+7 (495) 128-44-54</a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Mail className="mr-2 h-4 w-4" /> <a href="mailto:info@credit-ipoteka.com">info@credit-ipoteka.com</a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ContactMenu;