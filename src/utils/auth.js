function getUsers() {
    return JSON.parse(localStorage.getItem("users") || "[]");
}

function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

function triggerAuthChange() {
    window.dispatchEvent(new Event("authChange"));
}

async function hashString(str) {
    if (!str) return "";
    const enc = new TextEncoder().encode(str);
    const buf = await crypto.subtle.digest('SHA-256', enc);
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

export async function registerUser({ name, email, password }) {
    const users = getUsers();
    const exists = users.find((u) => u.email === email);
    if (exists) {
        throw new Error("Email já cadastrado");
    }

    const passwordHash = await hashString(password);

    const user = {
        id: Date.now().toString(),
        name,
        email,
        passwordHash,
        isLogged: false,
        createdAt: new Date().toISOString(),
        lastLogin: null,
    };

    users.push(user);
    saveUsers(users);
    triggerAuthChange();
    return user;
}

export async function loginUser(email, password) {
    const users = getUsers();
    const passwordHash = await hashString(password);

    let user = users.find((u) => u.passwordHash === passwordHash && u.email === email);

    if (!user) {
        const legacy = users.find((u) => u.password && u.password === password && u.email === email);
        if (legacy) {
            legacy.passwordHash = await hashString(legacy.password);
            delete legacy.password;
            saveUsers(users.map(u => u.id === legacy.id ? legacy : u));
            user = legacy;
        }
    }

    if (!user) {
        throw new Error("Credenciais inválidas");
    }

    const updated = users.map((u) =>
        u.id === user.id ? { ...u, isLogged: true, lastLogin: new Date().toISOString() } : u
    );
    saveUsers(updated);
    localStorage.setItem("currentUserId", user.id);
    triggerAuthChange();
    return { ...user, isLogged: true, lastLogin: new Date().toISOString() };
}

export function logoutUser() {
    const currentId = localStorage.getItem("currentUserId");
    if (!currentId) return;
    const users = getUsers();
    const updated = users.map((u) => (u.id === currentId ? { ...u, isLogged: false } : u));
    saveUsers(updated);
    localStorage.removeItem("currentUserId");
    triggerAuthChange();
}

export function getCurrentUser() {
    const currentId = localStorage.getItem("currentUserId");
    if (!currentId) return null;
    const users = getUsers();
    return users.find((u) => u.id === currentId) || null;
}

export function getLoggedUsers() {
    return getUsers().filter((u) => u.isLogged);
}

export function onAuthChange(handler) {
    window.addEventListener("authChange", handler);
    return () => window.removeEventListener("authChange", handler);
}
