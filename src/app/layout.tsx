import type {Metadata} from "next";
import "./globals.css";


export const metadata: Metadata = {
    title: "Create Next App",
    description: "Resume about me as web developer react - next - typescript",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return children;
}