export default function subscribed({ next, store }: { next: (data?: any) => void, store: any }) {
  const isSubscribed = store.getters.auth.subscribed && store.getters.auth.loggedIn;
  return isSubscribed ? next() : next({name: 'dashboard'});
}