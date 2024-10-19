"use client";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    // <label>
    //   <p className="sr-only">{t("label")}</p>
    <select
      defaultValue={localActive}
      className="border border-black px-2 py-1"
      onChange={onSelectChange}
      disabled={isPending}
    >
      <option value="en">{t("languages.en")}</option>
      <option value="fr">{t("languages.fr")}</option>
      <option value="ar">{t("languages.ar")}</option>
    </select>
  );
}
