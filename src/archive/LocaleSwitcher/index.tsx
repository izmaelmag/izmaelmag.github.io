import React from 'react'
import Locales, { LocalesT } from 'constants/Locales'
import { Link } from 'gatsby'
import { LocaleSwitcher$ } from './styles'

const LocaleSwitcher = ({ locale }: { locale: LocalesT }) => {
  return (
    <LocaleSwitcher$>
      {locale === Locales.ru ? (
        <Link to='/en/'>
          In english
        </Link>
      ) : (
        <Link to='/ru/'>
          На русском
        </Link>
      )}
    </LocaleSwitcher$>
  )
}

export default LocaleSwitcher