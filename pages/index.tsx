import { Layout, Text, Page, Code, Link } from '@vercel/examples-ui'
import { Mint } from '../components/Mint'

function Home() {
  return (
    <Page>
      <section className="flex flex-col gap-6">
        <Text variant="h1">SOFA 交易平台</Text>
        <Text>
          This web application provides solutions to quantitively and automatically trade via SOFA.org using a Metamask wallet.
        </Text>
      </section>

      <hr className="border-t border-accents-2 my-6" />

      <section className="flex flex-col ">
        <Mint />
      </section>
    </Page>
  )
}

Home.Layout = Layout

export default Home
