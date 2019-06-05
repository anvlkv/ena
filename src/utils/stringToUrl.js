export function stringToUrl(str) {
    return encodeURIComponent(str.replace(/\s\s*/g, '-').toLowerCase());
}