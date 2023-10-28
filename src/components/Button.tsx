import Link from "next/link";

interface ButtonProps {
    text: string;
    align?: 'left' | 'center' | 'right' | 'fullwidth';
    color?: 'primary' | 'secondary' | 'light' | 'dark';
    className?: string;
    link?: string;
    onClick?: () => void;
}

const alignmentMap = {
    center: 'justify-center',
    right: 'justify-end',
    fullwidth: 'w-full',
    left: 'justify-start',
};

const colorMap = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    light: 'bg-light text-dark',
    dark: 'bg-dark text-light'
}

export default function Button({text, align = 'left', color = 'primary', className, link, onClick}:ButtonProps) {
    const 
        alignment = alignmentMap[align],
        colors = colorMap[color],
        defaultStyles = 'py-2 px-4 rounded-md hover:bg-opacity-80 duration-200 shadow-lg text-center',
        defaultClass = `${defaultStyles} ${colors} ${className}`;

    const content = link ? ( 
        // Link Button
        <Link href={link} className={`${defaultClass}`}>{text}</Link> 
    ) : ( 
        // Function Button
        <div onClick={onClick} className={`${defaultClass}`}>{text}</div> 
    );
    
    return(
        <div className={`flex ${alignment}`}>
            {content}
        </div>
    )
}