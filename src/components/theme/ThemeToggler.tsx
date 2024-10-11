"use client";
import React, {useEffect, useState} from "react";
import {ThemeProvider as NextThemesProvider, useTheme} from "next-themes";
import {Button} from "../ui/button";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "../ui/dropdown-menu";
import type {ThemeProviderProps} from "next-themes/dist/types";
import {Moon, Sun} from "lucide-react";


export default function ThemeProvider({children, ...props}: ThemeProviderProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return <>{children}</>;
    }
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export function ThemeTogglerNew() {
    const {theme, setTheme} = useTheme();

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <select value={theme} onChange={e => setTheme(e.target.value)}>
            {/*<option value="system">System</option>*/}
            <option value="dark">Dark</option>
            <option value="light">Light</option>
        </select>
    )
}


export function ThemeToggler() {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                asChild
                className={
                    // "border dark:border-white border-black"
                    "border dark:border-white border-red-400 text-white dark:text-black dark:bg-black bg-white"
                }
                // style={currentTheme === 'light' ? 'light.css' : 'dark.css'}
                // style={{backgroundColor: theme === "light" ? "white" : "black"}}
            >
                {/*<Button*/}
                {/*  variant="outline"*/}
                {/*  size="icon"*/}
                {/*  // style={{ backgroundColor: theme === "light" ? "black" : "white" }}*/}
                {/*  onClick={() =>*/}
                {/*    setTheme((value) => (value === "light" ? "dark" : "light"))*/}
                {/*  }*/}
                {/*  // onClick={() => setTheme(value => value === "light" ? "dark" : "light")}*/}
                {/*  className="p-2 bg-gray-200 dark:bg-gray-800 rounded"*/}
                {/*>*/}
                {/*  {theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}*/}
                {/*</Button>*/}
                <Button
                    variant="outline"
                    size="sm"
                    // style={{ backgroundColor: theme === "light" ? "black" : "white" }}
                    onClick={() =>
                        setTheme((value) => (value === "light" ? "dark" : "light"))
                    }
                >
                    {theme === "dark" ? (
                        // <SunIcon
                        <Sun
                            // style={{
                            //     rotate: theme === "dark" ? "revert" : "initial",//{x: -90} : 0,
                            //     scale: theme === "dark" ? 0 : "100%"
                            // }}
                            // className={`h-[1.2rem] w-[1.2rem] transition-all text-black`}
                            // className={`absolute ${theme === "dark" ? "text-white" : "text-black"} h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0`}
                            className={`absolute text-white h-[1.2rem] w-[1.2rem] transition-all dark:scale-100`}
                        />
                    ) : (
                        // <MoonIcon
                        <Moon
                            // className={`h-[1.2rem] w-[1.2rem] transition-all text-black`}
                            className={`absolute text-black h-[1.2rem] w-[1.2rem]" +
                            " scale-100 transition-all`}
                            // dark:-rotate-90
                        />
                    )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                // className={`absolute right-1 top-2 text-black bg-white dark:text-black dark:bg-black}`}
                className={`absolute right-1 top-2 ${theme === "light" ? "text-black bg-white" : "text-white bg-black"}`}
            >
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>

            {/*<DropdownMenuGroup>*/}
            {/*  <DropdownMenu>*/}
            {/*    <DropdownMenuPortal />*/}
            {/*  </DropdownMenu>*/}
            {/*</DropdownMenuGroup>*/}
        </DropdownMenu>
    );
}
