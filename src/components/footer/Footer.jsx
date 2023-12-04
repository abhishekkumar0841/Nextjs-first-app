import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>@2023 abhishekkumar. All rights reserved!</div>
        <div className={styles.social}>
          <Image className={styles.icons} src='/fbLogo.png' width={20} height={20} alt='Facebook' />
          <Image className={styles.icons} src='/linkedin.png' width={20} height={20} alt='LinkedIn' />
          <Image className={styles.icons} src='/GithubLogo.png' width={20} height={20} alt='GitHub' />
        </div>
    </div>
  )
}

export default Footer