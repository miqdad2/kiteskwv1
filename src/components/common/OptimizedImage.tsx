import { ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    width: number;
    height: number;
    priority?: boolean; // For above-the-fold images
}

/**
 * Optimized image component with lazy loading and async decoding
 * Prevents CLS by requiring explicit width and height
 */
export function OptimizedImage({
    src,
    alt,
    width,
    height,
    priority = false,
    className,
    ...props
}: OptimizedImageProps) {
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            className={className}
            {...props}
        />
    );
}
