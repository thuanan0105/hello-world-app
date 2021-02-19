

export default function auth({ next, store }: { next: (data?: any) => void, store: any }) {
  const isLoggedIn = store.getters.auth.loggedIn;
  return isLoggedIn ? next() : next({ name: 'login' });
}