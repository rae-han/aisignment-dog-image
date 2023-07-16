import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import DefaultLayout from "@/layouts/DefaultLayout";
import Panel from "@/components/Panel";

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Panel></Panel>
      </DefaultLayout>
    </>
  )
}
