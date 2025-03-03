import StarIcon from '@/assets/icons/star.svg';
import { twMerge } from 'tailwind-merge';


export const CardHeader = ({title, className, description}:{
    title: string,
    className?: string,
    description: string,
}) => {
    return (
        <div className={twMerge("flex flex-col p-6 md:p-0 md:py-8 md:px-10", className)}>
            <div className="inline-flex items-center gap-2">
                <StarIcon className="size-9 text-emerald-300" />
                <h3 className="font-serif text-3xl">{title}</h3>
            </div>
            <p className="text-sm lg:text-base text-white/60 mt-2">{description}</p>
        </div>
    )
} 