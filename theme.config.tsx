import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <img src="https://thesaasfactory.dev/_next/image?url=%2Fassets%2Fimg%2Flogo.png&w=128&q=75" alt="" />,
  project: {
    link: 'https://github.com/The-SaaS-Factory/next-14-saas-boilerplate',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/The-SaaS-Factory/next-14-saas-boilerplate',
  footer: {
    text: 'The SaaS Factory Boilerplate Docs - Next 14 Version ',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – The SaaS Factory'
    }
  }
}

 

export default config
