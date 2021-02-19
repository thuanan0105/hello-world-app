export default function guest({ next, store }: { next: (data?: any) => void, store: any }) {
  const isGuest = !store.getters.auth.loggedIn;
  return isGuest ? next() : next({ name: 'dashboard' });
}