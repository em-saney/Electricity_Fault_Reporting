import Header from '@/components/ui/header'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <>
      <Header  />

      <main className="grow bg-zinc-100">
        <section className="relative before:absolute before:inset-0 before:h-80 before:pointer-events-none bg-zinc-100">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="px-4 sm:px-6">

              {children}

            </div>
          </div>
        </section>
      </main>
    </>
  )
}
