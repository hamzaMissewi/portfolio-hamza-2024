"use client";
import React, {ChangeEvent, useTransition} from "react";
import {useRouter} from "next/navigation";
import {useLocale} from "next-intl";
import {locales} from "../lib/intl";

interface ILocaleSwitcher {
}

export default function LocaleSwitcher({}: ILocaleSwitcher) {
    const [isPending, startTransition] = useTransition();
    const localeActive = useLocale();
    const router = useRouter();

    const onChangeLocale = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;

        startTransition(() => {
            router.replace(`/${nextLocale}`);
            // router.push(`/lang=${nextLocale}`); // This changes the URL
        });
    };

    return (
        <div className={"flex h-full self-center"}>
            {/*<p className="sr-only">change language</p>*/}
            <select
                className="py-1 rounded-md border dark:border-amber-100 border-black h-full"
                defaultValue={localeActive}
                disabled={isPending}
                onChange={onChangeLocale}
            >
                {locales.map((l) => (
                    <option value={l} key={l}>
                        {l}
                    </option>
                ))}
            </select>
        </div>
    );
}
