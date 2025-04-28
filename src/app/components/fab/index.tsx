import { FileUser } from "lucide-react"


export const FAB = () => {
    return (
        <a
            className="bg-gray-50 fixed bottom-6 right-8 h-8 px-2 flex items-center justify-center gap-1 font-bold whitespace-nowrap rounded-md text-[12px]/0 transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-gray-100 hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50  hover:shadow-md hover:-translate-y-0.5"
            href="https://cv.ptrcklehmann.com"
            target="__blank"
        >
            <FileUser />
            Resume
        </a>
    );
};
