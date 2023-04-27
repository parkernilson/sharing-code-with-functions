/**
 * @param str string to encode
 * @returns base64 encoded string
 */
export function base64Encode(str: string) {
    return Buffer.from(str).toString('base64');
}