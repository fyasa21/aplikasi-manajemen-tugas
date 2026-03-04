const SESSION_KEY = "actask_session";

export const Auth = {
    login: (username, password) => {
        username = username.trim();
        password = password.trim();

        if (!username || !password) return false;

        let data = [];

        try {
            data = JSON.parse(localStorage.getItem("actask_users")) || [];
        } catch {
            return false;
        }

        const user = data.find(
            u => u.username === username && u.password === password
        );

        if (!user) return false;

        // Simpan hanya username ke session (lebih aman)
        localStorage.setItem(
            SESSION_KEY,
            JSON.stringify({ username: user.username })
        );

        return true;
    },

    logout: () => {
        localStorage.removeItem("actask_session");
        location.reload();
    },

    getUser: () => {
        return JSON.parse(localStorage.getItem(SESSION_KEY));
    },

    isLoggedIn: () => {
        try {
            const session = JSON.parse(localStorage.getItem(SESSION_KEY));
            return !!session && !!session.username;
        } catch {
            return false;
        }
    },

    register: (username, password) => {
        username = username.trim();
        password = password.trim();

        if (!username || !password) {
            return { ok: false, msg: "Username dan password wajib diisi" };
        }

        const users = JSON.parse(localStorage.getItem("actask_users")) || [];

        if (users.some(u => u.username === username)) {
            return { ok: false, msg: "Username sudah ada" };
        }

        users.push({ username, password });
        localStorage.setItem("actask_users", JSON.stringify(users));

        return { ok: true };
    }
};