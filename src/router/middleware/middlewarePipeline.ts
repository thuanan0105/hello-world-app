import { RouteLocationNormalized } from "vue-router";
import { Store } from "vuex";

function middlewarePipeline(
  context: {
    to?: RouteLocationNormalized;
    from?: RouteLocationNormalized;
    next: any;
    store?: Store<{ user: { loggedIn: boolean; subscribed: boolean } }>
  },
  middleware: { [x: string]: any },
  index: number
) {
  const nextMiddleware = middleware[index]

  if (!nextMiddleware) {
    return context.next
  }

  return () => {
    const nextPipeline = middlewarePipeline(
      context, middleware, index + 1
    )

    nextMiddleware({ ...context, next: nextPipeline })

  }
}

export default middlewarePipeline