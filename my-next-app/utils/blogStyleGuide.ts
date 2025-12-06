/**
 * Blog Heading Style Constants for Play Greenly
 * 
 * These constants ensure consistent styling across all blog posts.
 * Import and use these instead of hardcoding classes.
 */

export const BLOG_HEADING_STYLES = {
  // H2 - Main Section Headings
  h2: 'text-[28px] font-bold text-brand-green leading-[1.4] mt-8 mb-4',
  
  // H3 - Subsection Headings  
  h3: 'text-[24px] font-bold text-brand-green leading-[1.4] mt-6 mb-3',
  
  // Table of Contents H3 (special case with !mt-0)
  tocH3: 'text-[24px] font-bold text-brand-green !mt-0',
  
  // InfoBox Titles
  infoBoxTitle: 'text-2xl font-bold text-brand-green'
} as const;

/**
 * Blog Layout Classes
 * Common layout patterns used in blog posts
 */
export const BLOG_LAYOUT_STYLES = {
  // Table of Contents Container
  tocContainer: 'bg-brand-green/5 p-6 rounded-2xl shadow-sm my-10 border border-brand-green/10',
  
  // Article Container
  articleContainer: 'prose prose-lg mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 blog-content',
  
  // Introduction Section
  introSection: 'mb-10'
} as const;

/**
 * Type definitions for better TypeScript support
 */
export type BlogHeadingType = keyof typeof BLOG_HEADING_STYLES;
export type BlogLayoutType = keyof typeof BLOG_LAYOUT_STYLES;

/**
 * Helper function to get heading classes
 * @param type - The type of heading (h2, h3, tocH3, infoBoxTitle)
 * @returns The corresponding CSS classes
 */
export function getBlogHeadingClasses(type: BlogHeadingType): string {
  return BLOG_HEADING_STYLES[type];
}

/**
 * Helper function to get layout classes
 * @param type - The type of layout element
 * @returns The corresponding CSS classes
 */
export function getBlogLayoutClasses(type: BlogLayoutType): string {
  return BLOG_LAYOUT_STYLES[type];
}

/**
 * Validation function to check if heading classes are correct
 * @param classes - CSS classes to validate
 * @param expectedType - Expected heading type
 * @returns boolean indicating if classes match the standard
 */
export function validateHeadingClasses(classes: string, expectedType: BlogHeadingType): boolean {
  const expectedClasses = BLOG_HEADING_STYLES[expectedType];
  return classes.includes('text-brand-green') && 
         classes.includes('font-bold') &&
         (expectedType === 'infoBoxTitle' ? 
          classes.includes('text-2xl') : 
          classes.includes(expectedType === 'h2' ? 'text-[28px]' : 'text-[24px]'));
}
