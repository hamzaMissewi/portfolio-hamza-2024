"use client";
import {useState, useEffect} from "react";
import {useTheme} from "next-themes";
import {Button} from "@/components/ui/button";

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className={"flex items-center space-x-1"}>
            {/*The current theme is: {theme}*/}
            {/*<br />*/}
            <Button size={"sm"} onClick={() => setTheme("light")}>Light</Button>
            {/*<br />*/}
            <Button size={"sm"} onClick={() => setTheme("dark")}>Dark</Button>
        </div>
    );
};

export default ThemeSwitcher;
