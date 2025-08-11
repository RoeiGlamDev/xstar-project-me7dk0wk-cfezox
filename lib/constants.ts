export const BRAND_NAME = "AI";

/
 * Color constants for the AI brand
 * @constant {Object} COLORS - Contains the brand's color palette
 * @property {string} primary - The primary color used for accents and highlights
 * @property {string} secondary - The secondary color used for backgrounds and buttons
 * @property {string} background - The background color for the website
 */
export const COLORS = {
    primary: "#FF4500",  // Orange
    secondary: "#FF0000", // Red
    background: "#FFFFFF" // White
};

/
 * Configuration settings for the VidNexus AI application
 * @constant {Object} CONFIG - Holds configuration settings for the application
 * @property {string} appName - The name of the application
 * @property {string} industry - The industry in which the application operates
 * @property {string} websiteUrl - The URL for the VidNexus website
 * @property {string} description - A brief description of what the application does
 */
export const CONFIG = {
    appName: "VidNexus",
    industry: "Technology",
    websiteUrl: "https://www.vidnexus.ai",
    description: "VidNexus leverages advanced AI technology to create and customize videos effortlessly."
};

/
 * Interface representing a Video created by the AI application
 * @interface Video
 * @property {string} id - Unique identifier for the video
 * @property {string} title - Title of the video
 * @property {string} description - Description of the video content
 * @property {string} url - URL where the video can be accessed
 * @property {string} createdAt - Timestamp of when the video was created
 */
export interface Video {
    id: string;
    title: string;
    description: string;
    url: string;
    createdAt: string;
}

/
 * Creates a new video object
 * @function createVideo
 * @param {string} id - Unique identifier for the video
 * @param {string} title - Title of the video
 * @param {string} description - Description of the video content
 * @param {string} url - URL where the video can be accessed
 * @returns {Video} - The newly created video object
 */
export const createVideo = (id: string, title: string, description: string, url: string): Video => {
    return {
        id,
        title,
        description,
        url,
        createdAt: new Date().toISOString()
    };
};