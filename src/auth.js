export const Auth = {
    isLoggedIn: () => true,
    login: () => true,
    logout: () => location.reload(),
    register: () => ({ ok: true })
};