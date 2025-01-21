"use client";
import React from 'react'
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { useEffect } from 'react';
import Image from 'next/image';

import { Moon, SunMoon } from 'lucide-react';
export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => setMounted(true), []);

    if (!mounted) return (
        <Moon />
      )
    
      if (resolvedTheme === 'dark') {
        return <Moon onClick={() => setTheme('light')} />
      }
    
      if (resolvedTheme === 'light') {
        return <SunMoon onClick={() => setTheme('dark')} />
      }
    
}
