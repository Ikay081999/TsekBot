export const getInitials = (name) => {
    const words = name.split(' ');
    const initials = words.map(word => word.charAt(0)).join('');
    return initials;
};