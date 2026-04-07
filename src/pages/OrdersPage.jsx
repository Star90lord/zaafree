import { Link } from 'react-router-dom'
import { useStore } from '../context/StoreContext'
import { formatINR } from '../utils/format'

function OrdersPage() {
  const { cartItems, cartSubtotal, user } = useStore()

  if (!user) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-black tracking-tight text-slate-950">
            Sign in to view orders
          </h1>
          <p className="mt-3 text-slate-600">
            Your order history, tracking, and checkout progress are available after sign-in.
          </p>
          <Link
            to="/signin?redirect=/orders"
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-bold text-white hover:bg-slate-800"
          >
            Go to sign in
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-4xl font-black tracking-tight text-slate-950">
          Orders and tracking
        </h1>
        <p className="mt-3 text-slate-600">
          Welcome back, {user.name}. This page shows your current checkout-ready items and recent order flow.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[1.5rem] bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-500">Items ready</p>
            <p className="mt-2 text-3xl font-black text-slate-950">{cartItems.length}</p>
          </div>
          <div className="rounded-[1.5rem] bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-500">Order value</p>
            <p className="mt-2 text-3xl font-black text-slate-950">
              {formatINR(cartSubtotal)}
            </p>
          </div>
          <div className="rounded-[1.5rem] bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-500">Next update</p>
            <p className="mt-2 text-3xl font-black text-slate-950">24 hrs</p>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-slate-600">
              No items are currently ready for checkout. Add something to your cart to continue.
            </p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="rounded-[1.5rem] border border-slate-200 p-4"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-lg font-bold text-slate-950">{item.title}</p>
                    <p className="text-sm text-slate-500">
                      Processing for dispatch. Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-emerald-700">
                    {item.delivery}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default OrdersPage
