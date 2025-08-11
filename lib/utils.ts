import { format } from 'date-fns';

/
 * Utility functions for the AI application.
 * This module provides essential helper functions for the VidNexus platform.
 * 
 * @module utils
 */

/
 * Function to generate a class name based on conditional logic.
 * This is useful for dynamically applying CSS styles based on the component state.
 * 
 * @param {boolean} condition - A condition to evaluate.
 * @param {string} className - The class name to apply if the condition is true.
 * @returns {string} - Returns the class name if the condition is true, empty string otherwise.
 */
export function cn(condition: boolean, className: string): string {
    return condition ? className : '';
}

/
 * Formatter interface for AI-specific data types.
 * This interface defines the structure of formatters used in the application.
 */
export interface Formatter {
    formatDate(date: Date): string;
    formatCurrency(amount: number): string;
}

/
 * Class that implements the Formatter interface for the VidNexus platform.
 * This class provides specific formatting functions for dates and currencies
 * with a focus on modern technology business needs.
 */
export class AIFmt implements Formatter {
    /
     * Formats a given date to a user-friendly string.
     * Uses the 'date-fns' library to format dates in a consistent manner.
     * 
     * @param {Date} date - The date to format.
     * @returns {string} - A formatted date string.
     */
    formatDate(date: Date): string {
        return format(date, 'MMMM dd, yyyy');
    }

    /
     * Formats a given amount to a currency string.
     * This method formats numbers as currency specifically for the AI business context.
     * 
     * @param {number} amount - The amount to format.
     * @returns {string} - A formatted currency string.
     */
    formatCurrency(amount: number): string {
        return $${amount.toFixed(2)};
    }
}

/
 * A function for generating AI video titles based on key attributes.
 * This function helps in creating engaging video titles that resonate with the modern technology audience.
 * 
 * @param {string} topic - The main topic of the video.
 * @param {string} keyword - A specific keyword to include in the title.
 * @returns {string} - A catchy title for the AI video.
 */
export function generateVideoTitle(topic: string, keyword: string): string {
    return Discover the Future: ${topic} with AI - Your Guide to ${keyword};
}

/
 * Error handling utility function for the AI application.
 * This function standardizes error messages for better user experience.
 * 
 * @param {string} message - The error message to standardize.
 * @returns {string} - A standardized error message.
 */
export function handleError(message: string): string {
    return AI Error: ${message}. Please try again or contact support.;
}