import { PlusIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ logos, className, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x border-slate-200 dark:border-white/10 md:grid-cols-5",
        className
      )}
      {...props}
    >
      <div className="pointer-events-none absolute -top-px left-1/2 w-screen -translate-x-1/2 border-t border-slate-200 dark:border-white/10" />

      {logos.map((logo, index) => (
        <LogoCard
          key={logo.alt}
          className={cn(
            index % 2 === 0 && "bg-slate-50/80 dark:bg-neutral-950",
            index % 2 !== 0 && "bg-white/50 dark:bg-black",
            index % 5 === 4 && "md:border-r-0",
            index >= logos.length - 2 && "border-b-0 md:border-b",
            index >= logos.length - 5 && "md:border-b-0"
          )}
          logo={logo}
        >
          {index < logos.length - 2 && index % 2 === 0 && (
            <PlusIcon
              className="absolute -bottom-[12.5px] -right-[12.5px] z-10 size-6 bg-[#f7fbff] text-slate-400 dark:bg-black dark:text-neutral-600 md:hidden"
              strokeWidth={1}
            />
          )}
          {index < 4 && (
            <PlusIcon
              className="absolute -bottom-[12.5px] -right-[12.5px] z-10 hidden size-6 bg-[#f7fbff] text-slate-400 dark:bg-black dark:text-neutral-600 md:block"
              strokeWidth={1}
            />
          )}
        </LogoCard>
      ))}

      <div className="pointer-events-none absolute -bottom-px left-1/2 w-screen -translate-x-1/2 border-b border-slate-200 dark:border-white/10" />
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-36 items-center justify-center border-b border-r border-slate-200 px-5 py-7 dark:border-white/10 md:min-h-44 md:p-8",
        className
      )}
      title={logo.alt}
      {...props}
    >
      <img
        alt={logo.alt}
        className="pointer-events-none max-h-20 max-w-[82%] select-none object-contain md:max-h-24"
        height={logo.height || "auto"}
        src={logo.src}
        width={logo.width || "auto"}
      />
      {children}
    </div>
  );
}
