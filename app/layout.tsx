import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
  title: 'My Blog',
}
 
const banner = <Banner storageKey="some-key">My project 1.0 is released 🎉</Banner>
const navbar = (
  <Navbar
    logo={<b>🎉ZetaDb </b>}
    logoLink={"https://bhavyadang.in"}
    projectLink="https://github.com/bhavya-dang"
    chatLink="https://discord.gg/"
    // ... Your additional navbar options
  />
)
const footer = <Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>
const search = <Search placeholder="Search My wiki..."></Search>
 
export default async function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          search={search}
          editLink={null}
          feedback={{content: null}}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}