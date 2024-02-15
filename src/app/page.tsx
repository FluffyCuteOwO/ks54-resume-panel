"use client";

import styles from '@/styles/home.module.scss';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <div>
        <h1>Создайте профессиональное резюме за пару кликов!</h1>
        <p>Наша платформа предоставляет удобный и интуитивно понятный инструмент, который поможет вам составить профессиональное резюме всего за несколько простых шагов.</p>
      </div>
      <div>
        <button onClick={() => router.push('/auth/register')}>Создать резюме</button>
        <a onClick={() => router.push('/auth/login')}>Уже зарегистрированы?</a>
      </div>
    </main>
  )
}